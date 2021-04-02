import React, { Component } from 'react';
import HomeScreen from './HomeScreen.js'
import LiveGame from './LiveGame.js';
import ScoreBoard from './ScoreBoard.js'
import * as Constants from './Constants.js';
import HighScoreForm from './HighScoreForm.js'
import scoresJSON from './Data/highScores.json';
import Instructions from './Instructions.js';

class GameState extends React.Component {
    constructor(props) {
        super(props);
        this.state = { playing: false, scoreboard: false, newHighScore: false, instructions: false };
        this.scores = scoresJSON;
        this.playerScore = 0;
        this.startGame = this.startGame.bind(this);
        this.homeScreen = this.homeScreen.bind(this);
        this.viewLeaderboard = this.viewLeaderboard.bind(this);
        this.viewInstructions = this.viewInstructions.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.highScore = this.highScore.bind(this);
        this.newRecord = this.newRecord.bind(this);
    }

    render() {
        if (!this.state.playing && !this.state.scoreboard && !this.state.newHighScore &&!this.state.instructions) {
            return(<HomeScreen startGame={this.startGame} viewLeaderboard={this.viewLeaderboard} viewInstructions={this.viewInstructions}/>);
        } else if (this.state.scoreboard) {
            return(<ScoreBoard homeScreen={this.homeScreen} scoresJSON={this.scores}/>);
        } 
        else if (this.state.instructions) {
            return(<Instructions homeScreen={this.homeScreen}/>);
        } 
        else if (!this.state.newHighScore){
            return (<LiveGame restart={this.gameOver} newRecord={this.newRecord} scores={this.scores}/>);
        }
        else {
            return (this.highScore());
        }
    }

    startGame() {
        this.setState({ playing: true });
    }

    viewLeaderboard() {
        this.setState({ scoreboard: true});
    }

    viewInstructions() {
        this.setState({ instructions: true});
    }

    homeScreen() {
        this.setState({ playing:false, scoreboard: false, newHighScore: false, instructions: false});
    }

    gameOver() {
        this.setState((state, props) => ({ playing: false }));
    }

    newRecord() {
        this.setState((state, props) => ({ playing: false, newHighScore: true }));
    }

    highScore() {
        return <div className="game-area" style={{ width: Constants.WIDTH, height: Constants.HEIGHT }}>
                <h1 className="leader-logo mt-4 text-center">New High Score!</h1>
                <img className="coin-high-score mt-4" src={window.location.origin + '/coin.png'}></img>
                <h3 className="leader-small mt-4 text-center">Enter your name:</h3>
                <div className="container mt-5" style={{ width: Constants.WIDTH / 2, height: Constants.HEIGHT / 2 }}>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input
                                placeholder="John Doe"
                                type="text"
                                name="username"
                                ref={node => (this.inputNode = node)}
                            />
                        </label>
                        <button type="submit" className="btn btn-success mb-2 ml-2 btn-md">Submit</button>
                    </form>
                </div></div>
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.scores[4].name = event.target[0].value;
        this.scores.sort((a,b) => {
            return b.score - a.score
        });
        this.setState({ newHighScore: false});
    }
}

export default GameState