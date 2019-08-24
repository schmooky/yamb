import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

const volume = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  if (cmd.arguments.length) {
    const temp = cmd.arguments[0];

    if (temp) {
      const vol = Math.min(Math.max(parseInt(temp, 10), 0), 100);

      bot.player.setVolume(vol);
    }
  }

  msg.channel.send(`:speaker: Volume is at ${bot.player.getVolume()}`);
};

export default volume;
