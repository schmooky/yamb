import BotMediaQueue from '../BotMediaQueue';
import { MediaItem } from '../BotMedia';

const items = [
  {
    type: 'music',
    url: 'someurl.com/1',
    name: 'Joe',
  },
  {
    type: 'music',
    url: 'someurl.com/2',
    name: 'Joe',
  },
  {
    type: 'music',
    url: 'someurl.com/3',
    name: 'Joe',
  },
];

describe('BotMediaQueue', (): void => {
  let MediaQueue: BotMediaQueue;

  beforeEach((): void => {
    MediaQueue = new BotMediaQueue();
  });

  it('should be return the first element', (): void => {
    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    expect(MediaQueue.first).toBe(items[0]);
  });

  it('should be return the last element', (): void => {
    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    expect(MediaQueue.last).toBe(items[2]);
  });

  it('should be add element to the queue', (): void => {
    const media: MediaItem = {
      type: 'music',
      url: 'someurl.com/1',
      name: 'Joe',
    };

    MediaQueue.enqueue(media);

    const expected = new BotMediaQueue(media);

    expect(MediaQueue).toStrictEqual(expected);
  });

  it('should be remove the first element if arguments no provided', (): void => {
    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    expect(MediaQueue.dequeue()).toBe(items[0]);
    expect(MediaQueue).toStrictEqual(new BotMediaQueue(items[1], items[2]));
  });

  it('should be remove element by item', (): void => {
    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    expect(MediaQueue.dequeue(items[1])).toBe(items[1]);
    expect(MediaQueue).toStrictEqual(new BotMediaQueue(items[0], items[2]));
  });

  it('should be not remove element if item does not exist', (): void => {
    const unknownMedia: MediaItem = {
      type: 'music',
      url: 'someunknownmusic.com/1',
    };

    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    expect(MediaQueue.dequeue(unknownMedia)).toBe(unknownMedia);
    expect(MediaQueue).toStrictEqual(new BotMediaQueue(...items));
  });

  it('should be shuffle items', (): void => {
    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    const AnotherQueue = new BotMediaQueue(...items);

    expect(MediaQueue).toStrictEqual(AnotherQueue);

    MediaQueue.shuffle();

    expect(MediaQueue).not.toStrictEqual(AnotherQueue);
  });

  it('should be move items', (): void => {
    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    MediaQueue.move(0, 2);

    expect(MediaQueue[2]).toBe(items[0]);
  });

  it('should be no move items if arguments is equal', (): void => {
    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    MediaQueue.move(0, 0);

    expect(MediaQueue[0]).toBe(items[0]);
  });

  it('should be clear the queue', (): void => {
    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    expect(MediaQueue).toStrictEqual(new BotMediaQueue(...items));

    MediaQueue.clear();

    expect(MediaQueue).toHaveLength(0);
  });
});
