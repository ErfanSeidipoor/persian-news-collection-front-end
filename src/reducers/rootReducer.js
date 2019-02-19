import { combineReducers } from 'redux';

import simpleReducer from './simpleReducer';
import news from './news';

export default combineReducers({
 simpleReducer,
 news,
});