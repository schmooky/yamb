interface SearchOptions {
  type: string;
}

interface AlbumInfo {
  id: number;
  storageDir: string;
  originalReleaseYear: number;
  year: number;
  version: string;
  type: string;
  artists: [];
  coverUri: string;
  trackCount: number;
  genre: string;
  available: boolean;
  availableForPremiumUsers: boolean;
  title: string;
}

interface Artist {
  id: number;
  cover: Cover;
  composer: boolean;
  name: string;
  various: boolean;
  decomposed: [];
}

interface Cover {
  type: string;
  prefix: string;
  uri: string;
}

interface TrackInfo {
  id: number;
  available: boolean;
  availableAsRbt: boolean;
  availableForPremiumUsers: boolean;
  lyricsAvailable: boolean;
  albums: AlbumInfo[];
  storageDir: string;
  durationMs: number;
  explicit: boolean;
  title: string;
  artists: Artist[];
  regions: string[];
}

interface SearchResult {
  type: string;
  page: number;
  perPage: number;
  text: string;
  searchRequestId: string;
  tracks: {
    total: number;
    perPage: number;
    order: number;
    results: TrackInfo[];
  };
}

interface DownloadInfo {
  s: string;
  ts: string;
  path: string;
  host: string;
}

interface PlaylistTrack {
  id: number;
  track: TrackInfo;
  timestamp: string;
  recent: boolean;
}

interface Track extends TrackInfo {
  trackURL: string;
}

interface DownloadID {
  trackID: string;
  albumID: string;
}
