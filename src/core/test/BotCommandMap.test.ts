import BotCommandMap from '../BotCommandMap';

describe('BotMediaQueue', (): void => {
  let CommandMap: BotCommandMap;

  beforeEach((): void => {
    CommandMap = new BotCommandMap();
  });

  it('should add the commands', (): void => {
    CommandMap
      .on('commandOne', (): string => 'command')
      .on('commandTwo', (): string => 'command');

    expect(CommandMap.get('commandOne')).toBeTruthy();
    expect(CommandMap.get('commandTwo')).toBeTruthy();
  });

  it('should add the command handlers', (): void => {
    const handler = (): string => 'command';
    const anotherHandler = (): string => 'another command';

    CommandMap
      .on('commandOne', handler)
      .on('commandOne', anotherHandler);

    const handlers = CommandMap.get('commandOne');

    expect(handlers).toHaveLength(2);
  });

  it('should remove the command', (): void => {
    const handler = (): string => 'command';

    CommandMap.on('commandOne', handler);

    CommandMap.off('commandOne');

    expect(CommandMap.get('commandOne')).toBeFalsy();
  });

  it('should remove the command handlers', (): void => {
    const handler = (): string => 'command';
    const anotherHandler = (): string => 'another command';

    CommandMap.on('commandOne', handler);
    CommandMap.on('commandOne', anotherHandler);

    CommandMap.off('commandOne', anotherHandler);

    const handlers = CommandMap.get('commandOne');

    expect(handlers).toHaveLength(1);
  });

  it('shouldn\'t remove the command handler if handler does not exist', (): void => {
    const handler = (): string => 'command';
    const anotherHandler = (): string => 'another command';

    CommandMap.on('commandOne', handler);
    CommandMap.off('commandOne', anotherHandler);
    CommandMap.off('commandTwo', handler);

    const handlers = CommandMap.get('commandOne');
    const anotherHandlers = CommandMap.get('commandTwo');

    expect(handlers).toHaveLength(1);
    expect(anotherHandlers).toBeUndefined();
  });
});
