/**
 * Track Component
 */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//
import Adder from './adder';
import TrackDetail from './trackDetail';

import '../styles/track.css';

class Track extends Component {
    render() {
        return (

            <li onClick={this.props.click} className="track">


                <TrackDetail track={this.props.track} />
                <Adder adder={this.props.track.adder} />


                <p><FontAwesomeIcon icon="thumbs-up" /> {this.props.track.votes.count} </p>
            </li >
        )

    }
}

export default Track;
