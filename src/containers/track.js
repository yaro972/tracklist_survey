/**
 * Track Component
 */
import React, { Component } from 'react';
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


                <p>{this.props.track.votes.count} x *</p>
            </li >
        )

    }
}

export default Track;
