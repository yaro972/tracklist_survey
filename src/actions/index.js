import axios from 'axios';

import { GET_PLAYLIST, ERROR_TRACKLIST, TRACK_VOTED } from './action-type';
import { sortTracks } from '../modules/sortTracks'

const API_PLAYLIST = '/tracklist.json';

/**
 * Get tracklist content
 */
export function getPlaylist() {
  return function (dispatch) {
    return axios.get(API_PLAYLIST)
      .then((response) => {
        dispatch({
          type: GET_PLAYLIST,
          payload: sortTracks(response.data)
        })
      })
      .catch(error => {
        dispatch({
          type: ERROR_TRACKLIST,
          payload: error
        })
      });
  }
}


export function votedAction(playlist, id) {
  return {
    type: TRACK_VOTED,
    playlist: sortTracks(playlist),
    id
  }
}
