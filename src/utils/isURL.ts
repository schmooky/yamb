const isURL = (url: string): boolean => /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/.test(url);
const isYandexURL = (url: string): boolean => /music.yandex.ru\//.test(url);
const isTrackURL = (url: string): boolean => /album\/[0-9]*\/track\/[0-9]*$/.test(url);
const isAlbumURL = (url: string): boolean => /album\/[0-9]*$/.test(url);
const isPlaylistURL = (url: string): boolean => /\/users\/(.*)\/playlists\/[0-9]*$/.test(url);

export {
  isURL,
  isYandexURL,
  isTrackURL,
  isAlbumURL,
  isPlaylistURL,
};
