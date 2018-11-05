/**
 * Full track detail component
 */
import React, { Component } from 'react';

class TrackDetail extends Component {
    render() {
        return (
            <div>
                <img src={this.props.track.pictureUrl} alt="Track album " className="albumPicture" />
                <p>{this.props.track.name}</p>
                <p>{this.props.track.duration}</p>
                <p>{this.props.track.artist}</p>
            </div>
        )
    }
}

export default TrackDetail;
