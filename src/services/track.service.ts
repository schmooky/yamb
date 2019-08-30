import crypto from 'crypto';
import axios from 'axios';
import dotenv from 'dotenv';

import {
  isYandexURL,
  isTrackURL,
  isAlbumURL,
  isPlaylistURL,
} from '../utils/isURL';

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

interface PlaylistTrack {
  id: number;
  track: TrackInfo;
  timestamp: string;
  recent: boolean;
}

export interface Track extends TrackInfo {
  trackURL: string;
}

interface DownloadID {
  trackID: string;
  albumID: string;
}


const downloadInfo = async (storageDir: string): Promise<DownloadInfo> => {
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
 * Принимает идентификатор трека и возвращает трек
 * @param  {string} trackID ID трека
 * @returns {Promise<Track[]>} Массив с треком
 */
const findTrack = async (trackID: string): Promise<Track[]> => {
  try {
    const jsonURL = `https://music.yandex.ru/handlers/track.jsx?track=${trackID}`;

    const response = await axios.get(jsonURL);
    const info = await downloadInfo(response.data.track.storageDir);
    const trackURL = getTrackURL(info);

    const track = {
      ...response.data.track,
      trackURL,
    };

    return [track];
  } catch (error) {
    logger.error(error);

    return error;
  }
};

/**
 * Принимает идентификатор альбома и возвращает треки из альбома
 * @param  {string} albumID ID плейлиста
 *
 * @returns {Promise<Track[]>} Массив с треками альбома
 */
const findAlbum = async (albumID: string): Promise<Track[]> => {
  try {
    const jsonURL = `https://music.yandex.ru/handlers/album.jsx?album=${albumID}`;

    const response = await axios.get(jsonURL);
    const albumTracks = response.data.volumes[0];

    const tracks: Track[] = albumTracks.map(async (track: Track): Promise<Track> => {
      const trackInfo = await downloadInfo(track.storageDir);
      const trackURL = getTrackURL(trackInfo);

      return {
        ...track,
        trackURL,
      };
    });

    const foundTracks = await Promise.all(tracks);

    return foundTracks;
  } catch (error) {
    logger.error(error);

    return error;
  }
};

/**
 * Принимает идентификаторы плейлиста и возвращает треки из плейлиста
 * @param  {string} username Имя владельца плейлиста
 * @param  {string} playlistID ID плейлиста
 *
 * @returns {Promise<Track[]>} Массив с треками плейлиста
 */
const findPlaylist = async (username: string, playlistID: string): Promise<Track[]> => {
  try {
    const jsonURL = `https://api.music.yandex.net/users/${username}/playlists/${playlistID}`;

    const response = await axios.get(jsonURL);
    const playlistTracks = response.data.result.tracks;

    const tracks: Track[] = playlistTracks.map(async (track: PlaylistTrack): Promise<Track> => {
      const trackInfo = await downloadInfo(track.track.storageDir);
      const trackURL = getTrackURL(trackInfo);

      return {
        ...track.track,
        trackURL,
      };
    });

    const foundTracks = await Promise.all(tracks);

    return foundTracks;
  } catch (error) {
    logger.error(error);

    return error;
  }
};

/**
 * Принимает ссылку на контент и возвращает массив с найденным контентом
 * @param  {string} url Ссылка на контент
 *
 * @returns {Promise<Track[]>} Массив с треками
 */
const findContentByURL = async (url: string): Promise<Track[]> => {
  try {
    if (isYandexURL(url)) {
      if (isTrackURL(url)) {
        const startSlice = url.search(/album\/[0-9]*\/track\/[0-9]*$/);
        const info = url.slice(startSlice, url.length).split('/');

        return findTrack(info[3]);
      }
      if (isAlbumURL(url)) {
        const startSlice = url.search(/album\/[0-9]*$/);
        const info = url.slice(startSlice, url.length).split('/');

        return findAlbum(info[1]);
      }
      if (isPlaylistURL(url)) {
        const startSlice = url.search(/users\/(.*)\//);
        const info = url.slice(startSlice, url.length).split('/');

        return findPlaylist(info[1], info[3]);
      }

      return Promise.reject(Error(`${url} is wrong Yandex URL`));
    }

    return Promise.reject(Error(`${url} is wrong URL`));
  } catch (error) {
    logger.error(error);

    return error;
  }
};


//! Add usage to add.ts
/**
 * Принимает название трека и возвращает результаты поиска
 *
 * @param  {string} trackName Название трека
 * @returns {Promise<Track[]>} Результаты поиска трека по названию
 */
const findTrackByName = async (trackName: string): Promise<Track[]> => {
  try {
    const JsonURL = `https://api.music.yandex.net/search?type=track&text=${trackName}&page=0`;

    const response = await axios.get(JsonURL);

    if (!response.data.result) {
      return Promise.reject(Error(`${trackName} not found`));
    }

    const foundTracks = response.data.result.tracks.results;
    const tracks: Track[] = foundTracks.map(async (track: Track): Promise<Track> => {
      const trackInfo = await downloadInfo(track.storageDir);
      const trackURL = getTrackURL(trackInfo);

      return {
        ...track,
        trackURL,
      };
    });

    return tracks;
  } catch (error) {
    logger.error(error);

    return error;
  }
};

export default {
  findContentByURL,
  findTrackByName,
};
