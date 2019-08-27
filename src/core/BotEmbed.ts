import { RichEmbed } from 'discord.js';

import { MediaItem } from './BotMedia';

import secondsToTimestamp from '../utils/secondsToTimestamp';

const logoYandexMusicURL = `https://cache-mskstoredata05.cdn.yandex.net/
download.cdn.yandex.net/from/yandex.ru/support/ru/music/files/icon_main.png`;

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

export {
  embedTrackAdded,
  embedNowPlaying,
};
