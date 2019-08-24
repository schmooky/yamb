import { Client, Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import joinUserChannel from '../utils/joinUserChannel';

const join = async (cmd: ParsedMessage, msg: Message, bot: Bot) => {
  joinUserChannel(msg)
    .then((connection) => {
      bot.player.connection = connection;
      msg.channel.send(`:speaking_head: Joined channel: ${connection.channel.name}`);
      if (bot.config.auto!.play) bot.player.play();
    })
    .catch((err) => {
      msg.channel.send(err);
    });
};

export default join;
