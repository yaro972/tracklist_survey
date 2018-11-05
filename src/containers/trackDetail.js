/**
 * Full track detail component
 */
import React, { Component } from 'react';

class TrackDetail extends Component {
    render() {
        return (
            <div className="twoColumns">
                <h4 className="track-title">{this.props.track.name}</h4>
                <p>Durée : {this.props.track.duration} min</p>
                <p>Artiste : {this.props.track.artist}</p>
            </div>
        )
    }
}

export default TrackDetail;
