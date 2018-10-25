import React, { Component } from 'react';

class Tracklist extends Component {
    render() {
        return (
            <div onClick={(e) => this.props.handleClickVoted(e, this.props.track.id) }> 
                <p>{this.props.track.name}</p>
                <p>{this.props.track.duration}</p>
                <p>{this.props.track.artist}</p>
                <p>{this.props.track.adder.name }</p>
                <img src={this.props.track.adder.pictureUrl} alt="Adder "/>
                <img src={this.props.track.pictureUrl} alt="Track album " />
                <p>{this.props.track.votes.count}</p>
            </div>
        )

    }
}

export default Tracklist;
