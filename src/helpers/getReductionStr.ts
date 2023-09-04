/**
 *
 * @param str - строка, которую нужно отформатировать
 * @param num - колличество символов, которые остануться в отформатированной строке
 * @returns - если колличество символов меньше параметра num, тогда вернеть строка вида 'hgdfogidfhi...'
 */
export const getReductionStr = (str: string, num: number): string => {
  const formatStr = str.trim();
  return formatStr.length > num ? `${formatStr.slice(0, num)}...` : formatStr;
};
