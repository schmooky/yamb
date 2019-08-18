class Queue {
  constructor() {
    this.songs = [];
  }

  get isPlaying() {
    return this.songs.length > 0;
  }

  add(song) {
    this.songs.push(song);
  }

  shift() {
    this.songs.shift();
  }

  clear() {
    this.songs = [];
  }
}

module.exports = Queue;
