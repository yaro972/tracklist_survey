import React, { Component } from 'react';
import Adder from './adder';
import TrackDetail from './trackDetail';

class Track extends Component {
    render() {
        return (
            <div onClick={(e) => this.props.handleClickVoted(e, this.props.track.id) } className="track"> 
               
                <TrackDetail track={this.props.track} />
                <Adder adder={this.props.track.adder}/>
               
                
                <p>{this.props.track.votes.count}</p>
            </div>
        )

    }
}

export default Track;
