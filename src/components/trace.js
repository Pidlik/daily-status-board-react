
const DEBUG = true;

export default function DEBUG_LOG(string) {
  if(DEBUG == true) {
    console.log('[DEBUG] ' + string);
  }
}