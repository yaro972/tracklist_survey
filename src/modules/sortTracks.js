  export function sortTracks(trackList) {
    return trackList.sort((currentTrack, nextTrack) => {
      return nextTrack.votes.count - currentTrack.votes.count;
    });
  }
