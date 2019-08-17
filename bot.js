const dotenv = require('dotenv').config();
const Discord = require('discord.js');

const https = require('https');
const fs = require('fs');

const findTrack = require('./utils/findTrack');

const bot = new Discord.Client();
const queue = new Map();

bot.on('ready', async () => {
  console.log(`${bot.user.username} is online!`);

  let prefix = process.env.PREFIX;

  bot.user.setActivity(`${prefix}help`);
});

bot.on('message', async message => {
  if (message.author.bot) return;

  let prefix = process.env.PREFIX;
  let messageArray = message.content.split(' ');
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}help`) {
    return message.channel.send('There is no help');
  }
	
  if (cmd === `${prefix}play`) {
		const voiceChannel = message.member.voiceChannel;
		
		if (!voiceChannel) return;
		
		const permissions = voiceChannel.permissionsFor(message.client.user);

    if (!permissions.has('CONNECT')) return;
		if (!permissions.has('SPEAK')) return;

    try {
			const dispatcher = await voiceChannel.join();
			/*
			const file = fs.createWriteStream('current.mp3');			
			const url = 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_2MG.mp3';
			const request = https.get(url, function(res) {res.pipe(file);});
			*/
			dispatcher.playFile('./current.mp3');
    } catch (error) {
			console.error(`Can't join ${voiceChannel}, error: ${error}`);

      return;
    }
  }

  if (cmd === `${prefix}stop`) {
    if (!message.member.voiceChannel) return;

    message.member.voiceChannel.leave();
		message.channel.send('Player stopped.');
    return;
  }
});

bot.login(process.env.BOT_TOKEN);
