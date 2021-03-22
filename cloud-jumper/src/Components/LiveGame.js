import React, { Component } from 'react'
import * as Constants from './Constants.js';
import Player from './Player.js';
import Cloud from './Cloud.js';
import Coin from './Coin.js';
import Score from './Score.js';

class LiveGame extends React.Component {
    constructor(props) {
        super(props);
        this.clouds = [];
        this.coins = [];
        this.counter = 0;
        this.state = { x: Constants.X_START, y: Constants.Y_START, gravity: Constants.GRAVITY, score: 0, direction: 'left', cloudMove: 0 };
        this.gravityUpdate = this.gravityUpdate.bind(this);
        this.initialize();
    }

    render() {
        return (
            <div className="game-area" style={{ width: Constants.WIDTH, height: Constants.HEIGHT }} onClick={this.mousePos}>
                <Cloud clouds={this.clouds}/>
                <Coin coins={this.coins}/>
                <Player x={this.state.x} y={this.state.y} direction={this.state.direction}/>
                <Score score={this.state.score} />
            </div>
        );
    }
    componentDidMount() {
        this.gameInterval = setInterval(this.gravityUpdate, 10);
        document.onkeydown = this.onKeyDown;
        document.coinCollision = this.coinCollision();
    }

    componentWillUnmount() {
        clearInterval(this.gameInterval);
    }

    onKeyDown = (e) => {
        if (e.keyCode == '37' && this.state.x > Constants.LEFT) 
            this.setState((state, props) => ({ x: state.x - 10, direction: 'left' }));
        else if (e.keyCode == '39' && this.state.x < Constants.RIGHT - Constants.PLAYER_WIDTH) 
            this.setState((state, props) => ({ x: state.x + 10, direction: 'right' }));
    }

    initialize() {
        this.xMin = Math.ceil(window.innerWidth / 2 - Constants.WIDTH / 2);
        this.xMax = Math.floor(window.innerWidth / 2 + Constants.WIDTH / 2 - Constants.CLOUD_WIDTH);
        this.yMin = Constants.TOP - Constants.CLOUD_HEIGHT;
        this.yMax = Constants.BOTTOM + Constants.CLOUD_HEIGHT;
        this.initClouds();
        this.initCoins();
    }

    initClouds() {
        for (let i = 0; i < 7; i++) {
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

    initCoins() {
        for (let i = 0; i < 3; i++) {
            let xRand = Math.floor(Math.random() * (this.xMax - this.xMin) + this.xMin);
            let yRand = Math.floor(Math.random() * (this.yMax - this.yMin) + this.yMin);
            this.coins.push([{ 'left': xRand }, { 'right': yRand }]);
        }
        for (let i = 0; i < this.coins.length; i++) {
            this.validCloud(this.coins[i], i)
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
            if (this.counter == Constants.COUNTER) 
                this.setState((state, props) => ({ gravity: state.gravity*-1 }));
            else if (this.counter == 1)
                this.setState((state, props) => ({ gravity: Constants.GRAVITY }));
            this.moveClouds();
            this.moveCoins();
            this.setState((state, props) => ({ y: state.y - state.gravity*1.5 }));
            this.counter--;
        }
        this.coinCollision();
        this.gameOver();
        this.ceillingCollide();
    }

    moveClouds() {
        for (let cloud of this.clouds) { 
            cloud[1].right-=2;
            if(cloud[1].right <= Constants.BOTTOM)
                this.updateCloud(cloud);//window.innerHeight + Constants.CLOUD_HEIGHT;  
        }
    }

    moveCoins() {
        for (let coin of this.coins) { 
            coin[1].right-=2;
            if(coin[1].right <= Constants.BOTTOM)
                this.updateCoin(coin);
        }
    }

    gameOver() {
        if (this.state.y <= Constants.BOTTOM) {
            this.setState((state, props) => ({ gravity: 0 }));
            this.props.restart();
        }
    }

    ceillingCollide() {
        if (this.state.y >= Constants.TOP) {
            this.setState((state, props) => ({ gravity: 0, y: Constants.TOP }));
        }
    }

    cloudCollision() {
        for (let i = 0; i < this.clouds.length; i++) {
            if (this.state.x >= this.clouds[i][0].left - Constants.PLAYER_WIDTH && this.state.x <= this.clouds[i][0].left + Constants.CLOUD_WIDTH && this.state.y >= this.clouds[i][1].right - Constants.CLOUD_HEIGHT && this.state.y <= this.clouds[i][1].right + Constants.CLOUD_HEIGHT) {
                this.counter = Constants.COUNTER;
                this.updateCloud(this.clouds[i]);
                this.validCloud(this.clouds[i], i);
            }
        }
    }

    coinCollision() {
        for (let i = 0; i < this.coins.length; i++) {
            if (this.state.x >= this.coins[i][0].left - Constants.PLAYER_WIDTH && this.state.x <= this.coins[i][0].left + Constants.COIN_RADIUS && this.state.y >= this.coins[i][1].right - Constants.COIN_RADIUS && this.state.y <= this.coins[i][1].right + Constants.COIN_RADIUS) {
                this.setState((state, props) => ({ score: state.score + 10}));
                console.log(this.state.score);
                this.updateCoin(this.coins[i]);
                this.coins[i][1].right = Math.floor(Math.random() * (window.innerHeight - Constants.BOTTOM/2) + Constants.BOTTOM)
                this.validCoin(this.coins[i], i);
            }
        }
    }

    validCloud(cloud, i) {
        while(!this.checkAvailable(cloud, i)) {
            this.updateCloud(cloud)
        }
    }

    validCoin(coin, i) {
        while(!this.coinAvailable(coin, i)) {
            this.updateCoin(coin)
        }
    }

    updateCloud(cloud) {
        this.setState((state, props) => ({ cloudMove: state.cloudMove++}));
        cloud[0].left = Math.floor(Math.random() * (this.xMax - this.xMin) + this.xMin);
        cloud[1].right = window.innerHeight;//Math.floor(Math.random() * (window.innerHeight - 30) +30) * -1;//(-100 -500) -500);
    }

    updateCoin(coin) {
        this.setState((state, props) => ({ cloudMove: state.cloudMove++}));
        coin[0].left = Math.floor(Math.random() * (this.xMax - this.xMin) + this.xMin);
        coin[1].right = window.innerHeight;
    }

    checkAvailable(cloud, i) {
        for (let j = 0; j < this.clouds.length; j++) {
            if(Math.abs(this.clouds[i][0].left - this.clouds[j][0].left) <= Constants.CLOUD_WIDTH && i != j  && Math.abs(this.clouds[i][1].right - this.clouds[j][1].right) <= Constants.CLOUD_HEIGHT)
                return false;
        }
        return true;
    }

    coinAvailable(coin, i) {
        for (let j = 0; j < this.coins.length; j++) {
            if(Math.abs(this.coins[i][0].left - this.coins[j][0].left) <= Constants.COIN_RADIUS && i != j  && Math.abs(this.coins[i][1].right - this.coins[j][1].right) <= Constants.COIN_RADIUS)
                return false;
        }
        return true;
    }

}

export default LiveGame