import { Message } from 'discord.js';

import { Bot } from '../core/BotInterface';
import { ParsedMessage } from '../core/BotCommandParser';
/**
 * Moves track to some other position in queue
 * @param  {ParsedMessage} cmd Command and arguments
 * @param  {Message} msg Message in which user asked to move track
 * @param  {Bot} bot Bot instance
 * @returns Promise
 */

const move = async (cmd: ParsedMessage, msg: Message, bot: Bot): Promise<void> => {
  if (cmd.arguments.length > 1) {
    const current = Math.max(parseInt(cmd.arguments[0], 10), 0);

    const targetDesc = cmd.arguments[1];

    let target = 0;

    if (targetDesc === 'up') target = Math.min(current - 1, 0);
    else if (targetDesc === 'down') target = Math.max(current + 1, bot.player.queue.length - 1);
    else target = parseInt(targetDesc, 10);

    bot.player.move(current, target);
  }
};

export default move;
