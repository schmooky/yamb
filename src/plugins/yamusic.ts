/* eslint-disable class-methods-use-this */

import { Message, User } from 'discord.js';

import { Bot, BotPlugin } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import { MediaItem } from '../core/BotMedia';

import trackService from '../services/track.service';
import { isYandexURL } from '../utils/isURL';

const yamusicType = 'yamusic';

export default class YamusicPlugin implements BotPlugin {
  public preInitialize(bot: Bot): void {
    bot.helptext += '\n`yamusic [url/idfragment]` - Add yandex audio to the queue\n';

    bot.commands.on(yamusicType, (cmd: ParsedMessage, msg: Message): void => {
      if (cmd.arguments.length > 0) {
        cmd.arguments.forEach(async (arg: string): Promise<void> => {
          if (isYandexURL(arg)) {
            const [track] = await trackService.findContentByURL(arg);
            bot.player.addMedia([{
              type: yamusicType,
              url: track.trackURL,
              duration: 0,
              requestor: msg.author,
              name: track.title,
              albums: track.albums,
              artists: track.artists,
            }]);
          }
        });
      }
    });

    bot.player.typeRegistry.set(yamusicType, {
      getDetails: async (item: MediaItem): Promise<MediaItem> => {
        const [track] = await trackService.findContentByURL(item.url);

        const media = {
          type: 'yamusic',
          name: track.title,
          url: track.trackURL,
          duration: 0,
          requestor: new User(bot.client, {}),
          albums: track.albums,
          artists: track.artists,
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
