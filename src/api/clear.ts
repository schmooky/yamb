import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

/**
 * Clears track list
 * @param  {ParsedMessage} cmd Command and arguments
 * @param  {Message} msg Message in which user asked to clear queue
 * @param  {Bot} bot Bot instance
 * @returns Promise
 */
const clear = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  bot.player.clear();
};

export default clear;
