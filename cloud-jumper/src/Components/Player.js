import React, { Component } from 'react'
import * as Constants from './Constants.js';
import LiveGame from './LiveGame.js'

class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.direction == 'left') {
            return (
                <div style={{
                    position: 'absolute',
                    width: `${Constants.PLAYER_WIDTH}px`,
                    height: `${Constants.PLAYER_HEIGHT}px`,
                    left: `${this.props.x}px`,
                    bottom: `${this.props.y}px`
                }}>
                    <img className="player" src={window.location.origin + '/bunny-left.png'} alt="left"></img>
                </div>
            );
        }
        else {
            return (
                <div style={{
                    position: 'absolute',
                    width: `${Constants.PLAYER_WIDTH}px`,
                    height: `${Constants.PLAYER_HEIGHT}px`,
                    left: `${this.props.x}px`,
                    bottom: `${this.props.y}px`
                }}>
                    <img className="player" src={window.location.origin + '/bunny-right.png'} alt="right"></img>
                </div>
            );
        }
    }

}

export default Player