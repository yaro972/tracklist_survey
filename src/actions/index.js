import axios from 'axios';

import { GET_PLAYLIST, ERROR_TRACKLIST, TRACK_SORTED } from './action-type';
import { sortTracks } from '../modules/sortTracks'

const API_PLAYLIST = 'http://localhost:3000/tracklist.json';

/**
 * Get tracklist content
 */
export function getPlaylist() {
  return function (dispatch) {
    return axios.get(API_PLAYLIST)
      .then((response) => {
        dispatch({
          type: GET_PLAYLIST,
          payload: response.data
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

export function sortTracklist(tracklist) {
  return {
    type: TRACK_SORTED,
    payload: sortTracks(tracklist)
  };
}
