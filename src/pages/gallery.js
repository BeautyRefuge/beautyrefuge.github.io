import React from 'react';
import Helmet from 'react-helmet';
import Gallery from '../components/Gallery';
import InstagramButton from '../components/InstagramButton';

export default () => (
  <div className="page-gallery" style={{ minHeight: '400px' }}>
    <Helmet
      title="Gallery - Beauty Refuge Salon - Oakbrook Terrace, IL"
      meta={[
        {
          name: 'description',
          content:
            'Photo gallery of beautiful hair styles by Beauty Refuge. ' +
            'Photos of custom hair coloring and fun hair styles.',
        },
      ]}
    />
    <h1>Photo Gallery</h1>
    <InstagramButton />
    <Gallery count="33" tag="hair" />
  </div>
);
