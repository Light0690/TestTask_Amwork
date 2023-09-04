import { faker } from "@faker-js/faker";

/**
 *
 * @param date - любая дата
 * @returns { string } - строка вида 'Mar 20, 08:38 PM'
 */

export const getFormatDate = (date: Date): string => {
  const day = +date.getDate();
  const month = faker.date.month({ abbreviated: true });
  const time = date.toLocaleTimeString().slice(0, 5);
  const AmOrPm = day > 10 ? "PM" : "AM";

  return `${month} ${day}, ${time} ${AmOrPm}`;
};
