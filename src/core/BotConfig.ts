export interface BotConfig {
  auto: {
    deafen: boolean;
    pause: boolean;
    play: boolean;
    reconnect: boolean;
  };

  command: {
    symbol: string;
  };

  discord: {
    token: string;
    log?: boolean;
  };

  queue: {
    announce: boolean;
    repeat: boolean;
  };

  stream: {
    seek: number;
    passes: number;
    volume: number;
    bitrate: number | 'auto';
  };
}

const DefaultBotConfig: BotConfig = {
  auto: {
    deafen: false,
    pause: false,
    play: false,
    reconnect: true,
  },

  discord: {
    token: process.env.BOT_TOKEN,
    log: true,
  },

  command: {
    symbol: process.env.PREFIX,
  },

  queue: {
    announce: true,
    repeat: false,
  },

  stream: {
    seek: 0,
    passes: 3,
    volume: 1,
    bitrate: 'auto',
  },
};

export default DefaultBotConfig;
