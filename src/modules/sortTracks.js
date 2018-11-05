/**
 * Sort tracks in the playlist
 * 
 * @param {Track[]} trackList Tracklist
 * @return {Track[]} Sorted playlist 
 */
export function sortTracks(trackList) {
    return trackList.sort((currentTrack, nextTrack) => {
      return nextTrack.votes.count - currentTrack.votes.count;
    });
  }
