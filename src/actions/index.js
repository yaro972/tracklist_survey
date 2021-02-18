import axios from 'axios';

import {ERROR_TRACKLIST, GET_PLAYLIST, SORT_TRACK, TRACK_VOTED} from './action-type';

const API_PLAYLIST = '/tracklist.json';

/**
 * @typedef {Object} Track Track element
 * @property {number} id index of the track
 * @property {number} duration Duration of the track in minutes
 * @property {Boolean} priority Priority of the track
 * @property {String} artist  Artist of the track
 * @property {Object} adder Adder of the track in list
 * @property {Number} adder.id ID of the adder
 * @property {String} adder.name Name of the adder
 * @property {String} adder.pictuerUrl Url of the adder avatar
 * @property {String} pictuerUrl Picture of the album
 * @property {Object} votes Vote status of the track
 * @property {number} votes.count Number of vote for this track
 * @property {Boolean} votes.userVotes Do user has already votes for this track
 */

/**
 * @typedef Playlist
 * @property {Track[]} Tracks track
 */

/**
 * Get tracklist content
 *
 * return {Promise<Playlist>} The loaded playlist
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

/**
 * Action when vote is made
 *
 * @param {Playlist} playlist Playlist
 * @param {number} id Index number
 * @returns {{playlist:Playlist, id:number, type: string}} New playlist voted
 */
export function votedAction(playlist, id) {
    return {
        type: TRACK_VOTED,
        playlist: playlist,
        id
    }
}

/**
 * Sort tracklist content
 *
 * @param {Playlist} playlist La playlist
 * @returns {{playlist: Playlist, type: string}} The loaded playlist
 */
export function sortTrackAction(playlist) {
    return {
        type: SORT_TRACK,
        playlist: playlist
    }
}
