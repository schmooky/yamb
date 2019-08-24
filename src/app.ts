import DefaultBotConfig from './core/BotConfig';

import { logger, BotConfig, YBot } from './resources';

const bot = new YBot(DefaultBotConfig);

bot
  .connect()
  .then(() => {
    logger.debug('Bot Ready');

    console.log('Bot Online');

    bot.listen();
  })
  .catch((err) => {
    console.log(err);

    logger.error(err);
  });
