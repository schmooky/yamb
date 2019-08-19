// import { TextChannel, VoiceConnection} from 'discord.js';
import { Track } from './services/track.service';

export default class Queue {
  private voiceChannel: string;

  // VoiceConnection
  private textChannel: string;

  // TextChannel
  private tracks: Track[];

  public constructor() {
    this.voiceChannel = '';
    this.textChannel = '';
    this.tracks = [];
  }

  /**
   * Добавляет трек в очередь
   *
   * @param  {Track} newTrack Трек который нужно добавить
   * @returns boolean Получилось ли добавить трек
   */
  public insertTrack(newTrack: Track): boolean {
    this.tracks.push(newTrack);

    return true;
  }

  /**
   * Удаляет первый трек очереди
   *
   * @returns boolean Возвращает первый трек
   */
  public shiftTrack(): Track | undefined {
    return this.tracks.shift();
  }

  /**
   * Возвращает состояние очереди
   *
   * @returns boolean Есть ли в очереди треки
   */
  public isPlaying(): boolean {
    return (this.tracks.length !== 0);
  }
}
