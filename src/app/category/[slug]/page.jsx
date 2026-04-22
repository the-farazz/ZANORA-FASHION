import React from 'react';
import { products } from '../../../data/products';
import Link from 'next/link';
import Image from 'next/image';

const categoryContent = {
  '3-piece': {
    title: '3 Piece Unstitched & Ready-to-Wear Collections',
    description: 'Explore ZANORA’s premier 3-piece collections, the pinnacle of Pakistani fashion. Our 3-piece sets include a meticulously designed shirt, a coordinated trouser, and a signature dupatta that completes your look with effortless grace. Whether you are looking for luxury chiffon for a wedding or premium lawn for everyday elegance, our 3-piece ensembles offer the perfect balance of tradition and modern style. Shop the finest ladies dresses in Pakistan and experience the luxury of complete, curated outfits designed for the modern woman.',
  },
  '2-piece': {
    title: 'Versatile 2 Piece Sets & Co-ords',
    description: 'Discover the ultimate versatility with ZANORA’s 2-piece collection. Perfect for the woman on the go, our 2-piece sets offer a contemporary take on classic Pakistani silhouettes. These sets typically feature a stylishly printed or embroidered shirt paired with matching trousers, providing a cohesive and polished look for professional environments or casual outings. Our 2-piece dresses are crafted from premium fabrics like crepe, linen, and voile, ensuring you stay comfortable while looking your best. Buy clothes online in Pakistan with confidence from our curated 2-piece range.',
  },
  '1-piece': {
    title: 'Signature 1 Piece Shirts & Kurtis',
    description: 'The foundation of a flexible wardrobe starts with ZANORA’s 1-piece collection. Our signature shirts and kurtis are designed to be styled your way. Featuring bold digital prints, intricate embroideries, and minimalist cuts, these individual pieces allow you to mix and match with your favorite accessories. Crafted from high-quality lawn and silk, our 1-piece collection represents the essence of ZANORA—simple, premium, and intentional. Ideal for those who love to create their own unique look while embracing the finest ladies dresses in Pakistan.',
  }
};

export async function generateMetadata({ params }) {
  const { slug } = params;
  const content = categoryContent[slug] || { title: 'Collections' };
  return {
    title: `${content.title} | ZANORA`,
    description: `Buy the best ${content.title} online in Pakistan. Explore our premium collection at ZANORA. ${content.description.substring(0, 100)}...`,
    alternates: {
      canonical: `/category/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return [
    { slug: '3-piece' },
    { slug: '2-piece' },
    { slug: '1-piece' },
  ];
}

export default function CategoryPage({ params }) {
  const { slug } = params;
  const content = categoryContent[slug];
  
  // Simple filtering logic (for demo, we'll just show some products or all)
  // In a real app, products would have a 'category' field.
  // Since we don't have it, we'll just show all for now or mock it.
  const filteredProducts = products.filter(p => {
      if (slug === '3-piece') return p.id === '1' || p.id === '3' || p.id === '5';
      if (slug === '2-piece') return p.id === '2' || p.id === '4';
      return p.id === '6';
  });

  if (!content) return <div>Category Not Found</div>;

  return (
    <div className="pt-32 pb-20 px-6 md:px-20 bg-zanora-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto space-y-16">
        
        {/* SEO Header */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl md:text-4xl font-extralight tracking-widest-plus uppercase text-zanora-black">
            {content.title}
          </h1>
          <p className="text-[14px] leading-relaxed font-light opacity-60">
            {content.description}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {filteredProducts.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.id} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-4 relative">
                <Image 
                  src={product.images[0]} 
                  alt={`${product.name} for women in Pakistan`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {product.availability === 'Coming Soon' && (
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[8px] uppercase tracking-widest font-bold">
                    Coming Soon
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <h3 className="text-[11px] uppercase tracking-widest font-bold group-hover:text-zanora-brown transition-colors">
                  {product.name}
                </h3>
                <p className="text-[11px] opacity-40 font-bold">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO Footer for Category */}
        <div className="pt-20 border-t border-black/5">
            <p className="text-[12px] font-light opacity-40 leading-relaxed max-w-4xl italic">
                ZANORA is dedicated to providing the most sophisticated <strong className="font-normal">ladies dresses in Pakistan</strong>. Our {slug} collection is curated to ensure that every piece meets our strict standards for quality and design. Whether you shop online or visit our partners, our commitment to excellence remains the same.
            </p>
        </div>
      </div>
    </div>
  );
}
