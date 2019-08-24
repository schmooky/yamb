class BotCommandMap extends Map<string, Function[]> {
  public on(cmd: string, handler: Function): this {
    const command = this.get(cmd);

    if (!command) {
      this.set(cmd, [handler]);
    } else {
      command.push(handler);
    }

    return this;
  }

  public off(cmd: string, handler?: Function): this {
    if (!handler) {
      this.delete(cmd);
    } else {
      const array = this.get(cmd);

      if (array) {
        const idx = array.indexOf(handler);

        if (idx > -1) array.splice(idx, 1);
      }
    }

    return this;
  }
}

export default BotCommandMap;
