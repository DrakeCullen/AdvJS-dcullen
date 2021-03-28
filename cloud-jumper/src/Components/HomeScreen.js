import React, { Component } from 'react';
import * as Constants from './Constants.js';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="game-area" style={{ width: Constants.WIDTH, height: Constants.HEIGHT }}>
                <div className="text-center">
                    <button type="button" className="btn btn-success btn-lg" onClick={this.props.startGame}>Play</button>
                </div>
                <div className="text-center">
                    <button type="button" className="btn btn-info bt-md" onClick={this.props.viewLeaderboard}>View Leaderboard</button>
                </div>
            </div>
        );
    }
}

export default HomeScreen