import { Client, Message } from 'discord.js';
import { ParsedArgs } from 'minimist';
import { Interface } from 'readline';

import { Bot, BotPlugin } from './BotInterface';
import { BotConfig } from './BotConfig';
import BotStatus from './BotStatus';
import BotMediaPlayer from './BotMediaPlayer';
import BotConsoleReader from './BotConsoleReader';
import BotCommandMap from './BotCommandMap';
import { ParsedMessage, parse } from './BotCommandParser';

import logger from '../utils/logger';

// Plugins
import yamusicPlugin from '../plugins/yamusic';

// Commands
import help from '../api/help';
import play from '../api/play';
import stop from '../api/stop';
import join from '../api/join';
import list from '../api/list';
import add from '../api/add';
import clear from '../api/clear';
import move from '../api/move';
import pause from '../api/pause';
import repeat from '../api/repeat';
import skip from '../api/skip';
import time from '../api/time';
import volume from '../api/volume';

const pingPhrases = ['Can\'t stop won\'t stop!', ':ping_pong: Pong Bitch!'];

const random = (array: string[]) => array[Math.floor(Math.random() * array.length)];

export class YBot implements Bot {
  client: Client;

  config: BotConfig;

  status: BotStatus;

  commands: BotCommandMap;

  console: BotConsoleReader;

  player: BotMediaPlayer;

  online: boolean;

  helptext: string;

  plugins!: BotPlugin[];

  constructor(config: BotConfig) {
    this.helptext = 'ded';
    this.online = false;
    this.config = config;
    this.commands = new BotCommandMap()
      .on('ping', (cmd: ParsedMessage, msg: Message) => {
        let phrases = pingPhrases.slice();

        if (msg.guild) phrases = phrases.concat(msg.guild.emojis.array().map(x => x.name));

        msg.channel.send(random(phrases));
      })
      .on('help', (cmd: ParsedMessage, msg: Message) => help(cmd, msg, this))
      .on('join', (cmd: ParsedMessage, msg: Message) => join(cmd, msg, this))
      .on('list', (cmd: ParsedMessage, msg: Message) => list(cmd, msg, this))
      .on('play', (cmd: ParsedMessage, msg: Message) => play(cmd, msg, this))
      .on('add', (cmd: ParsedMessage, msg: Message) => add(cmd, msg, this))
      .on('clear', (cmd: ParsedMessage, msg: Message) => clear(cmd, msg, this))
      .on('move', (cmd: ParsedMessage, msg: Message) => move(cmd, msg, this))
      .on('pause', (cmd: ParsedMessage, msg: Message) => pause(cmd, msg, this))
      .on('repeat', (cmd: ParsedMessage, msg: Message) => repeat(cmd, msg, this))
      .on('skip', (cmd: ParsedMessage, msg: Message) => skip(cmd, msg, this))
      .on('time', (cmd: ParsedMessage, msg: Message) => time(cmd, msg, this))
      .on('volume', (cmd: ParsedMessage, msg: Message) => volume(cmd, msg, this))
      .on('stop', (cmd: ParsedMessage, msg: Message) => stop(cmd, msg, this));

    this.client = new Client()
      .on('message', (msg: Message) => {
        const parsed: ParsedMessage<Message> = parse(msg, this.config.command!.symbol);

        if (!parsed.success) return;

        const handlers = this.commands.get(parsed.command);

        if (handlers) {
          logger.debug(`Bot Command: ${msg.content}`);

          this.player.channel = msg.channel;

          handlers.forEach((handle) => {
            handle(parsed, msg);
          });
        }
      })
      .on('ready', () => {
        if (this.online) logger.debug('Reconnected!');

        else logger.debug('YAMusic Bot Online!');

        this.online = true;
      })
      .on('reconnecting', () => {
        logger.debug('Reconnecting...');
      })
      .on('disconnect', () => {
        this.online = false;

        logger.debug('Disconnected!');
      })
      .on('error', (error: Error) => {
        logger.error(error);
      })
      .on('guildMemberUpdate', () => {})
      .on('guildMemberSpeaking', () => {});

    this.console = new BotConsoleReader();

    this.console.commands.on('exit', (args: ParsedArgs, rl: Interface) => {
      if (this.client) this.client.destroy();

      rl.close();
    });

    this.status = new BotStatus(this.client);
    this.player = new BotMediaPlayer(this.config, this.status);

    this.plugins = [new YamusicPlugin()];

    this.plugins.forEach(plugin => plugin.preInitialize(this));
    this.plugins.forEach(plugin => plugin.postInitialize(this));
  }

  connect(): Promise<string> {
    return this.client.login(this.config.discord.token);
  }

  listen() {
    return this.console.listen();
  }
}
