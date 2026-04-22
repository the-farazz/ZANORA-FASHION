import React from 'react';
import Link from 'next/link';

const categories = [
  { id: 1, title: '3 Piece', image: '/assets/D2 (05).jpg', link: '/category/3-piece' },
  { id: 2, title: '2 Piece', image: '/assets/D3 (05).jpg', link: '/category/2-piece' },
  { id: 3, title: '1 Piece', image: '/assets/D4 (01).jpg', link: '/category/1-piece' },
];

const Categories = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-zanora-cream" id="collections">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px] md:h-[700px]">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="group relative h-full overflow-hidden cursor-pointer"
          >
            {/* Image with Zoom */}
            <img 
              src={cat.image} 
              alt={`ZANORA ${cat.title} Collection`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-300" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-extralight tracking-widest-plus uppercase drop-shadow-sm">
                {cat.title}
              </h3>
            </div>

            {/* Link Placeholder */}
            <Link href={cat.link} className="absolute inset-0 z-10" aria-label={`View ${cat.title}`}></Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
