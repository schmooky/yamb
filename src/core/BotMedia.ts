export interface MediaItem {
  type: string;
  url: string;
  requestor: string;
  name: string;
  duration: string;
  albums: import('../services/track.service').AlbumInfo[];
  artists: import('../services/track.service').Artist[];
}

export interface MediaType {
  getDetails(item: MediaItem): Promise<MediaItem>;
  getStream(item: MediaItem): Promise<string>;
}
