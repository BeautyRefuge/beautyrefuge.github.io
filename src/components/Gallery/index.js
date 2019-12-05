import React, { Component } from 'react';
import axios from 'axios';
import getPhotos from './get-photos';
import LoadingSpinner from '../LoadingSpinner';
import './index.css';

const ReactGalleryClientSideOnlyLazy = React.lazy(() =>
  import('reactive-blueimp-gallery')
)

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
    const params = {
      url: 'https://api.instagram.com/v1/users/self/media/recent',
      count: 33,
      tag: 'hair',
      cancelToken: this.source.token,
    };

    let photos = [];
    function addMorePhotos(response) {
      photos = photos.concat(response.data.photos);
      params.url = response.data.nextUrl;
      return getPhotos(params);
    }

    return getPhotos(params)
      .then(addMorePhotos)
      .then(addMorePhotos)
      .then(addMorePhotos)
      .then(response => {
        photos = photos.concat(response.data.photos);
        this.setState({
          loaded: true,
          photos,
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
        <React.Suspense fallback={<LoadingSpinner />}>
          <div className="gallery">
            <ReactGalleryClientSideOnlyLazy withControls source={this.state.photos} />
          </div>
        </React.Suspense>
      );
    } else {
      return (
        <LoadingSpinner />
      )
    }
  }
}
