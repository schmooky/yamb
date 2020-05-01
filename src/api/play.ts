import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import joinUserChannel from '../utils/joinUserChannel';
/**
 * Starts playing music from track list if bot is connected to channel
 * @param  {ParsedMessage} cmd Command and arguments
 * @param  {Message} msg Message in which user asked to play music
 * @param  {Bot} bot Bot instance
 * @returns Promise
 */

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
