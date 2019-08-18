import { Message } from 'discord.js';

const notFound = async (message: Message): Promise<void> => {
  await message.reply('I don\'t understand the command. Try **~help**');
};

export default notFound;
