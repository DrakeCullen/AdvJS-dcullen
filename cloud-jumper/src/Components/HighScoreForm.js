import React, { Component } from 'react';
import * as Constants from './Constants.js';
import scoresJSON from './Data/highScores.json';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class HighScoreForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="game-area" style={{ width: Constants.WIDTH, height: Constants.HEIGHT }}>
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
                        <button type="submit" className="btn btn-success mb-2 ml-2 btn-md" onClick={this.props.homeScreen}>Submit</button>
                    </form>
                </div></div>
        );
    }


    handleSubmit = (event) => {
        event.preventDefault()
        scoresJSON[4].name = event.target[0].value;
        console.log(event.target[0].value)
        console.log(scoresJSON[3].name)
    }
}

export default HighScoreForm