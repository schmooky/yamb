import { APIEmbed, EmbedBuilder } from 'discord.js';

import { MediaItem } from './BotMedia';
import BotMediaQueue from './BotMediaQueue';

import secondsToTimestamp from '../utils/secondsToTimestamp';

const logoYandexMusicURL =
  'https://cache-mskstoredata05.cdn.yandex.net/download.cdn.yandex.net/from/yandex.ru/support/ru/music/files/icon_main.png';
const copyright = '© Яндекс.Музыка';

const embedTrackAdded = (track: MediaItem): APIEmbed => {
  const embed = new EmbedBuilder()
    .setColor('#ffdb4d')
    .setDescription('Track added')
    .setThumbnail(`http://${track.albums[0].coverUri.slice(0, -2)}200x200`)
    .addFields([
      { name: 'Track', value: `${track.name}`, inline: true },
      { name: 'Artist', value: track.artists[0] ? `${track.artists[0].name}` : 'none', inline: true },
      { name: 'Album', value: `${track.albums[0].title}`, inline: true },
    ])
    .setFooter({ text: copyright, iconURL: logoYandexMusicURL });

  return embed.toJSON();
};

const embedNowPlaying = (track: MediaItem): APIEmbed => {
  const embed = new EmbedBuilder()
    .setColor('#ffdb4d')
    .setAuthor({ name: `${track.requestor.username}`, iconURL: `${track.requestor.avatarURL}` })
    .setDescription('Now playing')
    .setThumbnail(`http://${track.albums[0].coverUri.slice(0, -2)}200x200`)
    .addFields([
      { name: 'Track', value: `${track.name}`, inline: true },
      { name: 'Artist', value: track.artists[0] ? `${track.artists[0].name}` : 'none', inline: true },
      { name: 'Album', value: `${track.albums[0].title}`, inline: true },
      { name: 'Time', value: `${secondsToTimestamp(track.duration)}`, inline: true },
    ])
    .setFooter({ text: copyright, iconURL: logoYandexMusicURL });

  return embed.toJSON();
};

const embedList = (queue: BotMediaQueue, page: number): APIEmbed => {
  const title = queue.length <= 1 ? 'track' : 'tracks';

  const tracksPerPage = 10;
  const pageStart = tracksPerPage * (page - 1);
  const pageEnd = tracksPerPage * page;

  let totalDuration = 0;

  const embed = new EmbedBuilder()
    .setTitle(`Queue: ${queue.length} ${title}`)
    .setDescription(`Page ${page} of ${Math.ceil(queue.length / 10)}`)
    .setColor('#ffdb4d')
    .setFooter({ text: copyright, iconURL: logoYandexMusicURL });

  queue.slice(pageStart, pageEnd).forEach((item, index): void => {
    const position = pageStart + index + 1;

    embed.addFields([
      {
        name: `${position}. ${item.name} by ${item.artists[0].name}`,
        value: `Requested by ${item.requestor.username}`,
        inline: true,
      },
    ]);
  });

  queue.forEach((item): void => {
    totalDuration += item.duration;
  });

  embed.addFields([
    {
      name: 'Total duration',
      value: secondsToTimestamp(totalDuration),
      inline: true,
    }])

  return embed.toJSON();
};

const embedHelp = (): APIEmbed => {
  const embed = new EmbedBuilder()
    .setTitle('Help')
    .setColor('#ffdb4d')
    // .addField('Add new track to queue', '```css\n~add [yandex.music track url]\n```')
    // .addField('Clear queue', '```css\n~clear\n```')
    // .addField('Show help', '```css\n~help\n```')
    // .addField('Join voice channel', '```css\n~join\n```')
    // .addField('Show first 10 tracks of queue or exact page', '```css\n~list\n~list [page number]\n```')
    // .addField(
    //   'Move track in queue to different position',
    //   '```css\n~move [current position in queue] [target position in queue]\n```',
    // )
    // .addField('Show currently playing track', '```css\n~np\n```')
    // .addField('Pause player', '```css\n~pause\n```')
    // .addField('Start or resume player', '```css\n~play\n```')
    // .addField('Remove track from queue', '```css\n~remove [position in queue]\n```')
    // .addField('Toggle repeat', '```css\n~repeat\n```')
    // .addField('Shuffle queue', '```css\n~shuffle\n```')
    // .addField('Skip currently playing track', '```css\n~skip\n```')
    // .addField('Stop player', '```css\n~stop\n```')
    // .addField('Show duration of currently playing track', '```css\n~time\n```')
    // .addField('Show or change player volume', '```css\n~volume\n~volume [new volume]\n```')
    .setFooter({ text: copyright, iconURL: logoYandexMusicURL });

  return embed.toJSON();
};

const embedMultipleTracksAdded = (tracks: MediaItem[]): APIEmbed => {
  const embed = new EmbedBuilder()
    .setColor('#ffdb4d')
    .setDescription(`Added ${tracks.length} tracks`)
    embed.addFields([
      {
        name: 'First Track',
        value: `${tracks[0].name}`,
        inline: true,
      }])
    .setFooter({ text: copyright, iconURL: logoYandexMusicURL });

  return embed.toJSON();
};

const embedPing = (ping: number): APIEmbed => {
  const embed = new EmbedBuilder().setColor('#ffdb4d').setDescription(`⌛ ${Math.ceil(ping)}`);

  return embed.toJSON();
};

export { embedTrackAdded, embedNowPlaying, embedList, embedHelp, embedMultipleTracksAdded, embedPing };
