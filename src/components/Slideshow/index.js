import React, { Component } from 'react';

let ReactGallery;
// hack for getting ReactGallery to work with SSR
if (typeof window !== 'undefined') {
  ReactGallery = require('reactive-blueimp-gallery').default;
}

import './index.css';
import frontWall from './beauty-refuge-front-wall.jpg';
import backWall from './beauty-refuge-back-wall.jpg';
import shampooStation from './beauty-refuge-shampoo-station.jpg';

const images = [
  {
    source: backWall,
  },
  {
    source: frontWall,
  },
  {
    source: shampooStation,
  },
];

export default class Slideshow extends Component {
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
        <div className="slideshow">
          <ReactGallery
            inlineCarousel
            withControls
            source={images}
            options={{ startSlideshow: false }}
          />
        </div>
      );
    } else {
      return <div />;
    }
  }
}
