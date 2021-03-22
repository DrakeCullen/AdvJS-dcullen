import React, { Component } from 'react'
import * as Constants from './Constants.js';
import LiveGame from './LiveGame.js'

class Score extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p dangerouslySetInnerHTML={{ __html: "Score: " + this.props.score }} />
        );
    }

}

export default Score