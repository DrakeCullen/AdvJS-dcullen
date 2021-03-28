import React, { Component } from 'react';
import * as Constants from './Constants.js';
import Coin from './Coin.js';
import scoresJSON from './Data/highScores.json';

class ScoreBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="game-area text-center" style={{ width: Constants.WIDTH, height: Constants.HEIGHT}}>
                <h1 className="leader-logo mt-3">Leaderboard:</h1>
                <ul className="list-unstyled mt-3">
                    {this.getScores()}
                </ul>
                <button type="button" className="btn btn-primary mt-2 btn-lg" onClick={this.props.homeScreen}>Back</button>
            </div>
        );
    }

    getScores() {
        let scores = [];
        for (let key in scoresJSON) {
            scores.push(<li className="leader-text mt-3" key={scoresJSON[key].name + scoresJSON[key].score}>{scoresJSON[key].name}: {scoresJSON[key].score}</li>)
        }
        return scores;
    }
}

export default ScoreBoard