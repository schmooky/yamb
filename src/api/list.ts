import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

const list = async (cmd: ParsedMessage, msg: Message, bot: Bot) => {
  const items = bot.player.queue.map(
    (item, idx) => `${idx + 1}. Type: "${item.type}", Title: "${item.name}${
      item.requestor ? `", Requested By: ${item.requestor}` : ''
    }"`,
  );
  if (items.length > 0) msg.channel.send(items.join('\n'));
  else msg.channel.send(':cd: There are no songs in the queue.');
};

export default list;
