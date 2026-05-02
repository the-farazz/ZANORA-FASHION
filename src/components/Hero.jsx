'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-end justify-center overflow-hidden">
      {/* Desktop Background */}
      <Image 
        src="/assets/ZanoraBanner.png" 
        alt="ZANORA Luxury Fashion Premium Collection"
        fill
        priority
        className="hidden md:block object-cover"
      />
      
      {/* Mobile Background */}
      <Image 
        src="/assets/zanoraMobile.png" 
        alt="ZANORA Luxury Fashion Premium Collection"
        fill
        priority
        className="block md:hidden object-cover"
      />
      
      {/* Subtle overlay for contrast if needed */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Content */}
      <div className="relative z-10 text-center text-white p-6 pb-24 md:pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:hidden space-y-4 mb-8"
        >
          <p className="text-[10px] uppercase tracking-[0.6em] drop-shadow-sm">
            New Collection 2026
          </p>
          <h1 className="text-2xl font-extralight tracking-[0.2em] drop-shadow-md">
            EFFORTLESS ELEGANCE
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a 
            href="#featured" 
            className="inline-block px-12 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-zanora-black transition-all duration-500"
          >
            Shop Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
