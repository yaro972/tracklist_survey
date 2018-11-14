/**
 * Change voted status
 * 
 * @param {Tracks<>} playlist 
 * @param {Number} id 
 * @returns {Tracks<>} new playlist
 */
export function Voted(playlist, id) {
  return playlist.map(track => {
    if (track.id === id) {
      track.votes.count = track.votes.count + 1;
      track.votes.userVoted = true;
      return track;
    } else {
      return track;
    }
  });
}
