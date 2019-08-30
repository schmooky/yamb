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

const createTrackURL = (info: DownloadInfo): string => {
  const trackUrl = `XGRlBW9FXlekgbPrRHuSiA${info.path.substr(1)}${info.s}`;

  const hashedUrl = crypto
    .createHash('md5')
    .update(trackUrl)
    .digest('hex');

  const link = `https://${info.host}/get-mp3/${hashedUrl}/${info.ts}${info.path}`;

  return link;
};

const findTrack = async (trackID: string): Promise<Track[]> => {
  try {
    const jsonURL = `https://music.yandex.ru/handlers/track.jsx?track=${trackID}`;

    const response = await axios.get(jsonURL);
    const info = await downloadInfo(response.data.track.storageDir);

    const trackURL = createTrackURL(info);

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

const findAlbum = async (albumID: string): Promise<Track[]> => {
  try {
    const jsonURL = `https://music.yandex.ru/handlers/album.jsx?album=${albumID}`;

    const response = await axios.get(jsonURL);
    const albumTracks = response.data.volumes[0];

    const tracks: Track[] = albumTracks.map(async (track: Track): Promise<Track> => {
      const trackInfo = await downloadInfo(track.storageDir);
      const trackURL = createTrackURL(trackInfo);

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

const findPlaylist = async (username: string, playlistID: string): Promise<Track[]> => {
  try {
    const jsonURL = `https://api.music.yandex.net/users/${username}/playlists/${playlistID}`;

    const response = await axios.get(jsonURL);
    const playlistTracks = response.data.result.tracks;

    const tracks: Track[] = playlistTracks.map(async (track: PlaylistTrack): Promise<Track> => {
      const trackInfo = await downloadInfo(track.track.storageDir);
      const trackURL = createTrackURL(trackInfo);

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

const findContentByURL = async (url: string): Promise<Track[]> => {
  try {
    if (isYandexURL(url)) {
      if (isTrackURL(url)) {
        const startSlice = url.search(/album\/[0-9]*\/track\/[0-9]*$/);
        const info = url.slice(startSlice, url.length).split('/');

        const tracks = await findTrack(info[3]);

        return tracks;
      }

      if (isAlbumURL(url)) {
        const startSlice = url.search(/album\/[0-9]*$/);
        const info = url.slice(startSlice, url.length).split('/');

        const tracks = await findAlbum(info[1]);

        return tracks;
      }

      if (isPlaylistURL(url)) {
        const startSlice = url.search(/users\/(.*)\//);
        const info = url.slice(startSlice, url.length).split('/');

        const tracks = await findPlaylist(info[1], info[3]);

        return tracks;
      }

      return Promise.reject(Error(`${url} is wrong Yandex URL`));
    }

    return Promise.reject(Error(`${url} is wrong URL`));
  } catch (error) {
    logger.error(error);

    return error;
  }
};

const findTrackByName = async (trackName: string): Promise<Track[]> => {
  try {
    const JsonURL = `https://api.music.yandex.net/search?type=track&text=${trackName}&page=0`;

    const response = await axios.get(JsonURL);

    if (!response.data.result) {
      return Promise.reject(Error(`${trackName} not found`));
    }

    const [track] = response.data.result.tracks.results;

    const trackInfo = await downloadInfo(track.storageDir);
    const trackURL = createTrackURL(trackInfo);

    return {
      ...track,
      trackURL,
    };
  } catch (error) {
    logger.error(error);

    return error;
  }
};

const findAlbumByName = async (albumName: string): Promise<Track[]> => {
  try {
    const JsonURL = `https://api.music.yandex.net/search?type=track&text=${albumName}&page=0`;

    const response = await axios.get(JsonURL);

    if (!response.data.result) {
      return Promise.reject(Error(`${albumName} not found`));
    }

    const tracks: Track[] = response.data.result.tracks.results.map(async (track: Track): Promise<Track> => {
      const trackInfo = await downloadInfo(track.storageDir);
      const trackURL = createTrackURL(trackInfo);

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

export default {
  findContentByURL,
  findTrackByName,
  findAlbumByName,
};
