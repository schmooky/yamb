export interface MediaItem {
  type: string;
  url: string;
  requestor: {
    username: string;
    avatarURL: string;
  };
  name: string;
  duration: number;
  albums: import('../services/track.service').AlbumInfo[];
  artists: import('../services/track.service').Artist[];
}

export interface MediaType {
  getDetails(item: MediaItem): Promise<MediaItem>;
  getStream(item: MediaItem): Promise<string>;
}
