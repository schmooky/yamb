import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import secondsToTimestamp from '../utils/secondsToTimestamp';
/**
 * Print's elapsed time of current track
 * @param  {ParsedMessage} cmd Command and arguments
 * @param  {Message} msg Message in which user asked to print time
 * @param  {Bot} bot Bot instance
 * @returns Promise
 */

const time = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  const media = bot.player.nowPlaying;

  if (bot.player.playing && media && bot.player.dispatcher) {
    const elapsed = secondsToTimestamp(bot.player.dispatcher.totalStreamTime / 1000);

    msg.channel.send(`${elapsed} / ${secondsToTimestamp(media.duration)}`);
  } else if (media) {
    msg.channel.send(`00:00:00 / ${secondsToTimestamp(media.duration)}`);
  }
};

export default time;
