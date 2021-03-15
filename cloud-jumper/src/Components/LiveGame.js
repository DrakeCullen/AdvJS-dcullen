import React, { Component } from 'react'
import * as Constants from './Constants.js';
import Player from './Player.js';
import Cloud from './Cloud.js';

class LiveGame extends React.Component {
    constructor(props) {
        super(props);
        this.clouds = []
        this.state = { x: Constants.X_START, y: Constants.Y_START, gravity: Constants.GRAVITY };
        console.log(Constants.BOTTOM, Constants.Y_START)
        this.gravityUpdate = this.gravityUpdate.bind(this);
        this.initialize();
    }

    render() {
        return (
            <div className="game-area" style={{ width: Constants.WIDTH, height: Constants.HEIGHT }} onClick={this.mousePos}>
                <Cloud clouds={this.clouds} />
                <Player x={this.state.x} y={this.state.y} />
            </div>
        );
    }
    componentDidMount() {
        setInterval(this.gravityUpdate, 5);
        document.onkeydown = this.onKeyDown;

    }

    onKeyDown = (e) => {
        if (e.keyCode == '38') {
            this.setState((state, props) => ({ y: state.y + 20 }));
        }
        else if (e.keyCode == '40') {
            this.setState((state, props) => ({ y: state.y - 20 }));
        }
        else if (e.keyCode == '37') {
            this.setState((state, props) => ({ x: state.x - 20 }));
        }
        else if (e.keyCode == '39') {
            this.setState((state, props) => ({ x: state.x + 20 }));
        }
        this.cloudCollision();
    }


    initialize() {
        let yRand = Constants.BOTTOM + Math.floor(Math.random() * 30);
        let xMin = Math.ceil(window.innerWidth / 2 - Constants.WIDTH / 2);
        let xMax = Math.floor(window.innerWidth / 2 + Constants.WIDTH / 2 - Constants.CLOUD_WIDTH);
        for (let i = 0; i < 10; i++) {
            let xRand = Math.floor(Math.random() * (xMax - xMin) + xMin);
            this.clouds.push([{ 'left': xRand }, { 'right': yRand }]);
            yRand += Math.floor(25 + Math.random() * 80)
        }
        for (let cloud of this.clouds) {
            console.log(cloud[0].left, cloud[1].right)
        }
    }

    gravityUpdate(e) {
        this.setState((state, props) => ({ y: state.y - state.gravity }));
        this.gameOver();
    }

    gameOver() {
        if (this.state.y <= Constants.BOTTOM)
            this.setState((state, props) => ({ gravity: 0 }));
    }

    cloudCollision() {
        for (let cloud of this.clouds) {
            if (this.state.x >= cloud[0].left - Constants.BALL_RADIUS && this.state.x <= cloud[0].left + Constants.CLOUD_WIDTH && this.state.y >= cloud[1].right - Constants.CLOUD_HEIGHT && this.state.y <= cloud[1].right + Constants.CLOUD_HEIGHT)
                console.log("YOOO");

        }
    }

}

export default LiveGame