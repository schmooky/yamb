const secondsToTimestamp = (time: number): string => {
  const seconds = `0${time % 60}`.slice(-2);
  const minutes = `0${Math.trunc(time / 60) % 60}`.slice(-2);
  const hours = `0${Math.trunc(time / 60 / 60) % 24}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
};

export default secondsToTimestamp;
