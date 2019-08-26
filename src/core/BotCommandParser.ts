import { Message } from 'discord.js';

export interface ParserOptions {
  /**
   * If `true`, the parser will consider messages that were
   * sent by the same client that received it.
   *
   * This option is only really useful for selfbots.
   *
   * Default: `false`
   */
  allowSelf?: boolean;

  /**
   * If `true`, the parser will consider messages that were
   * sent by bot accounts.
   *
   * Default: `false`
   */
  allowBots?: boolean;
}

export interface ParsedMessage<MT = any> {
  /**
   * Whether the message passed all checks and appears to
   * be a well-formed command.
   */
  success: boolean;

  /**
   * The prefix that the message started with, this is
   * redundant to the prefix that was provided to `parse()`.
   */
  prefix: string;

  /**
   * The command (first word or "quoted block") immediately
   * following the prefix in the message.
   */
  command: string;

  /**
   * The arguments (if any) that followed the command.
   *
   * These are delimited by any whitespace, unless words are
   * in 'single quotes', "qouble quotes",
   * or \`\`\`code blocks\`\`\`. Full "\"backslash\" support"
   * is included.
   */
  arguments: string[];

  /**
   * If `success` is `false`, this is a detailed reason.
   */
  error?: string;

  /**
   * A number indicating the result of the parsing.
   *
   * The enum is exported top-level as `ResultCode`.
   *
   * ```
   * OK: 0
   * BOT_USER: 1
   * SELF_MESSAGE: 2
   * NO_PREFIX_MATCH: 3
   * NO_BODY: 4
   * NO_APLHANUMERIC_AFTER_PREFIX: 5
   * UNKNOWN_ERROR: 6
   * ```
   */
  code: ResultCode;

  /**
   * The unparsed body of the message
   * following the `command`.
   */
  body: string;

  /**
   * The message that was passed to the parser.
   */
  message: MT;
}

export enum ResultCode {
  /**
   * No error occurred
   */
  OK,

  /**
   * The message received was sent by a bot account
   * and was ignored.
   *
   * You can set the `allowBots` option to `true` to override
   * this behavior.
   */
  BOT_USER,

  /**
   * The message received was sent by the same account
   * that received it and was ignored.
   *
   * You can set the `allowSelf` option to `true` to override
   * this behavior.
   */
  SELF_MESSAGE,

  /**
   * The message does not start with the provided prefix.
   */
  NO_PREFIX_MATCH,

  /**
   * The message contained only the prefix string,
   * and nothing more.
   */
  NO_BODY,

  /**
   * The message started with the prefix string, but had
   * a non-alphanumeric character (not in range `a-z`, `A-Z`, or `0-9`) after it, which is not allowed.
   */
  NO_APLHANUMERIC_AFTER_PREFIX,

  /**
   * An unknown error occurred while parsing the message,
   * this is likely to be a bug with discord-command-parser,
   * and should be reported to the Issues section on Github.
   */
  UNKNOWN_ERROR,
}

function getCommandName(content: string): string | null {
  return content.split(/\s+/g)[0] || null;
}

function getArguments(str: string): string[] {
  const input = str.trim();

  const args = input.split(' ').slice(1);

  return args;
}

export function parse<MT>(
  message: Message,
  prefix: string | string[],
  options: ParserOptions = {},
): ParsedMessage<MT> {
  function fail(error: string, code: ResultCode): any {
    const result = {
      success: false,
      message,
      prefix,
      error,
      code,
    };

    return result;
  }

  let symbol = prefix;

  if (typeof prefix === 'string') symbol = [prefix];
  else symbol = [...prefix];

  if (message.author.bot && !options.allowBots) {
    return fail('Message sent by a bot account.', ResultCode.BOT_USER);
  }

  if (message.author.id === message.client.user.id && !options.allowSelf) {
    return fail("Message sent from client's account.", ResultCode.SELF_MESSAGE);
  }

  if (message.content.length === 0) {
    return fail('Empty message body.', ResultCode.NO_BODY);
  }

  let matchedPrefix = '';

  // eslint-disable-next-line
  for (const p of symbol) {
    if (message.content.startsWith(p)) {
      matchedPrefix = p;
      break;
    }
  }

  if (!matchedPrefix) {
    return fail('Message does not start with prefix.', ResultCode.NO_PREFIX_MATCH);
  }

  const remaining = message.content.slice(matchedPrefix.length);

  if (remaining.length === 0) {
    return fail('No body after prefix.', ResultCode.NO_BODY);
  }

  if (!/[a-z0-9]/i.test(remaining[0])) {
    return fail('Non alphanumeric character follows prefix.', ResultCode.NO_APLHANUMERIC_AFTER_PREFIX);
  }

  const matched = remaining.match(/^[a-z0-9\-_.]+/i);

  if (!matched) {
    return fail('No matched', ResultCode.UNKNOWN_ERROR);
  }

  const parsed: ParsedMessage = {
    success: true,
    code: ResultCode.OK,
    command: matched[0],
    prefix: matchedPrefix,
    arguments: getArguments(remaining),
    body: remaining.slice(matched[0].length).trim(),
    message,
  };

  return parsed;
}
