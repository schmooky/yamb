const Servers = require('../servers');

const queue = async (message) => {
  const server = Servers.get(message.guild.id);

  if (!server.queue.isPlaying) {
    await message.channel.send('Queue is empty');

    return;
  }

  const queueMessage = server.queue.songs.map(song => `${song.title} ${song.artists[0].name}\n`);

  await message.channel.send(queueMessage);
};

module.exports = queue;
