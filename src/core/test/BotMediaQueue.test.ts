import BotMediaQueue from '../BotMediaQueue';
import { MediaItem } from '../BotMedia';

describe('BotMediaQueue', (): void => {
  const items: MediaItem[] = [
    {
      type: 'music',
      url: 'someurl.com/1',
      name: 'Joe',
      requestor: {
        username: '',
        avatarURL: '',
      },
      duration: 230,
      albums: [],
      artists: [],
    },
    {
      type: 'music',
      url: 'someurl.com/2',
      name: 'Joe',
      requestor: {
        username: '',
        avatarURL: '',
      },
      duration: 230,
      albums: [],
      artists: [],
    },
    {
      type: 'music',
      url: 'someurl.com/3',
      name: 'Joe',
      requestor: {
        username: '',
        avatarURL: '',
      },
      duration: 230,
      albums: [],
      artists: [],
    },
  ];

  let MediaQueue: BotMediaQueue;

  beforeEach((): void => {
    MediaQueue = new BotMediaQueue();
  });

  it('should return the first element', (): void => {
    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    expect(MediaQueue.first).toBe(items[0]);
  });

  it('should return the last element', (): void => {
    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    expect(MediaQueue.last).toBe(items[2]);
  });

  it('should add element to the queue', (): void => {
    const media: MediaItem = {
      type: 'music',
      url: 'someurl.com/1',
      name: 'Joe',
      duration: 230,
      requestor: {
        username: '',
        avatarURL: '',
      },
      albums: [],
      artists: [],
    };

    MediaQueue.enqueue(media);

    const expected = new BotMediaQueue(media);

    expect(MediaQueue).toStrictEqual(expected);
  });

  it('should remove the first element if arguments no provided', (): void => {
    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    expect(MediaQueue.dequeue()).toBe(items[0]);
    expect(MediaQueue).toStrictEqual(new BotMediaQueue(items[1], items[2]));
  });

  it('should remove element by item', (): void => {
    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    expect(MediaQueue.dequeue(items[1])).toBe(items[1]);
    expect(MediaQueue).toStrictEqual(new BotMediaQueue(items[0], items[2]));
  });

  it('shouldn\'t remove element if item does not exist', (): void => {
    const unknownMedia: MediaItem = {
      type: 'music',
      url: 'someunknownmusic.com/1',
      name: 'unknows',
      duration: 230,
      requestor: {
        username: '',
        avatarURL: '',
      },
      albums: [],
      artists: [],
    };

    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    expect(MediaQueue.dequeue(unknownMedia)).toBe(unknownMedia);
    expect(MediaQueue).toStrictEqual(new BotMediaQueue(...items));
  });

  it('should shuffle items', (): void => {
    const Queue = new BotMediaQueue(...items);
    const AnotherQueue = new BotMediaQueue(...items);

    expect(Queue[0]).toEqual(AnotherQueue[0]);

    Queue.shuffle();

    const isShuffled = Queue.some((item, index): boolean => item !== AnotherQueue[index]);

    expect(isShuffled).toBeTruthy();
  });

  it('should move items', (): void => {
    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    MediaQueue.move(0, 2);

    expect(MediaQueue[2]).toBe(items[0]);
  });

  it('shouldn\'t move items if arguments is equal', (): void => {
    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    MediaQueue.move(0, 0);

    expect(MediaQueue[0]).toBe(items[0]);
  });

  it('should clear the queue', (): void => {
    MediaQueue.enqueue(items[0]);
    MediaQueue.enqueue(items[1]);
    MediaQueue.enqueue(items[2]);

    expect(MediaQueue).toStrictEqual(new BotMediaQueue(...items));

    MediaQueue.clear();

    expect(MediaQueue).toHaveLength(0);
  });
});
