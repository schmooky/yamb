const crypto = require('crypto');
const axios = require('axios');
const YandexMusicApi = require('yandex-music-api');
const dotenv = require('dotenv');

dotenv.config();

const api = new YandexMusicApi();

const getTracks = async (name) => {
  try {
    await api.init({ username: process.env.EMAIL, password: process.env.PASS });

    const query = name;
    const options = { type: 'track' };

    const results = await api.search(query, options);

    if (!results.tracks) {
      return Promise.reject(Error(`${name} not found`));
    }

    results.tracks.results.slice(0, 5).forEach((element) => {
      console.log(element.title, element.artists[0].name);
    });

    return results.tracks.results;
  } catch (error) {
    console.log(error);

    return error;
  }
};

const getStorageDir = async (storageDir) => {
  try {
    const storageURL = `https://storage.mds.yandex.net/download-info/${storageDir}/2?format=json`;

    const response = await axios.get(storageURL);

    return response.data;
  } catch (error) {
    console.log(error);

    return error;
  }
};

const getTrackUrl = async (storageDir) => {
  try {
    const track = await getStorageDir(storageDir);

    const trackUrl = `XGRlBW9FXlekgbPrRHuSiA${track.path.substr(1)}${track.s}`;

    const hashedUrl = crypto
      .createHash('md5')
      .update(trackUrl)
      .digest('hex');

    const link = `https://${track.host}/get-mp3/${hashedUrl}/${track.ts}${track.path}`;

    return link;
  } catch (error) {
    console.log(error);

    return error;
  }
};

const fetchTracks = async (name) => {
  const tracksDetails = await getTracks(name);

  const tracks = tracksDetails.map(async (track) => {
    const trackUrl = await getTrackUrl(track.storageDir);

    return {
      ...track,
      trackUrl,
    };
  });

  const fetchedTracks = await Promise.all(tracks);

  return fetchedTracks;
};

const parseTrackUrl = (url) => {
  const track = url.slice(url.match(new RegExp('album/')).index, url.length).split('/');

  const albumID = track[1];
  const trackID = track[3];

  return { albumID, trackID };
};

module.exports = {
  getStorageDir,
  getTrackUrl,
  fetchTracks,
};
