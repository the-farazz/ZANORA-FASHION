import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import Reviews from '../components/Reviews';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Premium Pakistani Fashion & Luxury Unstitched" 
        description="Experience the minimal aesthetic of ZANORA. Shop our latest luxury lawn, festive, and ready-to-wear collections with worldwide shipping."
        keywords="ZANORA Home, Luxury Fashion Pakistan, Designer Lawn 2026, Unstitched Suits"
      />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Reviews />
    </>
  );
};

export default Home;
