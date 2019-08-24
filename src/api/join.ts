import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import joinUserChannel from '../utils/joinUserChannel';

const join = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  try {
    const connection = await joinUserChannel(msg);

    bot.player.connection = connection;

    msg.channel.send(`:speaking_head: Joined channel: ${connection.channel.name}`);

    if (bot.config.auto.play) bot.player.play();
  } catch (error) {
    msg.channel.send(error);
  }
};

export default join;
