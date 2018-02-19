import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

require('typeface-montserrat');
require('typeface-lato');

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Beauty Refuge - Full Service Salon - Oakbrook Terrace, IL"
      meta={[
        {
          name: 'description',
          content:
            'Hair design and color services in the Chicagoland area. Beauty Refuge is ' +
            'a full service salon that brings out the inner beauty in each and every client.',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header />
    <div className="container">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
