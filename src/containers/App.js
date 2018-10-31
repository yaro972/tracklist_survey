import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../styles/App.css';
import { getPlaylist } from '../actions/index';
import Track from './track';


class App extends Component {
  constructor(props) {
    super(props);

    this.handleClickVoted = this.handleClickVoted.bind(this);
  }

  componentDidMount() {

    this.props.getPlaylist();
  }

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

  handleClickVoted(ev, data) {
    this.setState({
      tracks: this.sortTracks(this.increaseVote(data))
    });
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
        return <Track track={track} handleClickVoted={this.handleClickVoted} key={track.id} />
      })
    } else {

      console.info("2222")
      return <h3>Pas de playlist</h3>
    }
  }

  render() {
    // let sortedPlaylist = this.props.tracks.map(track => {
    //   return <Track track={track} handleClickVoted={this.handleClickVoted} key={track.id} />
    // })

    return (
      <div className="App">
        <header className="App-header">

          <h2>Liste de pistes</h2>
          {/* {sortedPlaylist} */}
          {this.renderPlayList()}

        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { tracks: state.playlist }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators({ getPlaylist }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App;
