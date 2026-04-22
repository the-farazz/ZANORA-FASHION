import { products } from '../../../data/products';
import ProductClient from './ProductClient';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} | Premium Pakistani Fashion`,
    description: `Shop ${product.name} for women in Pakistan at ZANORA. ${product.description.substring(0, 120)}...`,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      images: [{ url: product.images[0] }],
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const numericPrice = product.price.replace(/[^\d]/g, '');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: `https://www.zanorafashion.com${product.images[0]}`,
    description: product.description,
    sku: product.sku,
    mpn: product.sku,
    brand: {
      '@type': 'Brand',
      name: 'Zanora',
    },
    offers: {
      '@type': 'Offer',
      url: `https://www.zanorafashion.com/products/${product.slug}`,
      priceCurrency: 'PKR',
      price: numericPrice,
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: product.availability === 'In Stock' 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Zanora Fashion',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductClient product={product} />
    </>
  );
}
