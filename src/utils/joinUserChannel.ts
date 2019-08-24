import { Message, VoiceConnection } from 'discord.js';

const joinUserChannel = (msg: Message): Promise<VoiceConnection> => new Promise((resolve, reject) => {
  const channel = msg.member.voiceChannel;

  if (channel && channel.type === 'voice') {
    channel.join().then(connection => resolve(connection));
  } else reject(new Error('User isn\'t on a voice channel!'));
});

export default joinUserChannel;
