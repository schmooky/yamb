import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
/**
 * Shuffles track list
 * @param  {ParsedMessage} cmd Command and arguments
 * @param  {Message} msg Message in which user asked to shuffle
 * @param  {Bot} bot Bot instance
 * @returns Promise
 */

const shuffle = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  bot.player.shuffle();

  msg.channel.send('🔀 Queue is shuffled');
};

export default shuffle;
