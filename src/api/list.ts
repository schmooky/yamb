import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

import { embedList } from '../core/BotEmbed';

const list = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  const { queue } = bot.player;
  if (queue.length > 0) {
    const requestedPage = parseInt(cmd.arguments[0], 10);
    if (!Number.isNaN(requestedPage) || !cmd.arguments[0]) {
      const queuePageCount = Math.ceil(queue.length / 10);

      let exactpage = requestedPage ? requestedPage - 1 : 0;
      exactpage = exactpage < queuePageCount ? exactpage : queuePageCount;

      msg.channel.send(embedList(queue, exactpage));
    } else {
      msg.channel.send('❌ Wrong page number');
    }
  } else msg.channel.send('❌ There are no songs in the queue');
};

export default list;
