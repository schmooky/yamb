import { RichEmbed } from 'discord.js';

import { Bot } from './BotInterface';
import { MediaItem } from './BotMedia';
import BotMediaQueue from './BotMediaQueue';

import secondsToTimestamp from '../utils/secondsToTimestamp';

const logoYandexMusicURL = 'https://cache-mskstoredata05.cdn.yandex.net/download.cdn.yandex.net/from/yandex.ru/support/ru/music/files/icon_main.png';

const embedTrackAdded = (track: MediaItem): RichEmbed => {
  const embed = new RichEmbed()
    .setColor('#ffdb4d')
    .setDescription('Track added')
    .setThumbnail(`http://${track.albums[0].coverUri.slice(0, -2)}200x200`)
    .addField('Track', `${track.name}`, true)
    .addField('Artist', `${track.artists[0].name}`, true)
    .addField('Album', `${track.albums[0].title}`, true)
    .setFooter('Яндекс.Музыка©', logoYandexMusicURL);
  return embed;
};

const embedNowPlaying = (track: MediaItem): RichEmbed => {
  const embed = new RichEmbed()
    .setColor('#ffdb4d')
    .setAuthor(`${track.requestor.username}`, `${track.requestor.avatarURL}`)
    .setDescription('Now playing')
    .setThumbnail(`http://${track.albums[0].coverUri.slice(0, -2)}200x200`)
    .addField('Track', `${track.name}`, true)
    .addField('Artist', `${track.artists[0].name}`, true)
    .addField('Album', `${track.albums[0].title}`, true)
    .addField('Time', `${secondsToTimestamp(track.duration)}`, true)
    .setFooter('Яндекс.Музыка©', logoYandexMusicURL);
  return embed;
};

const embedList = (queue: BotMediaQueue): RichEmbed => {
  const embed = new RichEmbed()
    .setTitle(`There are ${queue.length} tracks in queue`)
    .setColor('#ffdb4d')
    .setFooter('Яндекс.Музыка©', logoYandexMusicURL);

  queue.slice(0, 10).forEach((item) => {
    embed.addField(`${item.name} by ${item.artists[0].name}`, `Requested by ${item.requestor.username}`);
  });

  return embed;
};

export {
  embedTrackAdded,
  embedNowPlaying,
  embedList,
};
