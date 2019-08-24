import { Client, PresenceStatus } from 'discord.js';

class BotStatus {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  setBanner(status: string) {
    this.client.user.setPresence({
      game: {
        name: status,
      },
    });
  }

  setActivity(activity: PresenceStatus) {
    this.client.user.setStatus(activity);
  }
}

export default BotStatus;
