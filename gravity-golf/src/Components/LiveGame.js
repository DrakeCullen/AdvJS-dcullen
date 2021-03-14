import React, { Component } from 'react'
import * as Constants from './Constants.js';
import GolfBall from './GolfBall.js';

class LiveGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: Constants.X_START, y: Constants.Y_START, xMouse: 0, yMouse: 0};
    }

    render() {
        return (
            <div className="game-area container mt-5" style={{width: Constants.WIDTH, height: Constants.HEIGHT}}>
                <GolfBall x={this.state.x} y={this.state.y}/>
            </div>
        );
    }

   

}

export default LiveGame