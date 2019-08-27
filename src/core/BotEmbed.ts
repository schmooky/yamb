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

const embedList = (queue: BotMediaQueue, page: number): RichEmbed => {
  const tracksPerPage = 10;
  const pageStart = tracksPerPage * page;
  const pageEnd = tracksPerPage * (page + 1);

  const embed = new RichEmbed()
    .setTitle(`There are ${queue.length} tracks in queue, displaying page ${page + 1}`)
    .setColor('#ffdb4d')
    .setFooter('Яндекс.Музыка©', logoYandexMusicURL);

  queue.slice(pageStart, pageEnd).forEach((item) => {
    embed.addField(`${item.name} by ${item.artists[0].name}`, `Requested by ${item.requestor.username}`);
  });

  return embed;
};

const embedHelp = (): RichEmbed => {
  const embed = new RichEmbed()
    .setTitle('Help')
    .setColor('#ffdb4d')
    .addField('Add new track to queue', '```css\n~add [yandex.music track url]\n```')
    .addField('Clear queue', '```css\n~clear\n```')
    .addField('Show help', '```css\n~help\n```')
    .addField('Join voice channel', '```css\n~join\n```')
    .addField('Show first 10 tracks of queue or exact page', '```css\n~list\n~list [page number]\n```')
    .addField('Move track in queue to different position', '```css\n~move [current position in queue] [target position in queue]\n```')
    .addField('Show currently playing track', '```css\n~np\n```')
    .addField('Pause player', '```css\n~pause\n```')
    .addField('Start or resume player', '```css\n~play\n```')
    .addField('Remove track from queue', '```css\n~remove [position in queue]\n```')
    .addField('Toggle repeat', '```css\n~repeat\n```')
    .addField('Shuffle queue', '```css\n~shuffle\n```')
    .addField('Skip currently playing track', '```css\n~skip\n```')
    .addField('Stop player', '```css\n~stop\n```')
    .addField('Show duration of currently playing track', '```css\n~time\n```')
    .addField('Show or change player volume', '```css\n~volume\n~volume [new volume]\n```')
    .setFooter('Яндекс.Музыка©', logoYandexMusicURL);

  return embed;
};

export {
  embedTrackAdded,
  embedNowPlaying,
  embedList,
  embedHelp,
};
