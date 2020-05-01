import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import joinUserChannel from '../utils/joinUserChannel';
/**
 * Makes bot join channel that user is in currently
 * @param  {ParsedMessage} cmd Command and arguments
 * @param  {Message} msg Message in which user asked to join
 * @param  {Bot} bot Bot instance
 * @returns Promise
 */

const join = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  try {
    const connection = await joinUserChannel(msg);

    bot.player.connection = connection;

    msg.channel.send(`:speaking_head: Joined channel: ${connection.channel.name}`);

    if (bot.config.auto.play) bot.player.play();
  } catch (error) {
    msg.channel.send(error.message);
  }
};

export default join;
