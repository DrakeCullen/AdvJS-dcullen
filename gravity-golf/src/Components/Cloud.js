import React, { Component } from 'react'
import * as Constants from './Constants.js';
import LiveGame from './LiveGame.js'

class Cloud extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
            const cloudDivs = this.props.clouds.map((data) => <div key={data[0].left + data[1].right} style={{
                position: 'absolute',
                backgroundColor: '#C1BEBA',
                borderRadius: '25px',
                width: Constants.CLOUD_WIDTH,
                height: Constants.CLOUD_HEIGHT,
                left: data[0].left,
                bottom: data[1].right
            }}></div>);

            return (
                    cloudDivs
            );
        
    }


}

export default Cloud