/**
 * Track Component
 */
import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Adder from './adder';
import TrackDetail from './trackDetail';

class Track extends Component {
    render() {
        return (

            <li onClick={this.props.click} className="track">
                <img src={this.props.track.pictureUrl} alt="Track album " className="albumPicture"/>
                <TrackDetail track={this.props.track}/>
                <Adder adder={this.props.track.adder}/>

                <p className="votes"><FontAwesomeIcon icon="thumbs-up"/> {this.props.track.votes.count} </p>
            </li>
        )

    }
}

export default Track;
