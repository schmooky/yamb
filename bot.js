const Discord = require('discord.js');

const dotenv = require('dotenv').config();

/* Commands */
const play = require('./commands/play');
const help = require('./commands/help');
const stop = require('./commands/stop');

const bot = new Discord.Client();
const prefix = process.env.PREFIX;

bot.on('ready', async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`${prefix}help`);
});

bot.on('message', async (message) => {
  if (message.author.bot) return;

  const args = message.content.trim().split(' ');
  const cmd = args.shift().toLowerCase();

  if (cmd === `${prefix}play`) {
    return await play(message, args);
  }

  if (cmd === `${prefix}help`) {
    return await help(message, args);
  }

  if (cmd === `${prefix}stop`) {
    return await stop(message, args);
  }
});

process.on('SIGINT', () => {
  bot.destroy();

  console.log('\x1b[31m' + 'SIGINT' + '\x1b[0m');

  process.exit(1);
});

process.on('SIGUSR2', () => {
  bot.destroy();

  console.log('\x1b[31m' + 'SIGUSR2' + '\x1b[0m');

  process.exit(1);
});

bot.login(process.env.BOT_TOKEN);
