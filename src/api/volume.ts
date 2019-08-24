import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

const volume = async (cmd: ParsedMessage, msg: Message, bot: Bot) => {
  if (cmd.arguments.length > 0) {
    const temp = cmd.arguments[1];

    console.log(temp);

    if (temp) {
      const volume = Math.min(Math.max(parseInt(temp), 0), 100);
      bot.player.setVolume(volume);
    }
  }
  msg.channel.send(`:speaker: Volume is at ${bot.player.getVolume()}`);
};

export default volume;
