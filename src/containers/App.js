import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../styles/App.css';
import { getPlaylist, votedAction } from '../actions/index';
import Track from './track';

/**
 * Main Application Class
 */
class App extends Component {

  /**
   * Execute when comment is mounted
   */
  componentDidMount() {

    this.props.getPlaylist();
  }

  /**
   * Increase the number of vote counter
   * @param {Number} id The Id of the track
   */
  increaseVote(id) {
    return this.props.tracks.map(track => {
      if (track.id === id) {
        track.votes.count++;
        track.votes.userVoted = true;
      }

      return track;
    }
    )
  }


  sortTracks(trackList) {
    return trackList.sort((currentTrack, nextTrack) => {
      return nextTrack.votes.count - currentTrack.votes.count;
    });
  }

  renderPlayList() {

    const { tracks } = this.props;

    if (tracks.length) {
      return tracks.map(track => {
        return <Track track={track} click={() => { this.props.votedAction(tracks, track.id) }} key={track.id} />
      })
    } else {
      return <h3>Pas de playlist</h3>
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h2>Liste de pistes</h2>
          {this.renderPlayList()}

        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("&&&&", state, ownProps)
  if (state.AsVoted.length > 0) {
    return {
      tracks: state.AsVoted
    }
  } else {
    return {
      tracks: state.playlist
    }
  }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators({
    getPlaylist,
    votedAction
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App;
