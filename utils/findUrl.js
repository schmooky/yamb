const https = require('https');
const crypto = require('crypto');
const axios = require('axios');

const getStorageDir = async (storageDir = '58933_a12a58e5.5738272.1.4304188') => {
  const storageURL = `https://storage.mds.yandex.net/download-info/${storageDir}/2?format=json`;

  const response = await axios.get(storageDir);

  return response.data;
};

getStorageDir()
  .then(res => console.log(res));


const createLink = async (storageDir = '58933_a12a58e5.5738272.1.4304188') => {
  const track = await getStorageDir(storageDir);

  const trackUrl = `XGRlBW9FXlekgbPrRHuSiA${track.path.substr(1)}${track.s}`;

  const hashedUrl = crypto.createHash('md5').update(trackUrl, 'hex');

  const link = `https://${track.host}/get-mp3/${hashedUrl}/${track.ts}${track.path}`;

  return link;
};
