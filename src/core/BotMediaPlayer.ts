import {
  VoiceConnection,
  StreamDispatcher,
  TextChannel,
  DMChannel,
  GroupDMChannel,
} from 'discord.js';

import BotStatus from './BotStatus';
import { BotConfig } from './BotConfig';

import { MediaItem, MediaType } from './BotMedia';
import MediaQueue from './BotMediaQueue';

import { embedTrackAdded, embedNowPlaying, embedMultipleTracksAdded } from './BotEmbed';

import logger from '../utils/logger';

class MediaPlayer {
  public typeRegistry: Map<string, MediaType> = new Map<string, MediaType>();

  public queue: MediaQueue = new MediaQueue();

  public status: BotStatus;

  public config: BotConfig;

  public nowPlaying?: MediaItem;

  public playing: boolean = false;

  public paused: boolean = false;

  public stopping: boolean = false;

  public channel?: TextChannel | DMChannel | GroupDMChannel;

  public connection?: VoiceConnection;

  public dispatcher?: StreamDispatcher;

  public constructor(config: BotConfig, status: BotStatus) {
    this.config = config;
    this.status = status;
  }

  public addMedia(items: MediaItem[]): void {
    items.forEach((item): void => this.queue.enqueue(item));

    if (this.channel && items) {
      if (items.length > 1) this.channel.send(embedMultipleTracksAdded(items));
      else this.channel.send(embedTrackAdded(items[0]));
    }
  }

  public at(idx: number): MediaItem {
    return this.queue[idx];
  }

  public dispatchStream(stream: string, item: MediaItem): void {
    if (this.dispatcher) {
      this.dispatcher.end();
      this.dispatcher = undefined;
    }

    if (!this.connection) {
      return;
    }

    this.dispatcher = this.connection.playArbitraryInput(stream, {
      seek: this.config.stream.seek,
      volume: this.config.stream.volume,
      passes: this.config.stream.passes,
      bitrate: this.config.stream.bitrate,
    });

    this.dispatcher.on('start', (): void => {
      this.nowPlaying = item;
      this.playing = true;

      if (this.channel) {
        this.channel.send(embedNowPlaying(this.nowPlaying));
      }
    });

    this.dispatcher.on('debug', (info: string): void => {
      logger.debug(info);
    });

    this.dispatcher.on('error', (err): void => {
      this.skip();

      logger.error(err);

      if (this.channel) this.channel.send(`❌ Error Playing Song: ${err}`);
    });

    this.dispatcher.on('end', (reason: string): void => {
      logger.debug(`Stream Ended: ${reason}`);

      if (this.playing) {
        this.playing = false;
        this.dispatcher = undefined;

        if (!this.stopping) {
          if (this.config.queue.repeat && this.nowPlaying) {
            this.queue.enqueue(this.nowPlaying);
          }

          this.nowPlaying = undefined;

          this.play();
        }
      }

      this.stopping = false;
    });
  }

  public play(): void {
    if (!this.nowPlaying) {
      this.nowPlaying = this.queue.dequeue();
    }

    if (this.queue.length === 0 && this.channel && !this.nowPlaying) {
      this.channel.send('❌ Queue is empty! Add some songs!');
    }

    if (this.playing && !this.paused && this.channel) {
      this.channel.send('❌ Already playing a song!');
    }

    const item = this.nowPlaying;

    if (item && this.connection) {
      if (!this.playing) {
        this.dispatchStream(item.url, item);
      } else if (this.paused && this.dispatcher) {
        this.dispatcher.resume();

        this.paused = false;

        if (this.channel && this.nowPlaying) this.channel.send(`⏯ **${this.nowPlaying.name}** resumed`);
      }
    }
  }

  public shuffle(): void {
    this.queue.shuffle();
  }

  public stop(): void {
    if (this.playing && this.dispatcher && this.nowPlaying) {
      const item = this.nowPlaying;

      this.stopping = true;

      this.paused = false;

      this.dispatcher.end();

      if (this.channel) this.channel.send(`⏹ **${item.name}** stopped`);
    }
  }

  public skip(): void {
    if (this.playing && this.dispatcher && this.nowPlaying) {
      const item = this.nowPlaying;

      this.paused = false;

      this.dispatcher.end();

      if (this.channel) this.channel.send(`⏭ **${item.name}** skipped`);
    } else if (this.queue.length > 0) {
      const item = this.queue.dequeue();

      if (this.channel) this.channel.send(`⏭ **${item.name}** skipped`);
    }
  }

  public pause(): void {
    if (this.playing && !this.paused && this.dispatcher && this.nowPlaying) {
      this.dispatcher.pause();

      this.paused = true;

      if (this.channel) this.channel.send(`⏸ **${this.nowPlaying.name}** paused`);
    }
  }

  public move(currentIdx: number, targetIdx: number): void {
    const max = this.queue.length - 1;
    const min = 0;

    const from = Math.min(Math.max(currentIdx - 1, min), max);
    const to = Math.min(Math.max(targetIdx - 1, min), max);

    this.queue.move(from, to);

    if (this.channel) {
      this.channel.send(`Track at ${from + 1} position **${this.at(to).name}** has been moved to ${to + 1}`);
    }
  }

  public setVolume(volume: number): void {
    this.config.stream.volume = volume;

    if (this.dispatcher) {
      this.dispatcher.setVolumeLogarithmic(volume);
    }
  }

  public getVolume(): string {
    return `${this.config.stream.volume * 100}%`;
  }

  public remove(item: MediaItem): void {
    this.queue.dequeue(item);

    if (this.channel) this.channel.send(`🗑 track removed: **${item.name}**`);
  }

  public clear(): void {
    if (this.playing || this.paused) this.stop();

    this.nowPlaying = undefined;
    this.queue.clear();

    if (this.channel) this.channel.send(':cd: Playlist Cleared');
  }
}

export default MediaPlayer;
