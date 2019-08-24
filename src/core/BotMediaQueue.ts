import { MediaItem, MediaType } from './BotMedia';

class MediaQueue extends Array<MediaItem> {
  public get first(): MediaItem {
    return this[0];
  }

  public get last(): MediaItem {
    return this[this.length - 1];
  }

  public enqueue(item: MediaItem): void {
    this.push(item);
  }

  public dequeue(item?: MediaItem): MediaItem {
    if (item) {
      const idx = this.indexOf(item);

      if (idx > -1) {
        this.splice(idx, 1);
      }

      return item;
    }
    return this.shift()!; //! FIXME: catch undefined
  }

  public shuffle(): void {
    let m: number = this.length;
    let i: number;

    while (m) {
      i = Math.floor(Math.random() * m);
      m -= 1;

      [this[m], this[i]] = [this[i], this[m]];
    }
  }

  public clear(): void {
    this.length = 0;
  }

  public move(to: number, from: number) {
    if (to !== from) {
      this.splice(to, 0, this.splice(from, 1)[0]);
    }
  }
}

export default MediaQueue;
