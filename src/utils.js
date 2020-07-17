export const isEmptyObject = (object) => {
  return Object.keys(object).length === 0;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const convertMinutesToSeconds = (timeInMinutes) => {
  return timeInMinutes * 60;
};

export const addZero = (number) => {
  return number < 10 ? `0${number}` : number;
};

export const formatTime = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor(timeInSeconds / 60) % 60;
  const seconds = timeInSeconds % 60;
  return `${hours}:${addZero(minutes)}:${addZero(seconds)}`;
};

export const formatTimeToDisplay = (timeInMinute) => {
  const timeInSeconds = convertMinutesToSeconds(timeInMinute);
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor(timeInSeconds / 60) % 60;
  return `${hours ? `${hours}h` : ``} ${addZero(minutes)}m`;
};
