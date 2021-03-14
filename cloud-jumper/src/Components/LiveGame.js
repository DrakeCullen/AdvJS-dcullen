import React, { Component } from 'react'
import * as Constants from './Constants.js';
import Player from './Player.js';
import Cloud from './Cloud.js';

class LiveGame extends React.Component {
    constructor(props) {
        super(props);
        this.clouds = []
        this.state = { x: Constants.X_START, y: Constants.Y_START};
        this.gravity = this.gravity.bind(this);
        this.mousePos = this.mousePos.bind(this);
        this.initialize();
    }

    render() {
        return (
            <div className="game-area container" style={{width: Constants.WIDTH, height: Constants.HEIGHT}} onClick={this.mousePos}>
                <Cloud clouds={this.clouds}/>
                <Player x={this.state.x} y={this.state.y}/>
            </div>
        );
    }

    mousePos(e) {
        console.log(e.screenX)
    }
    componentDidMount() {
        setInterval(this.gravity);
        document.onkeydown = this.onKeyDown;
    }

    componentDidUpdate() {
    }
    onKeyDown = (e) => {
        if (e.keyCode == '38') {
            this.setState((state, props) => ({y: state.y + 20}));
        }
        else if (e.keyCode == '40') {
            this.setState((state, props) => ({y: state.y - 20}));
        }
        else if (e.keyCode == '37') {
            this.setState((state, props) => ({x: state.x - 20}));
        }
        else if (e.keyCode == '39') {
            this.setState((state, props) => ({x: state.x + 20}));
        }
    }

    gravity(e) {
        this.setState((state, props) => ({y: state.y - .5}));
    }

    initialize() {
        let yRand= Constants.HEIGHT - 170 - Math.floor(Math.random() * 30); 
        let xRand=0;
        let xMin = Math.ceil(window.innerWidth / 2 - Constants.WIDTH / 2);
        let xMax = Math.floor(window.innerWidth / 2 + Constants.WIDTH / 2 - Constants.CLOUD_WIDTH);
        for(let i = 0; i < 8; i++) {
            xRand = Math.floor(Math.random() * (xMax - xMin) + xMin); 
            this.clouds.push([{'left': xRand}, {'right': yRand}]);
            yRand += Math.floor(30 + Math.random() * 80)            
        }
        for (let c of this.clouds) {
            console.log(c)
        }
    }

}

export default LiveGame