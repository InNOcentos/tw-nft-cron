"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeEntity = void 0;
const moment_1 = __importDefault(require("moment"));
class TimeEntity {
    constructor(_date) {
        this._date = _date;
    }
    get date() {
        return this._date;
    }
    static of(date) {
        return new TimeEntity((0, moment_1.default)(date));
    }
    static duration(nowDate, diffDate) {
        return moment_1.default.duration(nowDate.date.diff(diffDate.date)).asMinutes();
    }
}
exports.TimeEntity = TimeEntity;
//# sourceMappingURL=time.entity.js.map