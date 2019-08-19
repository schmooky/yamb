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
  trackUrl: string;
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

const fetchTrack = async (name: string): Promise<Track[]> => {
  const tracksDetails = await getTracks(name);

  const tracks = tracksDetails.map(async (track): Promise<Track> => {
    const info = await getStorageDir(track.storageDir);
    const trackUrl = await getTrackUrl(info);

    return {
      ...track,
      trackUrl,
    };
  });

  const fetchedTracks = await Promise.all(tracks);

  return fetchedTracks;
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
  fetchTrack,
  parseTrackUrl,
};
