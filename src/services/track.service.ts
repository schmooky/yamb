import crypto from 'crypto';
import axios from 'axios';
import dotenv from 'dotenv';
import YandexMusicApi, { TrackInfo } from 'yandex-music-api';

dotenv.config();

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

const api = new YandexMusicApi();

const getTracks = async (name: string): Promise<TrackInfo[]> => {
  try {
    await api.init({ username: process.env.EMAIL, password: process.env.PASS });

    const query = name;
    const options = { type: 'track' };

    const results = await api.search(query, options);

    if (!results.tracks) {
      return Promise.reject(Error(`${name} not found`));
    }

    return results.tracks.results;
  } catch (error) {
    console.log(error);

    return error;
  }
};

const getStorageDir = async (storageDir: string): Promise<DownloadInfo> => {
  try {
    const storageURL = `https://storage.mds.yandex.net/download-info/${storageDir}/2?format=json`;

    const response = await axios.get(storageURL);

    return response.data;
  } catch (error) {
    console.log(error);

    return error;
  }
};

const getTrackUrl = (info: DownloadInfo): string => {
  const trackUrl = `XGRlBW9FXlekgbPrRHuSiA${info.path.substr(1)}${info.s}`;

  const hashedUrl = crypto
    .createHash('md5')
    .update(trackUrl)
    .digest('hex');

  const link = `https://${info.host}/get-mp3/${hashedUrl}/${info.ts}${info.path}`;

  return link;
};

const fetchTracksByName = async (name: string): Promise<Track[]> => {
  try {
    const tracksDetails = await getTracks(name);

    const tracks = tracksDetails.map(async (track): Promise<Track> => {
      const info = await getStorageDir(track.storageDir);
      const trackURL = await getTrackUrl(info);

      return {
        ...track,
        trackURL,
      };
    });

    const fetchedTracks = await Promise.all(tracks);

    return fetchedTracks;
  } catch (error) {
    console.log(error);

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
    console.log(error);

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
    const trackURL = await getTrackUrl(info);

    return {
      ...track,
      trackURL,
    };
  } catch (error) {
    console.log(error);

    return error;
  }
};

const parseTrackUrl = (url: string): DownloadID => {
  const startSlice = url.search(/album\//);

  const track = url.slice(startSlice, url.length).split('/');

  const albumID = track[1];
  const trackID = track[3];

  return { albumID, trackID };
};

export default {
  getStorageDir,
  getTrackUrl,
  fetchTracksByName,
  fetchTrackByID,
  parseTrackUrl,
};
