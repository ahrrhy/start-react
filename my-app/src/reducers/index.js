import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tickets from './tickets';
import filter from './filterTracks';

export default combineReducers({
    routing: routerReducer,
    tickets,
    filter
});