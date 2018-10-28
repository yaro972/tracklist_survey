import {TRACK_VOTED, GET_TRACKLIST} from '../actions/action-type';

const initialState = [];

function AsVotedReducer(state = initialState, action) {
  switch (action.type) {
    case TRACK_VOTED:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case GET_TRACKLIST: 
      return 
    default:
      return state
  }
}

export default AsVotedReducer;
