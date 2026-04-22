import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = "ZANORA";
  const fullTitle = `${title} | ${siteTitle}`;
  const siteUrl = "https://www.zanorafashion.com";
  const defaultDescription = "Premium Pakistani Fashion & Luxury Unstitched Collections. Effortless style for the modern woman.";
  const ogImage = image || "/assets/og-image.jpg";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description || defaultDescription} />
      <meta name='keywords' content={keywords || "ZANORA, Fashion, Pakistan, Luxury, Lawn"} />

      {/* Open Graph / Facebook tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      
      {/* Canonical Link */l[ks-0 wsk]}
      <link rel="canonical" href={url ? `${siteUrl}${url}` : siteUrl} />
    </Helmet>
  );
};

export default SEO;
