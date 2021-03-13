import React, { Component } from 'react';
import HomeScreen from './HomeScreen.js'
import LiveGame from './LiveGame.js';
import * as Constants from './Constants.js';

class GameState extends React.Component {
    constructor(props) {
        super(props);
        this.state = { playing: false };
        this.startGame = this.startGame.bind(this);
    }

    render() {
        const playing = this.state.playing
        if (!playing) {
            return(<HomeScreen startGame={this.startGame}/>);
        } else {
            return (<LiveGame />);
        }
    }

    startGame() {
        this.setState({ playing: true });
        console.log(this.state.playing)
      }
}

export default GameState