import { TextChannel, VoiceConnection } from 'discord.js';
import { Track } from './services/track.service';

import shuffle from './utils/shuffle';

class Queue {
  private voiceChannel: VoiceConnection;

  private textChannel: TextChannel;

  private tracks: Track[];

  public constructor(voiceChannel: VoiceConnection, textChannel: TextChannel) {
    this.voiceChannel = voiceChannel;
    this.textChannel = textChannel;
    this.tracks = [];
  }

  /**
   * Добавляет трек в очередь
   *
   * @param  {Track} newTrack Трек который нужно добавить
   * @returns {void}
   */
  public insertTrack(newTrack: Track): void {
    this.tracks.push(newTrack);
  }

  /**
   * Удаляет первый трек очереди
   *
   * @returns {Track} Возвращает первый трек
   */
  public shiftTrack(): Track | undefined {
    return this.tracks.shift();
  }

  /**
   * Перемешать треки
   *
   * @returns {void}
   */
  public shuffle(): void {
    this.tracks = shuffle(this.tracks);
  }

  /**
   * Возвращает состояние очереди
   *
   * @returns {boolean} Есть ли в очереди треки
   */
  public isPlaying(): boolean {
    return this.tracks.length !== 0;
  }
}

export default Queue;
