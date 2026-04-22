import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '../data/products';

const FeaturedProducts = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-zanora-cream">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-2xl font-extralight tracking-widest-plus">Featured Arrivals</h2>
          <div className="h-[1px] w-20 bg-zanora-brown mt-2"></div>
        </div>
        <a href="#" className="text-[12px] uppercase tracking-widest nav-item-underline pb-1 opacity-70 hover:opacity-100">View All</a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {products.map((product) => (
          <Link href={`/products/${product.slug}`} key={product.id} className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden mb-4 relative">
              <Image 
                src={product.images[0]} 
                alt={`${product.name} for women in Pakistan`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-white/80 py-1 px-3 text-[10px] tracking-widest uppercase backdrop-blur-sm">
                New
              </div>
            </div>
            <h4 className="text-[13px] tracking-widest uppercase mb-1">{product.name}</h4>
            <p className="text-[14px] text-zanora-brown font-light">{product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
