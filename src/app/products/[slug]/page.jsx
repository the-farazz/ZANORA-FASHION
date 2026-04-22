import { products } from '../../../data/products';
import ProductClient from './ProductClient';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return { title: 'Product Not Found' };

  return {
    title: product.name,
    description: product.description,
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

  return <ProductClient product={product} />;
}
