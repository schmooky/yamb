import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

import { embedHelp } from '../core/BotEmbed';

/**
 * Prints bot's help to channel
 * @param  {ParsedMessage} cmd Command and arguments
 * @param  {Message} msg Message in which user asked to print help
 * @param  {Bot} bot Bot instance
 * @returns Promise
 */
const help = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  msg.channel.send(embedHelp());
};

export default help;
