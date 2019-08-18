const https = require('https');
const crypto = require('crypto');
const axios = require('axios');

const getStorageDir = async (storageDir) => {
  try {
    const storageURL = `https://storage.mds.yandex.net/download-info/${storageDir}/2?format=json`;

    const response = await axios.get(storageURL);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createLink = async (storageDir) => {
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
  }
};

module.exports = createLink;