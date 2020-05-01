import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import { embedNowPlaying } from '../core/BotEmbed';
/**
 * Prints track that is currently being played
 * @param  {ParsedMessage} cmd Command and arguments
 * @param  {Message} msg Message in which user asked to print track
 * @param  {Bot} bot Bot instance
 * @returns Promise
 */

const np = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  const { nowPlaying } = bot.player;

  if (!bot.player.connection || !nowPlaying) {
    msg.channel.send('❌ Nothing is currently playing');
    return;
  }

  msg.channel.send(embedNowPlaying(nowPlaying));
};

export default np;
