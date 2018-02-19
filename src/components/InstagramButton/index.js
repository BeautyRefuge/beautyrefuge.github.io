import React, { Component } from 'react';

import './index.css';
import Instagram from './instagram';

export default class Expertise extends Component {
  render() {
    return (
      <a
        target="_blank"
        rel="noopener"
        className="btn btn-primary btn-instagram"
        href="https://www.instagram.com/beauty.refuge/"
      >
        <Instagram />
        <span>Follow on Instagram</span>
      </a>
    );
  }
}
