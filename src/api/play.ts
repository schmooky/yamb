import { Message, Permissions } from 'discord.js';

import trackService from '../services/track.service';

import { isURL, isYandexURL } from '../utils/isURL';
import logger from '../utils/logger';

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
    let track;

    if (isURL(args[0])) {
      [track] = await trackService.findTracksByURL(args[0]);
    } else {
      [track] = await trackService.fetchTracksByName(args.join(' '));
    }

    logger.info(track.title);

    const connection = await message.member.voiceChannel.join();

    connection.playArbitraryInput(track.trackURL);
  } catch (error) {
    await message.reply(error.message);
  }
};

export default play;
