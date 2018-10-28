import { combineReducers } from 'redux';

import AsVotedReducer from './asVotedReducer';
import TracklistReducer from './tracklist_reducers'

const Reducers = combineReducers({
  AsVotedReducer,
  TracklistReducer
});

export default Reducers;
