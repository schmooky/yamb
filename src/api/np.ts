import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

const np = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  const nowPlaying = bot.player.queue.first;

  if (!bot.player.connection || !nowPlaying) {
    msg.channel.send('Nothing is playing now');

    return;
  }

  msg.channel.send(`Now playing: ${nowPlaying.name}`);
};

export default np;
