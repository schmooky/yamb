import crypto from 'crypto';
import axios from 'axios';
import dotenv from 'dotenv';
import { isYandexURL, isTrackURL, isAlbumURL } from '../utils/isURL';
import logger from '../utils/logger';

dotenv.config();

export interface SearchOptions {
  type: string;
}

export interface AlbumInfo {
  id: number;
  storageDir: string;
  originalReleaseYear: number;
  year: number;
  version: string;
  type: string;
  artists: [];
  coverUri: string;
  trackCount: number;
  genre: string;
  available: boolean;
  availableForPremiumUsers: boolean;
  title: string;
}

export interface Artist {
  id: number;
  cover: Cover;
  composer: boolean;
  name: string;
  various: boolean;
  decomposed: [];
}

export interface Cover {
  type: string;
  prefix: string;
  uri: string;
}

export interface TrackInfo {
  id: number;
  available: boolean;
  availableAsRbt: boolean;
  availableForPremiumUsers: boolean;
  lyricsAvailable: boolean;
  albums: AlbumInfo[];
  storageDir: string;
  durationMs: number;
  explicit: boolean;
  title: string;
  artists: Artist[];
  regions: string[];
}

export interface SearchResult {
  type: string;
  page: number;
  perPage: number;
  text: string;
  searchRequestId: string;
  tracks: {
    total: number;
    perPage: number;
    order: number;
    results: TrackInfo[];
  };
}

interface DownloadInfo {
  s: string;
  ts: string;
  path: string;
  host: string;
}

export interface Track extends TrackInfo {
  trackURL: string;
}

interface DownloadID {
  trackID: string;
  albumID: string;
}


/**
 * Запрашивает данные о треках с API Yandex.Music по названию трека
 *
 * @param  {string} name Название трека
 * @returns Promise Информация о треках
 */


const getTracksByName = async (name: string): Promise<TrackInfo[]> => {
  try {
    const JsonURL = `https://api.music.yandex.net/search?type=track&text=${name}&page=0`;

    const response = await axios.get(JsonURL);

    if (!response.data.result) {
      return Promise.reject(Error(`${name} not found`));
    }

    return response.data.result.tracks.results;
  } catch (error) {
    logger.error(error);

    return error;
  }
};


const getStorageDir = async (storageDir: string): Promise<DownloadInfo> => {
  try {
    const storageURL = `https://storage.mds.yandex.net/download-info/${storageDir}/2?format=json`;

    const response = await axios.get(storageURL);

    return response.data;
  } catch (error) {
    logger.error(error);

    return error;
  }
};

const getTrackURL = (info: DownloadInfo): string => {
  const trackUrl = `XGRlBW9FXlekgbPrRHuSiA${info.path.substr(1)}${info.s}`;

  const hashedUrl = crypto
    .createHash('md5')
    .update(trackUrl)
    .digest('hex');

  const link = `https://${info.host}/get-mp3/${hashedUrl}/${info.ts}${info.path}`;

  return link;
};

/**
 * Получает треки по имени
 *
 * @param  {string} name Имя трека
 * @returns Promise Искомые треки
 */
const fetchTracksByName = async (name: string): Promise<Track[]> => {
  try {
    const tracksDetails = await getTracksByName(name);

    const tracks = tracksDetails.map(async (track): Promise<Track> => {
      const info = await getStorageDir(track.storageDir);
      const trackURL = await getTrackURL(info);

      return {
        ...track,
        trackURL,
      };
    });

    const fetchedTracks = await Promise.all(tracks);

    return fetchedTracks;
  } catch (error) {
    logger.error(error);

    return error;
  }
};

/**
 * Запрашивает данные о треке с API Yandex.Music по ID трека
 *
 * @param  {string} id ID Трека
 * @returns Promise Информация о треке
 */
const getTrackByID = async (id: string): Promise<TrackInfo> => {
  try {
    const JsonURL = `https://music.yandex.ru/handlers/track.jsx?track=${id}`;

    const response = await axios.get(JsonURL);

    return response.data.track;
  } catch (error) {
    logger.error(error);

    return error;
  }
};

/**
 * Получает трек по ID
 *
 * @param  {string} id ID Трека
 * @returns Promise Искомый трек
 */
const fetchTrackByID = async (id: string): Promise<Track> => {
  try {
    const track = await getTrackByID(id);
    const info = await getStorageDir(track.storageDir);
    const trackURL = await getTrackURL(info);

    return {
      ...track,
      trackURL,
    };
  } catch (error) {
    logger.error(error);

    return error;
  }
};

/**
 * Запрашивает данные об альбоме с API Yandex.Music по ID альбома
 *
 * @param  {string} id ID Трека
 * @returns Promise Информация об альбоме
 */
const getAlbumByID = async (id: string): Promise<TrackInfo[]> => {
  try {
    const JsonURL = `https://music.yandex.ru/handlers/album.jsx?album=${id}`;

    const response = await axios.get(JsonURL);

    return response.data.volumes[0];
  } catch (error) {
    logger.error(error);

    return error;
  }
};

/**
 * Получает альбом по ID
 *
 * @param  {string} id ID Альбома
 * @returns Promise Искомый альбом
 */
const fetchAlbumByID = async (id: string): Promise<Track[]> => { // Promise<Track[]>
  try {
    const trackInfos = await getAlbumByID(id);

    const tracks = trackInfos.map(async (track): Promise<Track> => {
      const trackInfo = await getStorageDir(track.storageDir);
      const trackURL = await getTrackURL(trackInfo);

      return {
        ...track,
        trackURL,
      };
    });

    const fetchedTracks = await Promise.all(tracks);

    return fetchedTracks;
  } catch (error) {
    logger.error(error);

    return error;
  }
};

/**
 * Получает из ссылки номер альбома и трека
 * trackID будет равен 0 если была получена ссыкла на альбом
 *
 * @param  {string} url
 * @returns DownloadID Номер трека и альбома
 */
const parseTrackURL = (url: string): DownloadID => {
  if (isTrackURL(url)) {
    const startSlice = url.search(/album\/[0-9]*\/track\/[0-9]*$/);

    const info = url.slice(startSlice, url.length).split('/');

    return { albumID: info[1], trackID: info[3] };
  }

  if (isAlbumURL(url)) {
    const startSlice = url.search(/album\/[0-9]*$/);

    const info = url.slice(startSlice, url.length).split('/');

    return { albumID: info[1], trackID: '' };
  }

  return { albumID: '', trackID: '' };
};

/**
 * Находит треки по ссылке в Yandex.Music
 *
 * @param  {string} url Ссылка на альбом или трек в Yandex.Music
 * @returns Promise Искомые треки
 */
const findTracksByURL = async (url: string): Promise<Track[]> => {
  try {
    if (isYandexURL(url)) {
      const { albumID, trackID } = parseTrackURL(url);

      if (trackID) {
        const track = await fetchTrackByID(trackID);

        return [track];
      }
      const tracks = await fetchAlbumByID(albumID);

      return tracks;
    }
    return Promise.reject(Error(`${url} is wrong URL`));
  } catch (error) {
    logger.error(error);

    return error;
  }
};

export default {
  fetchTrackByID,
  fetchAlbumByID,
  parseTrackURL,
  findTracksByURL,
};
