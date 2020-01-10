// ChartHandler.js
export const MAX_DATA_LENGTH = 10; // At most 10 days showing in the chart
export const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const COOKIES_NAME_CHART = 'ChartData';

// PostItHandler.js
export const COOKIES_NAME_POST_IT = 'PostIts';
export const MAX_POST_ITS = 8;

// ChartInput.js
export const MAX_DATA_INPUT = 15;     // At most 15 +/- in input
export const CHART_KEY_PLUS = 87;     // 'w'
export const CHART_KEY_MINUS = 69;    // 'e'
export const CHART_KEY_SUBMIT = 83;   // 's'

// PostItControls.js
export const POST_IT_KEY_ADD = 65;    // 'a'
export const HELP_TEXT = `To increase/decrease plus:<br/>'${String.fromCharCode(CHART_KEY_PLUS)}' and 'shift+${String.fromCharCode(CHART_KEY_PLUS)}'\n\n` +
                         `To increase/decrease minus:\n'${String.fromCharCode(CHART_KEY_MINUS)}' and 'shift+${String.fromCharCode(CHART_KEY_MINUS)}'\n\n` +
                         `To submit data:\n'${String.fromCharCode(CHART_KEY_SUBMIT)}'\n\n` +
                         `To add post-it:\n'${String.fromCharCode(POST_IT_KEY_ADD)}'`;
                         // `To see all time stats:\n${} or left click on on chart`;

// index.js
export const COOKIES_NAME_THEME = 'Theme';

// trace.js
export const ENABLE_DEBUG = false;