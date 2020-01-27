import React from 'react';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import InstagramButton from '../components/InstagramButton';
import Reviews from '../components/Reviews';

const HomePage = () => (
  <Layout>
    <h1 class="font-heading font-light text-4xl my-6 text-coolgray lg:my-8">Beauty Refuge Salon</h1>
    <p className="mb-6 leading-relaxed lg:mb-8 lg:text-xl md:leading-loose">
      The salon is currently closed.
      <br className="hidden md:inline" /> Raquel is taking time off for maternity leave.
      Check back in the Summer of 2020.
    </p>
    <InstagramButton className="mb-6 lg:mb-8" />
    <div className="min-h-screen">
      <Gallery />
    </div>
    <Reviews />
  </Layout>
);

export default HomePage;
