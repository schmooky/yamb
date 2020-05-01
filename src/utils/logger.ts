import winston from 'winston';
import chalk from 'chalk';
import dotenv from 'dotenv';

dotenv.config();

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.File({
      filename: './log/warn.log',
      level: 'warn',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.metadata(),
        winston.format.json(),
      ),
    }),
    new winston.transports.File({
      filename: './log/error.log',
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.metadata(),
        winston.format.json(),
      ),
    }),
    new winston.transports.File({
      filename: './log/fatal.log',
      level: 'fatal',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.metadata(),
        winston.format.json(),
      ),
    }),
    new winston.transports.File({ filename: './log/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    level: 'debug',
    format: winston.format.combine(
      winston.format.printf((info): string => chalk.blue(`${info.message}`)),
    ),
  }));
}

export default logger;
