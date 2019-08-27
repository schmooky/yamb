import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

import { embedList } from '../core/BotEmbed';

const list = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  if (bot.player.queue.length > 0) msg.channel.send(embedList(bot.player.queue));
  else msg.channel.send(':cd: There are no songs in the queue.');
};

export default list;
