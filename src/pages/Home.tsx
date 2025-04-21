import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedMenu from '../components/home/FeaturedMenu';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedMenu />
      <AboutPreview />
      <Testimonials />
    </Layout>
  );
};

export default Home;