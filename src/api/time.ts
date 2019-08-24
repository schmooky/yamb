import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
import secondsToTimestamp from '../utils/secondsToTimestamp';

const time = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  const media = bot.player.queue.first;

  if (bot.player.playing && bot.player.dispatcher) {
    const elapsed = secondsToTimestamp(bot.player.dispatcher.totalStreamTime / 1000);

    msg.channel.send(`${elapsed} / ${media.duration}`);
  } else if (bot.player.queue.first) {
    msg.channel.send(`00:00:00 / ${media.duration}`);
  }
};

export default time;
