const Servers = require('../servers');

const stop = async (message) => {
  const server = Servers.get(message.guild.id);

  server.queue.clear();

  message.member.voiceChannel.leave();

  await message.channel.send('Player stopped.');
};

module.exports = stop;
