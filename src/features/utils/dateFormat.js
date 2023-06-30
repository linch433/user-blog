import dayjs from 'dayjs';

export class DateFormat {
  static getFormatDate(date) {
    return dayjs(date).format('H:mm, D/MM/YYYY');
  }
}
