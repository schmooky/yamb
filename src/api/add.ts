import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

import trackService from '../services/track.service';

const add = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  if (cmd.arguments.length > 0) {
    cmd.arguments.forEach(async (arg): Promise<void> => {
      const parts = arg.split(':');
      if (parts.length === 2) {
        const [track] = await trackService.findTracksByURL(parts[1]);
        bot.player.addMedia({ type: parts[0], url: track.trackURL, requestor: msg.author.username });
      } else msg.channel.send('Invalid type format');
    });
  }
};

export default add;
