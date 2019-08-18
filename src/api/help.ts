import fs from 'fs';
import { Message } from 'discord.js';

const help = async (message: Message, args: string[]): Promise<void> => {
  if (!args.length) {
    fs.readdir('./public/docs/', async (err, files): Promise<void> => {
      const commands = files.map((file): string => file.split('.')[0]);

      await message.channel.send(`# Commands available\n ${commands.join(' ')}`, { code: 'md' });
    });

    return;
  }

  fs.readFile(`./public/docs/${args[0]}.md`, async (err, content): Promise<void> => {
    if (err) {
      await message.channel.send(`No help for command ${args[0]}`, { code: 'md' });

      return;
    }

    await message.channel.send(content, { code: 'md' });
  });
};

export default help;
