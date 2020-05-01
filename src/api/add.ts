import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import { MediaItem } from '../core/BotMedia';

import trackService from '../services/track.service';

/**
 * Finds track using Yandex.Music API and adds it to track list
 * @param  {ParsedMessage} cmd Command and arguments
 * @param  {Message} msg Message in which user asked to add track
 * @param  {Bot} bot Bot instance
 * @returns Promise
 */
const add = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  const args = cmd.arguments.join(' ');

  if (args) {
    const foundTracks = await trackService.findContentByURL(args);

    const tracks: MediaItem[] = foundTracks.map((track): MediaItem => ({
      type: 'yamusic',
      url: track.trackURL,
      name: track.title,
      duration: parseInt((track.durationMs / 1000).toFixed(0), 10),
      requestor: msg.author,
      albums: track.albums,
      artists: track.artists,
    }));

    bot.player.addMedia(tracks);
  } else msg.channel.send('Invalid type format');
};

export default add;
