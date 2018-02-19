import React, { Component } from 'react';
import LoadingSpinner from '../LoadingSpinner';

export default class Iframe extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }
  iframeLoaded() {
    this.setState({
      loaded: true,
    });
  }
  render() {
    return (
      <div>
        {this.state.loaded === false && <LoadingSpinner />}
        <div style={{ opacity: this.state.loaded ? '1' : '0' }}>
          {React.createElement('iframe', {
            src: this.props.src,
            height: this.props.height,
            width: this.props.width,
            frameBorder: '0',
            scrolling: 'no',
            allowTransparency: 'true',
            style: {
              width: '100%',
              border: 'none',
            },
            onLoad: this.iframeLoaded.bind(this),
          })}
        </div>
      </div>
    );
  }
}
