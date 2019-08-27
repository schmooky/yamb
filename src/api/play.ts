import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import joinUserChannel from '../utils/joinUserChannel';

const play = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  try {
    if (!bot.player.connection) {
      const connection = await joinUserChannel(msg);

      bot.player.connection = connection;

      msg.channel.send(`📢 Joined channel: ${connection.channel.name}`);
    }

    bot.player.play();
  } catch (error) {
    msg.channel.send(error.message);
  }
};

export default play;
