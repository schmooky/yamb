import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
/**
 * Toggles repeat mode
 * @param  {ParsedMessage} cmd Command and arguments
 * @param  {Message} msg Message in which user asked to toggle repeat
 * @param  {Bot} bot Bot instance
 * @returns Promise
 */

const repeat = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  bot.config.queue.repeat = !bot.config.queue.repeat;

  msg.channel.send(`Repeat mode is ${bot.config.queue.repeat ? 'on' : 'off'}`);
};

export default repeat;
