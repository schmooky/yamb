import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
/**
 * Removes track from track list
 * @param  {ParsedMessage} cmd Command and arguments
 * @param  {Message} msg Message in which user asked to remove track
 * @param  {Bot} bot Bot instance
 * @returns Promise
 */

const remove = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  if (cmd.arguments.length) {
    const idx = parseInt(cmd.arguments[0], 10);

    const item = bot.player.at(idx - 1);

    if (item) {
      bot.player.remove(item);
    }
  } else msg.channel.send('You did not support any arguments');
};

export default remove;
