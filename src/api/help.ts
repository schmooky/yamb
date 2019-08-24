import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

const help = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  msg.channel.send(bot.helptext);
};

export default help;
