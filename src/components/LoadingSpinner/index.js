import React, { Component } from 'react';
import { Circle } from 'better-react-spinkit';

import './index.css';

export default class LoadingSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }
  componentDidMount() {
    this.setState({
      loaded: true,
    });
  }
  render() {
    if (this.state.loaded) {
      return (
        <div className="spinner">
          <Circle color="#ed8c8c" size={50} />
        </div>
      );
    } else {
      return <div />;
    }
  }
}
