import React, { Component } from 'react'
import * as Constants from './Constants.js';
import Player from './Player.js';
import Cloud from './Cloud.js';

class LiveGame extends React.Component {
    constructor(props) {
        super(props);
        this.clouds = []
        this.counter = 0
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
        if (e.keyCode == '37' && this.state.x > Constants.LEFT) 
            this.setState((state, props) => ({ x: state.x - 20 }));
        else if (e.keyCode == '39' && this.state.x < Constants.RIGHT - Constants.BALL_RADIUS) 
            this.setState((state, props) => ({ x: state.x + 20 }));
        else if (e.keyCode == '32')
            this.cloudCollision();
    }


    initialize() {
        let xMin = Math.ceil(window.innerWidth / 2 - Constants.WIDTH / 2);
        let xMax = Math.floor(window.innerWidth / 2 + Constants.WIDTH / 2 - Constants.CLOUD_WIDTH);
        for (let i = 0; i < 10; i++) {
            let xRand = Math.floor(Math.random() * (xMax - xMin) + xMin);
            let yRand = Math.floor(Math.random() * (window.innerHeight - Constants.BOTTOM - 100) + Constants.BOTTOM)
            this.clouds.push([{ 'left': xRand }, { 'right': yRand }]);
        }
        for (let cloud of this.clouds) {
            console.log(cloud[0].left, cloud[1].right)
        }
        this.xMin = xMin;
        this.xMax = xMax;
    }

    gravityUpdate(e) {
        if(this.counter == 0)
            this.setState((state, props) => ({ y: state.y - state.gravity }));
        else {
            this.setState((state, props) => ({ y: state.y + state.gravity*3 }));
            for (let cloud of this.clouds) { 
                cloud[1].right--;
                if(cloud[1].right < Constants.BOTTOM)
                    cloud[1].right = window.innerHeight + Constants.CLOUD_HEIGHT;  
            }
            this.counter--;
        }
        this.gameOver();
    }

    gameOver() {
        if (this.state.y <= Constants.BOTTOM)
            this.setState((state, props) => ({ gravity: 0 }));
    }

    cloudCollision() {
        for (let cloud of this.clouds) {
            if (this.state.x >= cloud[0].left - Constants.BALL_RADIUS && this.state.x <= cloud[0].left + Constants.CLOUD_WIDTH && this.state.y >= cloud[1].right - Constants.CLOUD_HEIGHT && this.state.y <= cloud[1].right + Constants.CLOUD_HEIGHT)
                this.newCloud(cloud);
          //  if (Math.abs(this.state.y - cloud[1].right) > 300)
              //  this.newCloud(cloud);
        }
    }

    newCloud(cloud) {
        this.counter = 150;
        let yRand = Math.floor(Math.random() * (window.innerHeight - Constants.BOTTOM - 100) + Constants.BOTTOM);
        let xRand = Math.floor(Math.random() * (this.xMax - this.xMin) + this.xMin);
        cloud[0].left = xRand;
        cloud[1].right = yRand;
    }

}

export default LiveGame