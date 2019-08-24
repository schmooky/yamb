import {
  isURL, isYandexURL, isTrackURL, isAlbumURL,
} from '../isURL';

describe('isURL', (): void => {
  it('should be parse real url correctly', (): void => {
    expect(isURL('google.com')).toBe(true);
  });

  it('should be parse fake url correctly', (): void => {
    expect(isURL('google./com/google')).toBe(false);
  });
});

describe('isYandexURL', (): void => {
  it('should be parse album correctly', (): void => {
    expect(isYandexURL('https://music.yandex.ru/album/5430588')).toBe(true);
  });

  it('should be parse track correctly', (): void => {
    expect(isYandexURL('https://music.yandex.ru/album/5430588/track/5430588')).toBe(true);
  });

  it('should be parse fake url correctly', (): void => {
    expect(isYandexURL('google./com/google/124151/track/15451123')).toBe(false);
  });
});

describe('isTrackURL', (): void => {
  it('should be parse track correctly', (): void => {
    expect(isTrackURL('https://music.yandex.ru/album/5430588/track/5430588')).toBe(true);
  });

  it('should be parse fake url correctly', (): void => {
    expect(isTrackURL('google./com/google/124151/track/15451123')).toBe(false);
  });
});

describe('isAlbumURL', (): void => {
  it('should be parse album correctly', (): void => {
    expect(isAlbumURL('https://music.yandex.ru/album/5430588')).toBe(true);
  });

  it('should be parse fake url correctly', (): void => {
    expect(isAlbumURL('google./com/google/124151/track/15451123')).toBe(false);
  });
});
