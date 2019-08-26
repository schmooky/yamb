import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

const stop = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  bot.player.stop();

  bot.player.connection = undefined;

  const connection = bot.client.voiceConnections.get(msg.guild.id);

  if (!connection) {
    msg.channel.send('I can\'t find a voice connection');

    return;
  }

  connection.disconnect();

  msg.channel.send(`:mute: Disconnecting from channel: ${connection.channel.name}`);
};

export default stop;
