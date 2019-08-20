import { Message } from 'discord.js';

const stop = async (message: Message): Promise<void> => {
  if (!message.member.voiceChannel) {
    await message.reply('You are not in a voice channel');

    return;
  }

  await message.channel.send('Playing stopped');

  message.member.voiceChannel.leave();
};

export default stop;
