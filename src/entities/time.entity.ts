import moment, { Moment } from 'moment';

export class TimeEntity {
  constructor(private readonly _date: Moment) {}

  get date() {
    return this._date;
  }

  static of(date: Date) {
    return new TimeEntity(moment(date));
  }

  static duration(nowDate: TimeEntity, diffDate: TimeEntity) {
    return moment.duration(nowDate.date.diff(diffDate.date)).asMinutes();
  }
}
