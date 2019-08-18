const Queue = require('../queue');

const clear = async (message) => {
  if (!message.member.voiceChannel) return;

  Queue.clear();

  await message.channel.send('Queue was cleared');
};

module.exports = clear;
