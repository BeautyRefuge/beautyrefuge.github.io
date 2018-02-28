import React, { Component } from 'react';
import axios from 'axios';
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
    return axios
      .get('https://api.instagram.com/v1/users/self/media/recent', {
        params: {
          access_token: '315310155.3a81a9f.092b90b913d34aafa72f8744cec91170',
          count: this.props.count,
        },
        cancelToken: this.source.token,
      })
      .then(response => {
        let data = response.data.data;
        const titleMaxLength = 110;

        if (this.props.tag) {
          data = data.filter(item => {
            return item.tags.indexOf(this.props.tag) !== -1;
          });
        }

        const images = data.map(item => {
          let title = item.caption.text;

          if (title.length > titleMaxLength) {
            const subString = title.substr(0, titleMaxLength - 1);
            title = subString.substr(0, subString.lastIndexOf(' ')) + '...';
          }

          const image = {
            source: item.images.standard_resolution.url,
            thumbnail: item.images.thumbnail.url,
            title,
          };
          if (item.type === 'video') {
            image.source = item.videos.standard_resolution.url;
            image.type = 'video/mp4';
          }
          return image;
        });

        this.setState({
          loaded: true,
          images,
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
          <ReactGallery withControls source={this.state.images} />
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
