import React from 'react';
import Link from 'gatsby-link';

import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Reviews from '../components/Reviews';

export default () => (
  <div>
    <div className="row" style={{ marginTop: '20px' }}>
      <div className="col-md-6">
        <h2>Beauty Refuge</h2>
        <p>
          Raquel Marie is a hair artist who loves what she does.
          She goes by <a target="_blank" rel="noopener"
            href="https://www.instagram.com/beauty.refuge/" style={{whiteSpace: 'nowrap'}}>
            Beauty Refuge</a> and is currently operating out of Salon Sophia.
        </p>
        <div style={{ margin: '20px 0' }}>​Salon Sophia<br />
          132 Ogden Avenue<br />
          Downers Grove, IL 60515<br />
          <a
            target="_blank"
            rel="noopener"
            href="https://goo.gl/maps/mCHB5TSGJsv"
          >
            Click here for Directions
          </a>
        </div>
        <p>Raquel's cell: (630) 600-8482 <br />
          * texting preferred *</p>
      </div>
      <div className="col-lg-6">
        <Hero />
      </div>
    </div>

    <Expertise />
    <Reviews />
  </div>
);
