import { Message, VoiceConnection } from 'discord.js';

const joinUserChannel = (msg: Message): Promise<VoiceConnection> => new Promise((resolve, reject): void => {
  const channel = msg.member.voiceChannel;

  if (channel && channel.type === 'voice') {
    channel.join().then((connection): void => resolve(connection));
  } else {
    reject(Error('You are not in voice channel'));
  }
});

export default joinUserChannel;
