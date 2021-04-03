import React, { Component } from 'react';
import * as Constants from './Constants.js';
import Coin from './Coin.js';
import instructionsJSON from './Data/instructions.json';

class Instructions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="game-area text-center" style={{ width: Constants.WIDTH, height: Constants.HEIGHT}}>
                 <h1 className="leader-logo mt-4 text-center">Instructions:</h1>
                <h1 className="instructions mt-4"><img className="instruction" src={window.location.origin + '/cloudImage.png'}></img> {instructionsJSON.clouds} <img className="instruction" src={window.location.origin + '/cloudImage.png'}></img></h1>
                <h1 className="instructions mt-4"><img className="instruction" src={window.location.origin + '/coin.png'}></img> {instructionsJSON.coins}  <img className="instruction" src={window.location.origin + '/coin.png'}></img> </h1>
                <h1 className="instructions mt-4"> {instructionsJSON.right}  <img className="instruction" src={window.location.origin + '/right.png'}></img> </h1>
                <h1 className="instructions mt-4"> {instructionsJSON.left} <img className="instruction" src={window.location.origin + '/left.png'}></img> </h1>
                <button type="button" className="btn btn-primary mt-4 btn-lg" onClick={this.props.homeScreen}>Back</button>
            </div>
        );
    }
}

export default Instructions