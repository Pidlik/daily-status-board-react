
import * as Constants from './constants'

/**
 * Returns todays date as YYYY-MM-DD
 */
export function getIsoDate(date = new Date()) {
  return date.toISOString().slice(0,10);
}

/**
 * Returns 'Monday' or 'Tuesday' etc.
 */
export function getWeekdayName(date = new Date()) {
  return Constants.WEEKDAYS[date.getDay()]
}