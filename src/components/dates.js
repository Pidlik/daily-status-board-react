
import * as Constants from './constants'

/**
 * Returns the given date as YYYY-MM-DD
 */
export function getIsoDate(date = new Date()) {
  return date.toISOString().slice(0,10);
}

/**
 * Returns the given date and time as YYYY-MM-DDTHH:mm:ss.sssZ (ISO 8601 format)
 */
export function getIsoDateAndTime(date = new Date()) {
  return date.toISOString();
}

/**
 * Returns string 'Monday', 'Tuesday' etc.
 */
export function getWeekdayName(date = new Date()) {
  return Constants.WEEKDAYS[date.getDay()]
}