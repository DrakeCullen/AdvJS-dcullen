import React, { Component } from 'react';
import HomeScreen from './HomeScreen.js'
import LiveGame from './LiveGame.js';
import ScoreBoard from './ScoreBoard.js'
import * as Constants from './Constants.js';

class GameState extends React.Component {
    constructor(props) {
        super(props);
        this.state = { playing: false, scoreboard: false };
        this.startGame = this.startGame.bind(this);
        this.homeScreen = this.homeScreen.bind(this);
        this.viewLeaderboard = this.viewLeaderboard.bind(this);
        this.gameOver = this.gameOver.bind(this);
    }

    render() {
        if (!this.state.playing && !this.state.scoreboard) {
            return(<HomeScreen startGame={this.startGame} viewLeaderboard={this.viewLeaderboard}/>);
        } else if (this.state.scoreboard) {
            return(<ScoreBoard homeScreen={this.homeScreen} />);
        } 
        else {
            return (<LiveGame restart={this.gameOver}/>);
        }
    }

    startGame() {
        this.setState({ playing: true });
    }

    viewLeaderboard() {
        this.setState({ scoreboard: true});
    }

    homeScreen() {
        this.setState({ playing:false, scoreboard: false});
    }

    gameOver() {
        this.setState((state, props) => ({ playing: false }));
    }
}

export default GameState