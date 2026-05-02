import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import SEOContent from '../components/SEOContent';
import Reviews from '../components/Reviews';

export const metadata = {
  title: 'Premium Pakistani Fashion & Luxury Unstitched Collections',
  description: 'Shop ZANORA for the finest ladies dresses in Pakistan. Discover our luxury unstitched lawn, festive chiffon, and ready-to-wear collections with worldwide shipping.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <SEOContent />
      <Reviews />
    </>
  );
}
