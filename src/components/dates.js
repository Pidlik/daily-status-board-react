
import * as Constants from './constants'

/**
 * Returns the given date as YYYY-MM-DD
 */
export function getIsoDate(date = new Date()) {
  return date.toISOString().slice(0,10);
}

/**
 * Returns string 'Monday', 'Tuesday' etc.
 */
export function getWeekdayName(date = new Date()) {
  return Constants.WEEKDAYS[date.getDay()]
}