import React, { Component } from 'react';

class Button extends Component {
    constructor() {
        super();
        this.state = {  }
        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        this.props.onKeyPressed(this.props.text);
        //console.log("button pressed" + this);
      }

    render() { 
        //console.log(this.props.text)
        return ( 
            <button onClick={this._onClick}>{this.props.text}</button>
        );
    }
}
 
export default Button;

