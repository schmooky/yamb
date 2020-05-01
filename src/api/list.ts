import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

import { embedList } from '../core/BotEmbed';
/**
 * Prints track list
 * @param  {ParsedMessage} cmd Command and arguments
 * @param  {Message} msg Message in which user asked to print track list
 * @param  {Bot} bot Bot instance
 * @returns Promise
 */

const list = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  const { queue } = bot.player;

  if (queue.length > 0) {
    const requestedPage = cmd.arguments[0] ? parseInt(cmd.arguments[0], 10) : 1;

    const queuePageCount = Math.ceil(queue.length / 10);

    const page = (requestedPage >= 1 && requestedPage <= queuePageCount) ? requestedPage : 1;

    msg.channel.send(embedList(queue, page));
  } else msg.channel.send('❌ There are no songs in the queue');
};

export default list;
