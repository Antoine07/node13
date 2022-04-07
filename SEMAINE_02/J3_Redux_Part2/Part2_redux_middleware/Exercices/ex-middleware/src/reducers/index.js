import { combineReducers } from 'redux';

import log from './log';
import count from './count';

export default combineReducers({
    log, count
});