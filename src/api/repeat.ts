import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

const repeat = async (cmd: ParsedMessage, msg: Message, bot: Bot) => {
  bot.config.queue.repeat = !bot.config.queue.repeat;
  msg.channel.send(`Repeat mode is ${bot.config.queue.repeat ? 'on' : 'off'}`);
};

export default repeat;
