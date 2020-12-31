const moment = require('moment');
function now () {
  return new Date();
}
function addHours (date, hours = 0) {
  return moment(date).add(hours, 'hours').toDate();
}
function addDays (date, days = 0) {
  return moment(date).add(days, 'days').toDate();
}
function addMonths (date, months = 0) {
  return moment(date).add(months, 'months').toDate();
}
function addYears (date, years = 0) {
  return moment(date).add(years, 'years').toDate();
}
function addMinutes (date, minutes = 0) {
  return moment(date).add(minutes, 'minutes').toDate();
}
/**
   * @param {string} dateStr - a GMT8 date string, e.g. 2012-12-12 12:00:00
   * @param {string} format
   */
function formatGMT8Date2GMTStr (dateStr, format) {
  let date = moment(`${dateStr}+08:00`);
  return date.utcOffset(0).format(format);
}
/**
  * @param {Date|string} date - a JavaScript Date object, or a valid date string with specific timezone, e.g. new Date(), "2019-12-12T00:00:00Z"
  * @param {string} format
  */
function format2GMTStr (date, format) {
  date = moment(date);
  return date.utcOffset(0).format(format);
}
/**
 * @param {string} dateStr - a GMT date string, e.g. 2012-12-12 12:00:00
 * @param {string} format
 */
function formatGMTDate2GMT8Str (dateStr, format) {
  let date = moment(`${dateStr}+00:00`);
  return date.utcOffset(8).format(format);
}
/**
 * @param {Date|string} date - a JavaScript Date object, or a valid date string with specific timezone, e.g. new Date(), "2019-12-12T00:00:00Z"
 * @param {string} format
 */
function format2GMT8Str (date, format) {
  date = moment(date);
  return date.utcOffset(8).format(format);
}
function getCurrentGMTDateString () {
  return `${moment().utcOffset(0).format('YYYY-MM-DDTHH:mm:ss')}Z`;
}
function parseWithTimzone (dateStr, format, timezone) {
  return moment(`${dateStr} ${timezone}`, `${format} Z`).toDate();
}
/**
 * Mutates the original moment by setting it to the start of a unit of time.
 * @param {Ddate|string} date
 * @param {string} startOfType - 'year', 'month', 'quarter', 'week', 'isoWeek', 'day', 'hour', 'minute', 'second'
 */
function mutatesDateOfStart (date, startOfType = 'hour') {
  return moment(date).startOf(startOfType).toDate();
}

/**
 * @param {Date|string} date - a JavaScript Date object, or a valid date string with specific timezone, e.g. new Date(), "2019-12-12T00:00:00Z"
 * @param {string} format with no timezone e.g. YYYY-MM-DDTHH:mm:ss
 */
function format2GMTStrWithZ (date, format) {
  date = moment(date);
  return `${date.utcOffset(0).format(format)}Z`;
}

function formatTimeWithTimeZone (date, timezone, format) {
  return moment(date).utcOffset(timezone).format(format);
}

const getStartDate = date => {
  return moment(date).startOf('date').toDate();
};

const getEndOfDate = date => {
  return moment(date).endOf('date').toDate();
};
const computationTimeDiff = (startTime, endTime, unitOfTime, float = false) => {
  const start = moment(startTime);
  const end = moment(endTime);
  return end.diff(start, unitOfTime, float);
};

module.exports = {
  YYYYMMDDHHmm: 'YYYY-MM-DD HH:mm',
  YYYYMMDDHHmmss: 'YYYY-MM-DD HH:mm:ss',
  YYYYMMDDHHmmss0: 'YYYY-MM-DD HH:mm:ss.0',
  YYYYMMTDDHHmmss: 'YYYY-MM-DDTHH:mm:ss',
  YYYYMMTDDHHmmssZ: 'YYYY-MM-DDTHH:mm:ssZ',
  YYYYMMDDCHHmm: 'YYYY-MM-DD, HH:mm',
  YYYYMMDD00hhmmssSSS: 'YYYYMMDD00hhmmssSSS',
  DDMMMYYYYHHmm: 'DD MMM YYYY, HH:mm',
  YYYYMMTDDHHmmss0800: 'YYYY-MM-DDTHH:mm:ss+08:00',
  YYYYMMTDDHHmmssSSSz: 'YYYY-MM-DDTHH:mm:ss.SSS[Z]',
  now,
  addHours,
  addDays,
  addMonths,
  addYears,
  formatGMT8Date2GMTStr,
  format2GMTStr,
  formatGMTDate2GMT8Str,
  format2GMT8Str,
  getCurrentGMTDateString,
  parseWithTimzone,
  mutatesDateOfStart,
  format2GMTStrWithZ,
  addMinutes,
  formatTimeWithTimeZone,
  getStartDate,
  getEndOfDate,
  computationTimeDiff,
};
