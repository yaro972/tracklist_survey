import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import '../styles/App.css';
import {getPlaylist, sortTrackAction, votedAction} from '../actions/index';
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

    /**
     * Prepare the render of the playlist    *
     */
    renderPlayList() {
        const {tracks} = this.props;

        if (tracks.length) {
            return this.props.sortTrackAction(tracks)['playlist'].map(track => {
                return <Track track={track} click={() => {
                    this.props.votedAction(tracks, track.id)
                }} key={track.id}/>
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
                </header>
                <section>
                    <ul>{this.renderPlayList()}</ul>
                </section>
            </div>
        );
    }
}

/**
 * Links Redux state to application props
 *
 * @param {Object} state State issue from Redux
 * @param {Object} ownProps
 */
const mapStateToProps = (state, ownProps) => {
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

/**
 * Links Redux method to props component
 * @param {Object} dispatch
 * @param {Object} ownProps
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
    ...bindActionCreators({
        getPlaylist,
        votedAction,
        sortTrackAction
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
