import { Message, RichEmbed } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import { embedNowPlaying } from '../core/BotEmbed';

const np = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  const nowPlaying = bot.player.queue.first;

  if (!bot.player.connection || !nowPlaying) {
    const exampleEmbed = new RichEmbed()
      .setColor('#ffdb4d')
      .setTitle('Some title')
      .setURL('https://discord.js.org/')
      .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
      .setDescription('Nothing is playing now')
      .setThumbnail('https://i.imgur.com/wSTFkRM.png')
      .addField('Regular field title', 'Some value here')
      .addBlankField()
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .setImage('https://i.imgur.com/wSTFkRM.png')
      .setTimestamp()
      .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

    msg.channel.send(exampleEmbed);

    return;
  }

  msg.channel.send(embedNowPlaying(bot.player.queue.first));
};

export default np;
