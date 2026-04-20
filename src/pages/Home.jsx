import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import Reviews from '../components/Reviews';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Reviews />
    </>
  );
};

export default Home;
