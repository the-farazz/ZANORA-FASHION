import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogs } from '../../../data/blogs';
import { products } from '../../../data/products';
import { ArrowLeft, Share2 } from 'lucide-react';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return { title: 'Post Not Found' };

  return {
    title: `${blog.title} | ZANORA Journal`,
    description: blog.excerpt,
    openGraph: {
      images: [{ url: blog.image }],
    },
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Get related products
  const relatedProducts = products.filter(p => blog.relatedProducts.includes(p.id));

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-12 group"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to Journal
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="space-y-8 mb-16 text-center">
             <div className="flex justify-center items-center gap-4 text-[11px] uppercase tracking-widest opacity-40 font-bold">
                <span>{blog.date}</span>
                <span className="w-10 h-px bg-black opacity-20" />
                <span>{blog.author}</span>
             </div>
             <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-wide leading-tight text-zanora-black">
               {blog.title}
             </h1>
          </div>

          {/* Featured Image */}
          <div className="aspect-[21/9] relative mb-16 overflow-hidden border border-black/5">
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill 
              priority
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-16 relative">
            
            {/* Share Sidebar */}
            <div className="hidden lg:flex flex-col gap-8 sticky top-32 h-fit">
               <div className="flex flex-col gap-6 items-center">
                  <span className="text-[9px] uppercase tracking-[0.3em] vertical-text opacity-40 font-bold">Share</span>
                  <div className="w-px h-12 bg-black/10" />
                  <button className="hover:text-zanora-brown transition-colors opacity-60 hover:opacity-100">
                    <Share2 size={18} strokeWidth={1} />
                  </button>
               </div>
            </div>

            {/* Main Body */}
            <div className="flex-1 space-y-12">
              <div 
                className="prose prose-stone max-w-none prose-p:text-[16px] prose-p:font-light prose-p:leading-relaxed prose-p:opacity-80 prose-headings:font-light prose-headings:tracking-widest prose-headings:uppercase prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-6"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Internal Linking to Products */}
              <div className="pt-20 mt-20 border-t border-black/5">
                <div className="space-y-10">
                   <div className="space-y-2">
                     <h3 className="text-xl tracking-widest uppercase font-extralight">Featured in this Story</h3>
                     <p className="text-[11px] uppercase tracking-widest opacity-40 font-bold italic">Curated essentials for your wardrobe</p>
                   </div>

                   <div className="grid grid-cols-2 gap-8 md:gap-12">
                     {relatedProducts.map(product => (
                        <Link 
                          key={product.id} 
                          href={`/products/${product.slug}`}
                          className="group space-y-4"
                        >
                          <div className="aspect-[3/4] relative overflow-hidden bg-zanora-cream">
                            <Image 
                              src={product.images[0]} 
                              alt={product.name} 
                              fill 
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                          <div className="space-y-1 text-center">
                            <h4 className="text-[11px] uppercase tracking-widest font-bold group-hover:text-zanora-brown transition-colors">{product.name}</h4>
                            <p className="text-[11px] opacity-40 font-bold">{product.price}</p>
                          </div>
                        </Link>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
