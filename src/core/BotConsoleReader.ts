import readline from 'readline';
import minimist from 'minimist';
import BotCommandMap from './BotCommandMap';
import logger from '../utils/logger';


class BotConsoleReader {
  commands: BotCommandMap;

  constructor() {
    this.commands = new BotCommandMap();
  }

  listen() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on('line', (input) => {
      if (!input) return;

      const parts = input.split(' ');
      const result = minimist(parts);

      if (this.commands.has(result._[0])) {
        const cmds = this.commands.get(result._[0]);

        cmds!.forEach(cmd => cmd(result, rl));
      }
    });

    rl.on('close', () => {
      logger.debug('Console Reader Disconnected');
    });
  }
}

export default BotConsoleReader;
