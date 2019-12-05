import React from 'react';
import Helmet from 'react-helmet';

import 'typeface-montserrat';
import 'typeface-lato';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../Header';
import './index.css';


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>Beauty Refuge Salon - Downers Grove, IL</title>
      <meta name="description" content="Hair design and color services in the Chicagoland area." />
    </Helmet>
    <Header />
    <div className="container">{children}</div>
  </div>
);

export default TemplateWrapper;
