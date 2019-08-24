import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

const shuffle = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  bot.player.shuffle();

  msg.channel.send('Queue is shuffled');
};

export default shuffle;
