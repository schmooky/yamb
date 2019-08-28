import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import { embedNowPlaying } from '../core/BotEmbed';

const np = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  const { nowPlaying } = bot.player;

  if (!bot.player.connection || !nowPlaying) {
    msg.channel.send('❌ Nothing is currently playing');
    return;
  }

  msg.channel.send(embedNowPlaying(nowPlaying));
};

export default np;
