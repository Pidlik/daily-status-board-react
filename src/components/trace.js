import * as Constants from './constants'

/**
 * Prefaces the given string with '[DEBUG]' and prints to console.
 * Only prints if debug traces are enabled
 */
export default function TRACE_DEBUG(string) {
  if(Constants.ENABLE_DEBUG === true) {
    console.log('[DEBUG] ' + string);
  }
}