const YandexMusicApi = require('yandex-music-api');
const dotenv = require('dotenv').config();

const api = new YandexMusicApi();

async function findTrack(name) {
  await api.init({ username: process.env.EMAIL, password: process.env.PASS });

  const query = name,
        options = { type: 'track' };

  const results = await api.search(query, options);
  console.log('\x1b[36m'+'Found track ' + results.tracks.results[0].title + ' by ' + results.tracks.results[0].artists[0].name + '\x1b[0m');
  return results.tracks.results[0].storageDir;
}

module.exports = findTrack;
