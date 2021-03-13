import React, { Component } from 'react'
import * as Constants from './Constants.js';
import GolfBall from './GolfBall.js';

class LiveGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 550, y: 140, xMouse: 0, yMouse: 0};
       // this.move = this.move.bind(this);
    }

    render() {
        return (
            
            <div tabIndex="0" className="game-area container mt-5" style={{width: Constants.WIDTH, height: Constants.HEIGHT}}>
                <GolfBall x={this.state.x} y={this.state.y}/>
            </div>
        );
    }
}

export default LiveGame