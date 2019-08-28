import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import secondsToTimestamp from '../utils/secondsToTimestamp';

const time = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  const media = bot.player.nowPlaying;

  if (bot.player.playing && media && bot.player.dispatcher) {
    const elapsed = secondsToTimestamp(bot.player.dispatcher.totalStreamTime / 1000);

    msg.channel.send(`${elapsed} / ${secondsToTimestamp(media.duration)}`);
  } else if (media) {
    msg.channel.send(`00:00:00 / ${secondsToTimestamp(media.duration)}`);
  }
};

export default time;
