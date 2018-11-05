/**
 * Component for Adder
 */

import React, { Component } from 'react';

class Adder extends Component {
    render() {
        return (
            <div className="adder-section">
                Ajouté par :
                <img src={this.props.adder.pictureUrl} alt="Adder" className="adder-avatar" /> {this.props.adder.name}
            </div>
        )
    }
}

export default Adder;
