import * as Constants from './constants'

export default function TRACE_DEBUG(string) {
  if(Constants.ENABLE_DEBUG === true) {
    console.log('[DEBUG] ' + string);
  }
}