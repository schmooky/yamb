import { Readable } from 'stream';

export interface MediaItem {
  type: string;
  url: string;
  requestor?: string;
  name?: string;
  duration?: string;
}

export interface MediaType {
  getDetails(item: MediaItem): Promise<MediaItem>;
  getStream(item: MediaItem): Promise<string>;
}
