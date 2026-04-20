import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/assets/D1 (01).jpg')",
          filter: "brightness(0.95)"
        }}
      />
      
      {/* Overlay for text readability if needed */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Content */}
      <div className="relative z-10 text-center text-white p-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.6em] mb-4 drop-shadow-sm"
        >
          New Collection 2026
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-[0.2em] mb-8 drop-shadow-md text-white"
        >
          Effortless. Everyday. ZANORA.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a 
            href="#collections" 
            className="inline-block px-10 py-4 border border-white text-white text-[12px] uppercase tracking-widest hover:bg-white hover:text-zanora-black transition-all duration-300 backdrop-blur-[2px]"
          >
            Shop Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
