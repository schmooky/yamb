import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';

const move = async (cmd: ParsedMessage, msg: Message, bot: Bot) => {
  if (cmd.arguments.length > 1) {
    const current = Math.min(Math.max(parseInt(cmd.arguments[0]), 0), bot.player.queue.length - 1);
    const targetDesc = cmd.arguments[0];
    let target = 0;
    if (targetDesc === 'up') target = Math.min(current - 1, 0);
    else if (targetDesc === 'down') target = Math.max(current + 1, bot.player.queue.length - 1);
    else target = parseInt(targetDesc);

    bot.player.move(current, target);
  }
};

export default move;
