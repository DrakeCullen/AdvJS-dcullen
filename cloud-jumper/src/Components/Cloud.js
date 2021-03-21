import React, { Component } from 'react'
import * as Constants from './Constants.js';
import LiveGame from './LiveGame.js';
import CloudImage from './cloudImage.png';

class Cloud extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
            const cloudDivs = this.props.clouds.map((data) => <div key={data[0].left + data[1].right} style={{
                position: 'absolute',
                width: `${Constants.CLOUD_WIDTH}px`,
                height: `${Constants.CLOUD_HEIGHT}px`,
                left: `${data[0].left}px`,
                bottom: `${data[1].right}px`,
                
            }}><img class="cloud" src={window.location.origin + '/cloudImage.png'}></img></div>);

            return (
                    cloudDivs
            );
        
    }


}

export default Cloud