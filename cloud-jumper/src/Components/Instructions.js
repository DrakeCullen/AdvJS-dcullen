import React, { Component } from 'react';
import * as Constants from './Constants.js';
import Coin from './Coin.js';
import scoresJSON from './Data/highScores.json';

class Instructions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="game-area text-center" style={{ width: Constants.WIDTH, height: Constants.HEIGHT}}>
                 <h1 className="leader-logo mt-4 text-center">Instructions:</h1>
                <h1 className="instructions mt-4"><img className="instruction" src={window.location.origin + '/cloudImage.png'}></img> Land on clouds to jump upwards. <img className="instruction" src={window.location.origin + '/cloudImage.png'}></img></h1>
                <h1 className="instructions mt-4"><img className="instruction" src={window.location.origin + '/coin.png'}></img>  Collect coins to earn points! <img className="instruction" src={window.location.origin + '/coin.png'}></img> </h1>
                <h1 className="instructions mt-4"> Hold the right arrow key to move right. <img className="instruction" src={window.location.origin + '/right.png'}></img> </h1>
                <h1 className="instructions mt-4"> Hold the left arrow key to move left. <img className="instruction" src={window.location.origin + '/left.png'}></img> </h1>
                <button type="button" className="btn btn-primary mt-4 btn-lg" onClick={this.props.homeScreen}>Back</button>
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

export default Instructions