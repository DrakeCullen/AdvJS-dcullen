import React, { Component } from 'react'
import * as Constants from './Constants.js';
import LiveGame from './LiveGame.js'

class GolfBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: props.x, y: props.y};
        this.gravity = this.gravity.bind(this);
    }

    render() {
        return (
            //<div className="golf-ball" style={{ top: this.state.y, left: this.state.x, width: Constants.BALL_RADIUS, height: Constants.BALL_RADIUS }}></div>
            <div style={{
                position: 'absolute',
                backgroundColor: 'blue',
                width: Constants.BALL_RADIUS,
                height: Constants.BALL_RADIUS,
                left: this.state.x,
                bottom: this.state.y,
            }}>
                
            </div>
            
        );
    }

    componentDidMount() {
        setInterval(this.gravity);
        document.onkeydown = this.onKeyDown;
    }

    componentDidUpdate() {
        console.log("Player");
    }
    onKeyDown = (e) => {
        if (e.keyCode == '38') {
            this.setState((state, props) => ({y: state.y + 50}));
        }
        else if (e.keyCode == '40') {
            this.setState((state, props) => ({y: state.y - 50}));
        }
        else if (e.keyCode == '37') {
            this.setState((state, props) => ({x: state.x - 50}));
        }
        else if (e.keyCode == '39') {
            this.setState((state, props) => ({x: state.x + 50}));
        }
    }

    gravity(e) {
        this.setState((state, props) => ({y: state.y - .5}));
    }
}

export default GolfBall