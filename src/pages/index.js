import React from 'react';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import InstagramButton from '../components/InstagramButton';
import Reviews from '../components/Reviews';

const HomePage = () => (
  <Layout>
    <h1>Beauty Refuge Salon</h1>
    <p>The salon is currently closed. Raquel is taking time off for maternity leave.
      Check back in the Summer of 2020.</p>
    <InstagramButton />
    <Gallery />
    <Reviews />
  </Layout>
);

export default HomePage;
