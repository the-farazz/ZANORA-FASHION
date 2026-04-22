import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '../../data/blogs';

export const metadata = {
  title: 'ZANORA Blog | Fashion Tips & Minimalist Styling in Pakistan',
  description: 'Explore the ZANORA blog for the latest trends in Pakistani fashion, styling tips for luxury lawn, and insights into minimalist living.',
};

export default function BlogListPage() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-20 bg-zanora-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto space-y-16">
        
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extralight tracking-widest-plus uppercase text-zanora-black">
            The Journal
          </h1>
          <p className="text-[12px] uppercase tracking-widest opacity-40 font-bold">
            Curated insights into Pakistani fashion & lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {blogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.slug} className="group flex flex-col space-y-6">
              <div className="aspect-[16/9] overflow-hidden relative border border-black/5">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest opacity-40 font-bold">
                  <span>{blog.date}</span>
                  <span className="w-8 h-px bg-black opacity-20" />
                  <span>{blog.author}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-light tracking-wide group-hover:text-zanora-brown transition-colors">
                  {blog.title}
                </h2>
                <p className="text-[14px] font-light opacity-60 leading-relaxed line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="pt-2">
                   <span className="text-[10px] uppercase tracking-widest font-bold border-b border-black/20 pb-1 group-hover:border-zanora-brown transition-colors">Read More</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
