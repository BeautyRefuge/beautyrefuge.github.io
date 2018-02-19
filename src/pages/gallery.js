import React from 'react';
import Helmet from 'react-helmet';
import Gallery from '../components/Gallery';

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
    <Gallery path="tags/beautyrefugegallery/media/recent" count="50" />
  </div>
);
