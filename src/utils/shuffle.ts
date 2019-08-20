/**
 * Выполняет над массивом тасование Фишера — Йетса
 *
 * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @param  {T[]} array Массив который надо перетасовать
 * @returns T Перетасованный массив
 */
// eslint-disable-next-line
const shuffle = <T>(array: T[]): T[] => {
  let m: number = array.length;
  let i: number;

  while (m) {
    i = Math.floor(Math.random() * m);
    m -= 1;
    // eslint-disable-next-line no-param-reassign
    [array[m], array[i]] = [array[i], array[m]];
  }

  return array;
};

export default shuffle;
