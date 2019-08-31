import DefaultBotConfig from './core/BotConfig';

import logger from './utils/logger';
import YBot from './core/Bot';

const bot = new YBot(DefaultBotConfig);

bot
  .connect()
  .then((): void => {
    logger.debug('Bot Ready');

    bot.listen();
  })
  .catch((err: Error): void => {
    logger.error(err);
  });
