import React, { Component } from 'react';
import * as Constants from './Constants.js';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="game-area text-center" style={{ width: Constants.WIDTH, height: Constants.HEIGHT }}>
                <h1 className="title mt-3">Cloud Jumper</h1>
                <h2 className="leader-small mt-3">Created By:</h2>
                <h2 className="leader-small mt-2">Drake Cullen</h2>
                <img className="bunny-logo mt-4" src={window.location.origin + '/bunny-right.png'}></img>
                <div>
                    <button type="button" className="btn btn-success btn-lg mt-4" onClick={this.props.startGame}>Play</button>
                </div>
                <div>
                    <button type="button" className="btn btn-primary bt-md mt-3" onClick={this.props.viewLeaderboard}>View Leaderboard</button>
                </div>
                <div>
                    <button type="button" className="btn btn-info bt-md mt-3" onClick={this.props.viewInstructions}>Instructions</button>
                </div>
            </div>
        );
    }
}

export default HomeScreen