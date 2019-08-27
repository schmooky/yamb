import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import { MediaItem } from '../core/BotMedia';

import trackService from '../services/track.service';

const add = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  const args = cmd.arguments.join(' ');

  if (args) {
    const [track] = await trackService.findTracksByURL(args);

    const media: MediaItem = {
      type: 'yamusic',
      url: track.trackURL,
      name: track.title,
      duration: (track.durationMs / 1000).toFixed(0),
      requestor: msg.author.username,
      albums: track.albums,
      artists: track.artists,
    };

    bot.player.addMedia(media);
  } else msg.channel.send('Invalid type format');
};

export default add;
