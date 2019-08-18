const Queue = require('../queue');

const skip = async (message) => {
  Queue.songs.shift();
};

module.exports = skip;
