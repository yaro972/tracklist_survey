/**
 * Load playlist
 */
import { GET_PLAYLIST } from '../actions/action-type';

/**
 * Track list reducer
 * @param {Array} state State f reducer
 * @param {Object} action Action required
 */
const TracklistReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PLAYLIST: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default TracklistReducer;
