import {
  isURL, isYandexURL, isTrackURL, isAlbumURL, isPlaylistURL,
} from '../inspectURL';

describe('isURL', (): void => {
  it('should test valid url correctly', (): void => {
    expect(isURL('https://music.yandex.ru/album/5430588')).toBe(true);
  });

  it('should test invalid url correctly', (): void => {
    expect(isURL('https:/music/.yan/dex./ru/album/5430588')).toBe(false);
  });
});

describe('isYandexURL', (): void => {
  it('should test valid album url correctly', (): void => {
    expect(isYandexURL('https://music.yandex.ru/album/5430588')).toBe(true);
  });

  it('should test valid track url correctly', (): void => {
    expect(isYandexURL('https://music.yandex.ru/album/5430588/track/5430588')).toBe(true);
  });

  it('should test valid playlist url correctly', (): void => {
    expect(isYandexURL('https://music.yandex.ru/users/habr.com/playlists/1001')).toBe(true);
  });

  it('should test invalid url correctly', (): void => {
    expect(isYandexURL('google./com/google/124151/track/15451123')).toBe(false);
  });
});

describe('isTrackURL', (): void => {
  it('should test valid track url correctly', (): void => {
    expect(isTrackURL('https://music.yandex.ru/album/5430588/track/5430588')).toBe(true);
  });

  it('should test invalid track url correctly', (): void => {
    expect(isTrackURL('https://music.yandex.ru/album/5430588/tack/5430588')).toBe(false);
  });
});

describe('isAlbumURL', (): void => {
  it('should test valid album url correctly', (): void => {
    expect(isAlbumURL('https://music.yandex.ru/album/5430588')).toBe(true);
  });

  it('should test invalid album url correctly', (): void => {
    expect(isAlbumURL('https://music.yandex.ru/abum/5430588')).toBe(false);
  });
});

describe('isPlaylistURL', (): void => {
  it('should test valid playlist url correctly', (): void => {
    expect(isPlaylistURL('https://music.yandex.ru/users/habr.com/playlists/1001')).toBe(true);
  });

  it('should test invalid playlist url correctly', (): void => {
    expect(isPlaylistURL('google./com/google/124151/track/15451123')).toBe(false);
  });
});
