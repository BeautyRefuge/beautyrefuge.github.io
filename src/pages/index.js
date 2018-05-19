import React from 'react';
import Link from 'gatsby-link';

import Slideshow from '../components/Slideshow';
import Expertise from '../components/Expertise';
import Reviews from '../components/Reviews';

export default () => (
  <div>
    <div className="row" style={{ marginTop: '20px' }}>
      <div className="col-md-6">
        <h2>Beauty Refuge</h2>
        <p>
          A single chair suite, with rustic boho style and a comfortable
          atmosphere.
        </p>
        <div style={{ margin: '20px 0' }}>
          Beauty Refuge Salon<br />
          1909 Meyers Rd, Suite 112<br />
          Oakbrook Terrace, IL 60181<br />
          (630) 600-8482 - texting preferred
        </div>
        <p>
          <a
            target="_blank"
            rel="noopener"
            href="https://goo.gl/maps/GiwWPgfJjNP2"
          >
            Click here for Directions
          </a>
        </p>
      </div>
      <div className="col-lg-6">
        <Slideshow />
      </div>
    </div>

    <Expertise />
    <Reviews />
  </div>
);
