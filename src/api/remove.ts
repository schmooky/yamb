import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

const remove = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  if (cmd.arguments.length > 0) {
    const idx = parseInt(cmd.arguments[0], 10);

    const item = bot.player.at(idx - 1);

    if (item) {
      bot.player.remove(item);
    }
  }
};

export default remove;
