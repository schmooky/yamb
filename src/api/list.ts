import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

import { embedList } from '../core/BotEmbed';

const list = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  if (bot.player.queue.length > 0) {
    const queuePageCount = Math.ceil(bot.player.queue.length / 10);
    const parsedcmd = parseInt(cmd.arguments[0], 10);

    let exactpage = parsedcmd ? parsedcmd - 1 : 0;
    exactpage = exactpage < queuePageCount ? exactpage : queuePageCount;

    msg.channel.send(embedList(bot.player.queue, exactpage));
  } else msg.channel.send('❌ There are no songs in the queue.');
};

export default list;
