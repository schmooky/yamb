import { Message } from 'discord.js';

import logger from '../utils/logger';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import { MediaItem } from '../core/BotMedia';

import trackService, { Track } from '../services/track.service';

const add = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  const args = cmd.arguments.join(' ');

  if (args) {
    const foundTracks = await trackService.findContentByURL(args);

    const tracks: MediaItem[] = await Promise.all(foundTracks.map(async (track: Track): Promise<MediaItem> => ({
      type: 'yamusic',
      url: track.trackURL,
      name: track.title,
      duration: parseInt((track.durationMs / 1000).toFixed(0), 10),
      requestor: msg.author,
      albums: track.albums,
      artists: track.artists,
    })));

    bot.player.addMedia(tracks);
  } else msg.channel.send('Invalid type format');
};

export default add;
