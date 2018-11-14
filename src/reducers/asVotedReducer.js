/**
 * Action for voted event
 */
import { TRACK_VOTED } from '../actions/action-type';
import {Voted} from '../modules/voted';

const initialState = {};

/**
 * Voted action Reducer
 * @param {Object} state State of reducer
 * @param {Object} action action
 */
function AsVotedReducer(state = initialState, action) {
  switch (action.type) {
    case TRACK_VOTED:
      return Voted(action.playlist, action.id);

    default:
      return state
  }
}

export default AsVotedReducer;
