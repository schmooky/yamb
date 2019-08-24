import fs from 'fs';
import { Message } from 'discord.js';
import request from 'request';
import {
  Bot, BotPlugin, MediaItem, ParsedMessage,
} from '../resources';


import trackService from '../services/track.service';
import { isYandexURL } from '../utils/isURL';
import secondsToTimestamp from '../utils/secondsToTimestamp';

const yamusicType = 'yamusic';

export default class YamusicPlugin implements BotPlugin {
  preInitialize(bot: Bot): void {
    bot.helptext += '\n`yandex [url/idfragment]` - Add yandex audio to the queue\n';
    const { player } = bot;

    bot.commands.on(yamusicType, (cmd: ParsedMessage, msg: Message) => {
      if (cmd.arguments.length > 0) {
        cmd.arguments.forEach(async (arg) => {
          if (isYandexURL(arg)) {
            const [track] = await trackService.findTracksByURL(arg);
            player.addMedia({
              type: yamusicType,
              url: track.trackURL,
              duration: secondsToTimestamp((Math.floor(track.durationMs / 1000))),
              requestor: msg.author.username,
              name: track.title,
            });
          }
        });
      }
    });

    player.typeRegistry.set(yamusicType, {
      getDetails: async (item: MediaItem) => {
        const [track] = await trackService.findTracksByURL(item.url);

        const media = {
          type: 'yamusic',
          name: track.title,
          url: track.trackURL,
        };

        console.trace(media.url);

        return media;
      },
      getStream: (item: MediaItem) => new Promise((resolve, reject) => {
        const input = item.url;
        if (input) resolve(input);
        else reject('Unable to get media input');
      }),
    });
  }

  postInitialize(bot: Bot): void {}
}
