declare module 'yandex-music-api' {
  export interface SearchOptions {
    type: string;
  }

  export interface AlbumInfo {
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

  export interface Artist {
    id: number;
    cover: Cover;
    composer: boolean;
    name: string;
    various: boolean;
    decomposed: [];
  }

  export interface Cover {
    type: string;
    prefix: string;
    uri: string;
  }

  export interface TrackInfo {
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

  export interface SearchResult {
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

  class YandexMusicApi {
    public init(options: any): Promise<void>

    public search(query: string, options?: SearchOptions): Promise<SearchResult>
  }

  export default YandexMusicApi;
}
