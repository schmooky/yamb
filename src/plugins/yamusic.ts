/* eslint-disable class-methods-use-this */

import { Message } from 'discord.js';

import { Bot, BotPlugin } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import { MediaItem } from '../core/BotMedia';

import trackService from '../services/track.service';
import secondsToTimestamp from '../utils/secondsToTimestamp';
import { isYandexURL } from '../utils/isURL';

const yamusicType = 'yamusic';

export default class YamusicPlugin implements BotPlugin {
  public preInitialize(bot: Bot): void {
    bot.helptext += '\n`yamusic [url/idfragment]` - Add yandex audio to the queue\n';

    bot.commands.on(yamusicType, (cmd: ParsedMessage, msg: Message): void => {
      if (cmd.arguments.length > 0) {
        cmd.arguments.forEach(async (arg: string): Promise<void> => {
          if (isYandexURL(arg)) {
            const [track] = await trackService.fetchTracksByURL(arg);
            bot.player.addMedia({
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

    bot.player.typeRegistry.set(yamusicType, {
      getDetails: async (item: MediaItem): Promise<MediaItem> => {
        const [track] = await trackService.fetchTracksByURL(item.url);

        const media = {
          type: 'yamusic',
          name: track.title,
          url: track.trackURL,
        };

        return media;
      },
      getStream: (item: MediaItem): Promise<string> => new Promise((resolve, reject): void => {
        const input = item.url;
        if (input) resolve(input);
        else reject(Error('Unable to get media input'));
      }),
    });
  }

  public postInitialize(): void {}
}
