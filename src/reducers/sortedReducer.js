/**
 * Sort playlist
 */

import { SORT_TRACK } from '../actions/action-type';
import { sortTracks } from '../modules/sortTracks';

const INITIAL_STATE = {};

function SortReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SORT_TRACK: {
      return sortTracks(action.playlist);
    }
    default:
      return state;
  }

}

export default SortReducer;
