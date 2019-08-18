const fs = require('fs');

const help = async (message, args) => {
  if (!args.length) {
    fs.readdir('./src/static/help/', async (err, files) => {
      const commands = files.map(file => file.split('.')[0]);

      await message.channel.send(`# Commands available\n ${commands.join(' ')}`, { code: 'md' });
    });
  } else {
    fs.readFile(`./src/static/help/${args[0]}.md`, async (err, content) => {
      if (err) {
        await message.channel.send(`No help for command ${args[0]}`, { code: 'md' });

        return;
      }

      await message.channel.send(content, { code: 'md' });
    });
  }
};

module.exports = help;
