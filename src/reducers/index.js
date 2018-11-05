import { combineReducers } from 'redux';

import AsVotedReducer from './asVotedReducer';
import TracklistReducer from './tracklist_reducers';
import SortReducer from './sortedReducer';

/**
 * Combine reducers
 */
const Reducers = combineReducers({
  AsVoted: AsVotedReducer,
  playlist: TracklistReducer,
  sortPlaylist: SortReducer
});

export default Reducers;
