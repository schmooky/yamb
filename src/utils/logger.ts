import pino from 'pino';
import childProcess from 'child_process';
import stream from 'stream';

const cwd = process.cwd();
const { env } = process;
const logPath = `${cwd}/log`;

const logThrough = new stream.PassThrough();
export const logger = pino({ name: 'project' }, logThrough);

const child = childProcess.spawn(
  process.execPath,
  [
    require.resolve('pino-tee'),
    'warn',
    `${logPath}/warn.log`,
    'error',
    `${logPath}/error.log`,
    'fatal',
    `${logPath}/fatal.log`,
    'info',
    `${logPath}/info.log`,
  ],
  { cwd, env },
);

logThrough.pipe(child.stdin);

export default logger;
