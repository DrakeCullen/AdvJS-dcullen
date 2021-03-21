import React, { Component } from 'react'
import * as Constants from './Constants.js';
import Player from './Player.js';
import Cloud from './Cloud.js';

class LiveGame extends React.Component {
    constructor(props) {
        super(props);
        this.clouds = [];
        this.counter = 0;
        this.state = { x: Constants.X_START, y: Constants.Y_START, gravity: Constants.GRAVITY };
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
            this.setState((state, props) => ({ x: state.x - 10 }));
        else if (e.keyCode == '39' && this.state.x < Constants.RIGHT - Constants.BALL_RADIUS) 
            this.setState((state, props) => ({ x: state.x + 10 }));
        else if (e.keyCode == '32')
            this.cloudCollision();
    }

    initialize() {
        this.xMin = Math.ceil(window.innerWidth / 2 - Constants.WIDTH / 2);
        this.xMax = Math.floor(window.innerWidth / 2 + Constants.WIDTH / 2 - Constants.CLOUD_WIDTH);
        this.yMin = Constants.TOP - Constants.CLOUD_HEIGHT;
        this.yMax = Constants.BOTTOM + Constants.CLOUD_HEIGHT;
        for (let i = 0; i < 10; i++) {
            let xRand = Math.floor(Math.random() * (this.xMax - this.xMin) + this.xMin);
            let yRand = Math.floor(Math.random() * (this.yMax - this.yMin) + this.yMin);
            this.clouds.push([{ 'left': xRand }, { 'right': yRand }]);
        }
        for (let i = 0; i < this.clouds.length; i++) {
            this.validCloud(this.clouds[i], i)
            this.clouds.left = this.clouds[i][0].left;
            this.clouds.right = this.clouds[i][1].right;
            console.log(this.clouds.left, this.clouds.right)
        }
        
    }

    gravityUpdate(e) {
        
        if(this.counter == 0) {
            this.setState((state, props) => ({ y: state.y - state.gravity }));
            this.cloudCollision();
        }
        else {
            if (this.counter == 150) 
                this.setState((state, props) => ({ gravity: state.gravity*-1 }));
            else if (this.counter == 1)
                this.setState((state, props) => ({ gravity: Constants.GRAVITY }));
            this.setState((state, props) => ({ y: state.y - state.gravity*2 }));
            for (let cloud of this.clouds) { 
                cloud[1].right--;
                if(cloud[1].right < Constants.BOTTOM)
                    cloud[1].right = window.innerHeight + Constants.CLOUD_HEIGHT;  
            }
            this.counter--;
        }
        this.gameOver();
        this.ceillingCollide();
    }

    gameOver() {
        if (this.state.y <= Constants.BOTTOM)
            this.setState((state, props) => ({ gravity: 0 }));
    }

    ceillingCollide() {
        if (this.state.y >= Constants.TOP) {
            this.setState((state, props) => ({ gravity: 0, y: Constants.TOP }));
        }
    }

    cloudCollision() {
        for (let i = 0; i < this.clouds.length; i++) {
            if (this.state.x >= this.clouds[i][0].left - Constants.BALL_RADIUS && this.state.x <= this.clouds[i][0].left + Constants.CLOUD_WIDTH && this.state.y >= this.clouds[i][1].right - Constants.CLOUD_HEIGHT && this.state.y <= this.clouds[i][1].right + Constants.CLOUD_HEIGHT) {
                this.counter = 150;
                this.updateCloud(this.clouds[i]);
                this.validCloud(this.clouds[i], i);
            }
        }
    }

    validCloud(cloud, i) {
        while(!this.checkAvailable(cloud, i)) {
            this.updateCloud(cloud)
        }
    }

    updateCloud(cloud) {
        cloud[0].left = Math.floor(Math.random() * (this.xMax - this.xMin) + this.xMin);
        cloud[1].right = Math.floor(Math.random() * (-100 -500) -500);
    }

    checkAvailable(cloud, i) {
        for (let j = 0; j < this.clouds.length; j++) {
            if(Math.abs(this.clouds[i][0].left - this.clouds[j][0].left) <= Constants.CLOUD_WIDTH && i != j  && Math.abs(this.clouds[i][1].right - this.clouds[j][1].right) <= Constants.CLOUD_HEIGHT)
                return false;
        }
        return true;
    }

}

export default LiveGame