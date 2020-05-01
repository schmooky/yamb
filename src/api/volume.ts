import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
/**
 * Sets bot's volume
 * @param  {ParsedMessage} cmd Command and arguments
 * @param  {Message} msg Message in which user asked to change volume
 * @param  {Bot} bot Bot instance
 * @returns Promise
 */

const volume = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  if (cmd.arguments.length) {
    const temp = cmd.arguments[0] ? parseFloat(cmd.arguments[0]) : null;

    if (temp) {
      const vol = Math.min(Math.max(temp / 100, 0.1), 1);

      bot.player.setVolume(vol);
    }
  }

  msg.channel.send(`:speaker: Volume is at ${bot.player.getVolume()}`);
};

export default volume;
