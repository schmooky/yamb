const YandexMusicApi = require('yandex-music-api');
const dotenv = require('dotenv').config();

const api = new YandexMusicApi();

const getTracks = async (name) => {
  try {
    await api.init({ username: process.env.EMAIL, password: process.env.PASS });

    const query = name,
          options = { type: 'track' };

    const results = await api.search(query, options);
    
    if (!results.tracks) {
      return Promise.reject(Error(`${name} not found`));
    }

    console.table(results.tracks.results.slice(0, 5), ['title'])

    return results.tracks.results;
  } catch (error) {
    console.log(error);
  }
}

module.exports = getTracks;
