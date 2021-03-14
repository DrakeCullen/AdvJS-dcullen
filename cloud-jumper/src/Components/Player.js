import React, { Component } from 'react'
import * as Constants from './Constants.js';
import LiveGame from './LiveGame.js'

class Player extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            //<div className="golf-ball" style={{ top: this.state.y, left: this.state.x, width: Constants.BALL_RADIUS, height: Constants.BALL_RADIUS }}></div>
            <div style={{
                position: 'absolute',
                backgroundColor: 'white',
                borderRadius: '25px',
                width: Constants.BALL_RADIUS,
                height: Constants.BALL_RADIUS,
                left: this.props.x,
                bottom: this.props.y
            }}>
                
            </div>
            
        );
    }

   
}

export default Player