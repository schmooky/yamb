import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

const pause = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  bot.player.pause();
};

export default pause;
