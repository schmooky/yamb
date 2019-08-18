const Servers = require('../servers');

const trackService = require('../services/tracks.service');

const playMusic = async (name, queue, message) => {
  const track = await trackService.fetchTracks(name);

  message.guild.voiceConnection.playArbitraryInput(track[0].trackUrl)
    .on('end', async () => {
      queue.shift();

      if (queue.isPlaying) {
        await playMusic(queue.songs[0].title, queue, message);

        return;
      }

      console.log('Queue has ended');
    });
};

const play = async (message, args) => {
  const server = Servers.get(message.guild.id);

  if (!message.member.voiceChannel) return;

  const permissions = message.member.voiceChannel.permissionsFor(message.client.user);

  if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) return;

  try {
    const [track] = await trackService.fetchTracks(args.join(' '));

    
    const dispatcher = await message.member.voiceChannel.join();

    if (!server.queue.isPlaying) {
      server.queue.add(track);

      await playMusic(track.title, server.queue, message);

      await message.channel.send(`🎵 Playing ${track.title} by ${track.artists[0].name}`);

      return;
    }

    server.queue.add(track);

    await message.channel.send(`🎵 Playing ${track.title} by ${track.artists[0].name}`);
  } catch (error) {
    await message.reply(error.message);
  }
};

module.exports = play;
