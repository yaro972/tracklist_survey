import { GET_PLAYLIST } from '../actions/action-type';

/**
 * Track list reducer
 * @param {Array} state 
 * @param {Object} action 
 */
const TracklistReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PLAYLIST: {
      console.log('2222', action)
      return action.payload;
    }
    default:
      return state;
  }
}

export default TracklistReducer;
