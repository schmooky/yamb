import { Message, Permissions } from 'discord.js';

import trackService from '../services/track.service';

import { isURL, isYandexURL } from '../utils/isURL';

/**
 * Обрабатывает команду воспроизведения трека
 *
 * @param  {Message} message
 * @param  {string[]} args
 * @returns Promise
 */
const play = async (message: Message, args: string[]): Promise<void> => {
  if (!message.member.voiceChannel) {
    await message.channel.send('❌ You are not in a voice channel');

    return;
  }

  const permissions = message.member.voiceChannel.permissionsFor(message.client.user) as Permissions;

  if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) return;

  try {
    if (isYandexURL(args[0])) {
      await message.channel.send('🎵 Handling Yandex.Music URL');

      const { albumID, trackID } = trackService.parseTrackUrl(args[0]);
      const track = await trackService.fetchTrackByID(trackID);

      const connection = await message.member.voiceChannel.join();

      connection.playArbitraryInput(track.trackURL);

      return;
    }
    if (isURL(args[0])) {
      await message.channel.send('👺 Handling wrong URL');

      return;
    }
    await message.channel.send('📜 Handling text');

    const [track] = await trackService.fetchTracksByName(args.join(' '));

    const connection = await message.member.voiceChannel.join();

    connection.playArbitraryInput(track.trackURL);

    await message.channel.send(`🎵 Playing ${track.title} by ${track.artists[0].name}`);
  } catch (error) {
    await message.reply(error.message);
  }
};

export default play;
