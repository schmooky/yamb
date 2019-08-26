import { MediaItem } from './BotMedia';

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

    // @ts-ignore
    return this.shift(); //! FIXME: catch undefined
  }

  public shuffle(): void {
    let j: number;
    let temp: MediaItem;

    for (let i: number = this.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));

      temp = this[j];

      this[j] = this[i];
      this[i] = temp;
    }
  }

  public clear(): void {
    this.length = 0;
  }

  public move(from: number, to: number): void {
    if (from !== to) {
      this.splice(to, 0, this.splice(from, 1)[0]);
    }
  }
}

export default MediaQueue;
