import React, { Component } from 'react'
import * as Constants from './Constants.js';
import LiveGame from './LiveGame.js'

class Coin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const coinDivs = this.props.coins.map((data) => <div key={data[0].left + data[1].right / data[0].left * data[1].right} style={{
            position: 'absolute',
            width: `${Constants.COIN_RADIUS}px`,
            height: `${Constants.COIN_RADIUS}px`,
            left: `${data[0].left}px`,
            bottom: `${data[1].right}px`,

        }}><img className="coin" src={window.location.origin + '/coin.png'}></img></div>);

        return (
            coinDivs
        );

    }

}

export default Coin