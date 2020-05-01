import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
/**
 * Skips current track
 * @param  {ParsedMessage} cmd Command and arguments
 * @param  {Message} msg Message in which user asked to skip
 * @param  {Bot} bot Bot instance
 * @returns Promise
 */


const skip = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  bot.player.skip();
};

export default skip;
