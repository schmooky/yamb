/* eslint-disable */
/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly BOT_TOKEN: string;
    readonly PREFIX: string;
  }
}
