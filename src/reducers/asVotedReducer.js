/**
 * Action for voted event
 */
import { TRACK_VOTED } from '../actions/action-type';

const initialState = {};

/**
 * Voted action Reducer
 * @param {Object} state State of reducer
 * @param {Object} action action
 */
function AsVotedReducer(state = initialState, action) {
  switch (action.type) {
    case TRACK_VOTED:
      // let pList = action.payload.track.map((track) => { return track });
      return action.playlist.map(track => {
        if (track.id === action.id) {
          track.votes.count = track.votes.count + 1;
          track.votes.userVoted = !track.votes.userVoted;
          return track;
        } else {
          return track;
        }
      });


    default:
      return state
  }
}

export default AsVotedReducer;
