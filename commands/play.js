const getTracks = require('../utils/getTracks');
const getTrackUrl = require('../utils/getTrackUrl');

const play = async (message, args) => {
  const voiceChannel = message.member.voiceChannel;

  if (!voiceChannel) return;

  const permissions = voiceChannel.permissionsFor(message.client.user);

  if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) return;

  try {
    const tracks = await getTracks(args.join(' '));
    const trackUrl = await getTrackUrl(tracks[0].storageDir);

    const dispatcher = await voiceChannel.join();

    dispatcher.playArbitraryInput(trackUrl);

    return await message.channel.send('Playing ' + tracks[0].title + ' by ' + tracks[0].artists[0].name);
  } catch (error) {
    return await message.reply(error.message);
  }
}

module.exports = play;
