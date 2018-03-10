import React, { Component } from 'react';
import axios from 'axios';
import getPhotos from './get-photos';
import LoadingSpinner from '../LoadingSpinner';

let ReactGallery;
if (typeof window !== 'undefined') {
  ReactGallery = require('reactive-blueimp-gallery').default;
}

import './index.css';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      images: [],
    };
    const CancelToken = axios.CancelToken;
    this.source = CancelToken.source();
  }
  componentDidMount() {
    return getPhotos({
      url: 'https://api.instagram.com/v1/users/self/media/recent',
      count: 9,
      canelToken: this.source.token,
    })
      .then(response => {
        this.setState({
          loaded: true,
          photos: response.data.photos,
        });
      })
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err.message);
        } else {
          console.log(err);
        }
      });
  }
  componentWillUnmount() {
    this.source.cancel('component is unmounted');
  }
  render() {
    if (this.state.loaded) {
      return (
        <div className="gallery">
          <ReactGallery withControls source={this.state.photos} />
        </div>
      );
    } else {
      return (
        <div>
          <LoadingSpinner />
        </div>
      );
    }
  }
}
