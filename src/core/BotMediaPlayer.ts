import {
  VoiceConnection, StreamDispatcher, TextChannel, DMChannel, GroupDMChannel,
} from 'discord.js';

import BotStatus from './BotStatus';
import { BotConfig } from './BotConfig';

import { MediaItem, MediaType } from './BotMedia';
import MediaQueue from './BotMediaQueue';

import logger from '../utils/logger';

class MediaPlayer {
  typeRegistry: Map<string, MediaType> = new Map<string, MediaType>();

  queue: MediaQueue = new MediaQueue();

  status: BotStatus;

  // ? Property 'status' has no initializer and is not definitely assigned in the constructor
  config: BotConfig; // ? Property 'config' has no initializer and is not definitely assigned in the constructor

  playing: boolean = false;

  paused: boolean = false;

  stopping: boolean = false;

  channel?: TextChannel | DMChannel | GroupDMChannel;

  // ? Property 'channel' has no initializer and is not definitely assigned in the constructor
  connection?: VoiceConnection;

  dispatcher?: StreamDispatcher;

  constructor(config: BotConfig, status: BotStatus) {
    this.config = config;
    this.status = status;
  }

  addMedia(item: MediaItem): Promise<MediaType> {
    return new Promise((resolve, reject) => {
      const type = this.typeRegistry.get(item.type);

      console.log(item);

      if (type) {
        this.queue.enqueue(item);

        if (this.channel && item) {
          this.channel.send(
            `✅ ${item.type} track added: "${item.name}" @ #${this.queue.indexOf(item) + 1}`,
          );
        }
      } else if (this.channel) this.channel.send('Error adding track: Unknown Media Type!');
    });
  }

  at(idx: number) {
    return this.queue[idx];
  }

  dispatchStream(stream: string, item: MediaItem) {
    console.log(stream);

    if (this.dispatcher) {
      this.dispatcher.end();
      this.dispatcher = undefined;
    }

    this.dispatcher = this.connection!.playArbitraryInput(stream, {
      seek: this.config.stream.seek,
      volume: this.config.stream.volume,
      passes: this.config.stream.passes,
      bitrate: this.config.stream.bitrate,
    });

    this.dispatcher.on('start', () => {
      this.playing = true;

      if (this.channel) {
        this.channel.send(`:musical_note: Now playing: "${item.name}", Requested by: ${item.requestor}`);
      }
    });

    this.dispatcher.on('debug', (info: string) => {
      console.log(info);

      logger.debug(info);
    });

    this.dispatcher.on('error', (err) => {
      this.skip();

      logger.error(err);

      if (this.channel) this.channel.send(`Error Playing Song: ${err}`);
    });

    this.dispatcher.on('end', (reason: string) => {
      logger.debug(`Stream Ended: ${reason}`);

      if (this.playing) {
        this.playing = false;
        this.dispatcher = undefined;

        if (!this.stopping) {
          const track = this.queue.dequeue();

          if (this.config.queue.repeat) this.queue.enqueue(track);

          this.play();
        }
      }

      this.stopping = false;
    });
  }

  play() {
    if (this.queue.length == 0 && this.channel) this.channel.send('Queue is empty! Add some songs!');

    if (this.playing && !this.paused) this.channel!.send('Already playing a song!');

    const item = this.queue.first;

    if (item && this.connection) {
      const type = this.typeRegistry.get(item.type);

      if (type) {
        console.log('type');

        if (!this.playing) {
          type.getStream(item).then((stream: string) => {
            this.dispatchStream(stream, item);
          });
        } else if (this.paused && this.dispatcher) {
          this.dispatcher.resume();

          this.paused = false;

          if (this.channel) this.channel.send(`:play_pause: "${this.queue.first.name}" resumed`);
        }
      }
    }
  }

  shuffle() {
    console.log('fuckin magic shuffle');
  }

  stop() {
    if (this.playing && this.dispatcher) {
      const item = this.queue.first;

      this.stopping = true;

      this.paused = false;

      this.dispatcher.end();

      if (this.channel) this.channel.send(`:stop_button: "${item.name}" stopped`);
    }
  }

  skip() {
    if (this.playing && this.dispatcher) {
      const item = this.queue.first;

      this.paused = false;

      this.dispatcher.end();

      if (this.channel) this.channel.send(`:fast_forward: "${item.name}" skipped`);
    } else if (this.queue.length > 0) {
      const item = this.queue.first;

      this.queue.dequeue();

      if (this.channel) this.channel.send(`:fast_forward: "${item.name}" skipped`);
    }
  }

  pause() {
    if (this.playing && !this.paused && this.dispatcher) {
      this.dispatcher.pause();

      this.paused = true;

      if (this.channel) this.channel.send(`:pause_button: "${this.queue.first.name}" paused`);
    }
  }

  move(currentIdx: number, targetIdx: number) {
    const max = this.queue.length - 1;
    const min = 0;

    const to = Math.min(Math.max(currentIdx, min), max);
    const from = Math.min(Math.max(targetIdx, min), max);

    if (to != from) {
      this.queue.move(to, from);
    }
  }

  setVolume(volume: number) {
    this.config.stream.volume = Math.min(Math.max(volume / 100 + 0.5, 0.5), 2);

    if (this.dispatcher) {
      this.dispatcher.setVolume(volume);
    }
  }

  getVolume() {
    console.log(this.config.stream.volume);

    return `${+(this.config.stream.volume - 0.5) * 100}%`;
  }

  remove(item: MediaItem) {
    if (item == this.queue.first && (this.playing || this.paused)) this.stop();

    this.queue.dequeue(item);

    if (this.channel) this.channel.send(`:heavy_minus_sign: ${item.type} track removed: "${item.name}"`);
  }

  clear() {
    if (this.playing || this.paused) this.stop();

    this.queue.clear();

    if (this.channel) this.channel.send(':cd: Playlist Cleared');
  }
}

export default MediaPlayer;
