import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

const shuffle = async (cmd: ParsedMessage, msg: Message, bot: Bot) => {
  bot.player.shuffle();
};

export default shuffle;
