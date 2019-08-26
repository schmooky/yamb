import secondsToTimestamp from '../secondsToTimestamp';

describe('secondsToTimestamp', (): void => {
  it('should convert seconds correctly', (): void => {
    const seconds = 54;
    const minutes = 354;
    const hours = 6804;

    expect(secondsToTimestamp(seconds)).toBe('00:00:54');
    expect(secondsToTimestamp(minutes)).toBe('00:05:54');
    expect(secondsToTimestamp(hours)).toBe('01:53:24');
  });
});
