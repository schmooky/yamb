import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

const clear = async (cmd: ParsedMessage, msg: Message, bot: Bot) => {
  bot.player.clear();
};

export default clear;
