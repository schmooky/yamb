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
import YamusicPlugin from '../plugins/yamusic';

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
import np from '../api/np';
import shuffle from '../api/shuffle';
import repeat from '../api/repeat';
import remove from '../api/remove';
import skip from '../api/skip';
import time from '../api/time';
import volume from '../api/volume';

const pingPhrases = ['Can\'t stop won\'t stop!', ':ping_pong: Pong Bitch!'];

const random = (array: string[]): string => array[Math.floor(Math.random() * array.length)];

class YBot implements Bot {
  public client: Client;

  public config: BotConfig;

  public status: BotStatus;

  public commands: BotCommandMap;

  public console: BotConsoleReader;

  public player: BotMediaPlayer;

  public online: boolean;

  public helptext: string;

  public plugins!: BotPlugin[];

  public constructor(config: BotConfig) {
    this.helptext = 'Help hint!';

    this.online = false;
    this.config = config;

    this.commands = new BotCommandMap()
      .on('ping', (cmd: ParsedMessage, msg: Message): void => {
        let phrases = pingPhrases.slice();

        if (msg.guild) phrases = phrases.concat(msg.guild.emojis.array().map((x): string => x.name));

        msg.channel.send(random(phrases));
      })
      .on('help', (cmd: ParsedMessage, msg: Message): Promise<void> => help(cmd, msg, this))
      .on('join', (cmd: ParsedMessage, msg: Message): Promise<void> => join(cmd, msg, this))
      .on('list', (cmd: ParsedMessage, msg: Message): Promise<void> => list(cmd, msg, this))
      .on('play', (cmd: ParsedMessage, msg: Message): Promise<void> => play(cmd, msg, this))
      .on('add', (cmd: ParsedMessage, msg: Message): Promise<void> => add(cmd, msg, this))
      .on('clear', (cmd: ParsedMessage, msg: Message): Promise<void> => clear(cmd, msg, this))
      .on('move', (cmd: ParsedMessage, msg: Message): Promise<void> => move(cmd, msg, this))
      .on('pause', (cmd: ParsedMessage, msg: Message): Promise<void> => pause(cmd, msg, this))
      .on('repeat', (cmd: ParsedMessage, msg: Message): Promise<void> => repeat(cmd, msg, this))
      .on('remove', (cmd: ParsedMessage, msg: Message): Promise<void> => remove(cmd, msg, this))
      .on('skip', (cmd: ParsedMessage, msg: Message): Promise<void> => skip(cmd, msg, this))
      .on('np', (cmd: ParsedMessage, msg: Message): Promise<void> => np(cmd, msg, this))
      .on('shuffle', (cmd: ParsedMessage, msg: Message): Promise<void> => shuffle(cmd, msg, this))
      .on('time', (cmd: ParsedMessage, msg: Message): Promise<void> => time(cmd, msg, this))
      .on('volume', (cmd: ParsedMessage, msg: Message): Promise<void> => volume(cmd, msg, this))
      .on('stop', (cmd: ParsedMessage, msg: Message): Promise<void> => stop(cmd, msg, this));

    this.client = new Client()
      .on('message', (msg: Message): void => {
        const parsed: ParsedMessage<Message> = parse(msg, this.config.command.symbol);

        if (!parsed.success) return;

        const handlers = this.commands.get(parsed.command);

        if (handlers) {
          logger.debug(`Bot Command: ${msg.content}`);

          this.player.channel = msg.channel;

          handlers.forEach((handle): void => {
            handle(parsed, msg);
          });
        }
      })
      .on('ready', (): void => {
        if (this.online) logger.debug('Reconnected!');

        else logger.debug('YAMusic Bot Online!');

        this.online = true;

        this.status.setActivity('online');
        this.status.setBanner('Music');
      })
      .on('reconnecting', (): void => {
        logger.debug('Reconnecting...');
      })
      .on('disconnect', (): void => {
        this.online = false;

        logger.debug('Disconnected!');
      })
      .on('error', (error: Error): void => {
        logger.error(error);
      })
      .on('guildMemberUpdate', (): void => {})
      .on('guildMemberSpeaking', (): void => {});

    this.console = new BotConsoleReader();

    this.console.commands.on('exit', (args: ParsedArgs, rl: Interface): void => {
      if (this.client) this.client.destroy();

      rl.close();
    });

    this.status = new BotStatus(this.client);
    this.player = new BotMediaPlayer(this.config, this.status);

    this.plugins = [new YamusicPlugin()];

    this.plugins.forEach((plugin): void => {
      plugin.preInitialize(this);
      plugin.postInitialize(this);
    });
  }

  public connect(): Promise<string> {
    return this.client.login(this.config.discord.token);
  }

  public listen(): void {
    return this.console.listen();
  }
}

export default YBot;
