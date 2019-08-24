const secondsToTimestamp = (duration: number): string => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration - hours * 3600) / 60);
  const seconds = duration - hours * 3600 - minutes * 60;

  let timestamp = '';

  if (hours) {
    timestamp = `${hours}:`;
  }

  if (minutes || timestamp !== '') {
    timestamp += `${(minutes < 10 && timestamp === '') ? `0${minutes}` : minutes}:`;
  }

  if (timestamp === '') {
    timestamp = `${seconds}s`;
  } else {
    timestamp += seconds < 10 ? `0${seconds}` : seconds;
  }

  return timestamp;
};


export default secondsToTimestamp;
