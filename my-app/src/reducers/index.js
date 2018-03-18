import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tickets from './tickets';

export default combineReducers({
    routing: routerReducer,
    tickets
});