import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import '../styles/App.css';
import {getPlaylist, sortTrackAction, votedAction} from '../actions/index';
import Track from './track';

/**
 * @typedef {Object} State State element
 */

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
     * @param {number} id The Id of the track
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
     * Prepare the render of the playlist
     * @returns {JSX.Element|*}
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

    /**
     * Méthode de rendu
     * @returns {JSX.Element}
     */
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
 * @param {State} state State issue from Redux
 * @param {Props} ownProps ownProps
 * @returns {{tracks: ((function(Array=, Object): (Object.payload))|*)}|{tracks: (function(Object=, Object): (Tracks))}}
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
 * @param {Object} dispatch Dispacther
 * @param {Object} ownProps Props
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
    ...bindActionCreators({
        getPlaylist,
        votedAction,
        sortTrackAction
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
