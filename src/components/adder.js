import React, {Component} from 'react';

class Adder extends Component {
    render (){
        return (
            <div>
            <p>{this.props.adder.name }</p>
                <img src={this.props.adder.pictureUrl} alt="Adder "/>
            </div>
            )
    }
}

export default Adder;