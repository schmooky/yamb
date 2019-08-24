import { Client, PresenceStatus } from 'discord.js';

class BotStatus {
  private client: Client;

  public constructor(client: Client) {
    this.client = client;
  }

  public setBanner(status: string): void {
    this.client.user.setPresence({
      game: {
        name: status,
      },
    });
  }

  public setActivity(activity: PresenceStatus): void {
    this.client.user.setStatus(activity);
  }
}

export default BotStatus;
