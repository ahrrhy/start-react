import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tracks from './tracks';
import lists from './playlists';
import filter from './filterTracks';

export default combineReducers({
    routing: routerReducer,
    tracks,
    lists,
    filter
});