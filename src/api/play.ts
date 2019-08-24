import { Client, Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import joinUserChannel from '../utils/joinUserChannel';

const play = async (cmd: ParsedMessage, msg: Message, bot: Bot) => {
  new Promise((done) => {
    if (!bot.player.connection) {
      joinUserChannel(msg).then((conn) => {
        bot.player.connection = conn;
        msg.channel.send(`:speaking_head: Joined channel: ${conn.channel.name}`);
        done();
      });
    } else done();
  }).then(() => {
    bot.player.play();
  });
};

export default play;
