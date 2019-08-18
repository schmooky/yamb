const notFound = async (message) => {
  await message.reply('I don\'t understand the command. Try **~help**');
};

module.exports = notFound;
