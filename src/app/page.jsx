import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import SEOContent from '../components/SEOContent';
import Reviews from '../components/Reviews';

export const metadata = {
  title: 'Home',
  description: 'Experience the minimal aesthetic of ZANORA. Shop our latest luxury lawn, festive, and ready-to-wear collections with worldwide shipping.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <SEOContent />
      <Reviews />
    </>
  );
}
