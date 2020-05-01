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
import { embedPing } from './BotEmbed';

import logger from '../utils/logger';

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

class YBot implements Bot {
  public client: Client;

  public config: BotConfig;

  public status: BotStatus;

  public commands: BotCommandMap;

  public console: BotConsoleReader;

  public player: BotMediaPlayer;

  public online: boolean;

  public helptext: string;

  public plugins: BotPlugin[];

  public constructor(config: BotConfig) {
    this.helptext = 'Help hint!';

    this.online = false;
    this.config = config;

    this.commands = new BotCommandMap()
      .on('ping', (cmd: ParsedMessage, msg: Message): void => {
        msg.channel.send(embedPing(this.client.ping));
      })
      .on('help', help)
      .on('join', join)
      .on('list', list)
      .on('play', play)
      .on('add', add)
      .on('clear', clear)
      .on('move', move)
      .on('pause', pause)
      .on('repeat', repeat)
      .on('remove', remove)
      .on('skip', skip)
      .on('np', np)
      .on('shuffle', shuffle)
      .on('time', time)
      .on('volume', volume)
      .on('stop', stop);

    this.client = new Client()
      .on('message', (msg: Message): void => {
        const parsed: ParsedMessage<Message> = parse(msg, this.config.command.symbol);

        if (!parsed.success) return;

        const handlers = this.commands.get(parsed.command);

        if (handlers) {
          logger.debug(`Bot Command: ${msg.content}`);

          this.player.channel = msg.channel;

          handlers.forEach((handle): void => {
            handle(parsed, msg, this);
          });
        }
      })
      .on('ready', (): void => {
        if (this.online) logger.debug('Reconnected!');

        else logger.debug('Online!');

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

      process.exit(0);
    });

    this.status = new BotStatus(this.client);
    this.player = new BotMediaPlayer(this.config, this.status);

    this.plugins = [];

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
