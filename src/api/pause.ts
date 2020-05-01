import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
/**
 * Pauses bot's music
 * @param  {ParsedMessage} cmd Command and arguments
 * @param  {Message} msg Message in which user asked to pause track
 * @param  {Bot} bot Bot instance
 * @returns Promise
 */

const pause = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  bot.player.pause();
};

export default pause;
