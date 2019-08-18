const Queue = require('./queue');

class Servers {
  constructor() {
    this.servers = new Map();
  }

  get(key) {
    return this.servers.get(key)
  }

  add(key, value) {
    this.servers.set(key, {
      ...value,
      queue: new Queue(),
    })
  }

  has(key) {
    return this.servers.has(key);
  }
}

module.exports = new Servers();
