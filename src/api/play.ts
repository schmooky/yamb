import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import joinUserChannel from '../utils/joinUserChannel';

const play = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  if (!bot.player.connection) {
    const connection = await joinUserChannel(msg);

    bot.player.connection = connection;

    msg.channel.send(`:speaking_head: Joined channel: ${connection.channel.name}`);
  }

  bot.player.play();
};

export default play;
