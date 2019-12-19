import * as Constants from './constants'

export default function DEBUG(string) {
  if(Constants.ENABLE_DEBUG == true) {
    console.log('[DEBUG] ' + string);
  }
}