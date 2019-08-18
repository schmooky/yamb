import { Message, Permissions } from 'discord.js';

import trackService from '../services/track.service';

const play = async (message: Message, args: string[]): Promise<void> => {
  if (!message.member.voiceChannel) return;

  const permissions = message.member.voiceChannel.permissionsFor(message.client.user) as Permissions;

  if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) return;

  try {
    const [track] = await trackService.fetchTrack(args.join(' '));

    const connection = await message.member.voiceChannel.join();

    connection.playArbitraryInput(track.trackUrl);

    await message.channel.send(`🎵 Playing ${track.title} by ${track.artists[0].name}`);
  } catch (error) {
    await message.reply(error.message);
  }
};

export default play;
