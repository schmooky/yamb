import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

import { embedHelp } from '../core/BotEmbed';

const help = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  msg.channel.send(embedHelp());
};

export default help;
