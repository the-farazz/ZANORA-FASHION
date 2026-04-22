'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { toggleCart } from '../store/cartSlice';
import NavigationDrawer from './NavigationDrawer';
import { products } from '../data/products';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const filteredProducts = searchQuery.trim() === '' 
    ? [] 
    : products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full h-20 flex items-center z-[1000] transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-zanora-cream border-b border-black/5 h-[70px]' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 md:px-20 flex justify-between items-center">
        {/* Sidebar menu toggle button (Visible on all screens) */}
        <button 
          className="flex flex-1 items-center"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} strokeWidth={1} className="hover:text-zanora-brown transition-colors cursor-pointer" />
        </button>

        {/* Logo (Center) */}
        <Link href="/" className="flex-[2] lg:flex-1 text-center text-lg md:text-2xl font-extralight tracking-[0.2em] md:tracking-[0.5em] uppercase whitespace-nowrap">
          ZANORA
        </Link>

        {/* Actions (Right) */}
        <div className="flex gap-6 items-center justify-end flex-1">
          <button 
            className="hidden sm:block hover:opacity-70 transition-opacity"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={20} strokeWidth={1} />
          </button>
          <button 
            className="relative hover:opacity-70 transition-opacity"
            onClick={() => dispatch(toggleCart())}
          >
            <ShoppingBag size={20} strokeWidth={1} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-zanora-brown text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full animate-in zoom-in duration-300">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[2000] p-10 flex flex-col items-center justify-start"
          >
            <div className="w-full flex justify-end mb-20">
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:rotate-90 transition-transform duration-300"
              >
                <X size={32} strokeWidth={1} />
              </button>
            </div>

            <div className="w-full max-w-6xl space-y-12">
              <div className="space-y-6">
                <h2 className="text-[12px] uppercase tracking-[0.5em] opacity-40 text-center font-bold">What are you looking for?</h2>
                <div className="relative group max-w-4xl mx-auto">
                  <input 
                    type="text" 
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="SEARCH PRODUCTS..."
                    className="w-full bg-transparent border-b border-black/10 py-6 text-2xl md:text-4xl font-extralight tracking-widest focus:outline-none focus:border-zanora-brown transition-colors uppercase placeholder:text-gray-200"
                  />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2">
                    <Search size={32} strokeWidth={1} className="opacity-20 group-focus-within:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>
              
              {/* Search Results */}
              <div className="mt-12 overflow-y-auto max-h-[60vh] custom-scrollbar pb-10">
                {searchQuery.trim() !== '' && (
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {filteredProducts.map(product => (
                      <Link 
                        key={product.id} 
                        href={`/products/${product.slug}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="group flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500"
                      >
                        <div className="aspect-[3/4] overflow-hidden bg-zanora-cream relative">
                          <Image 
                            src={product.images[0]} 
                            alt={`${product.name} for women in Pakistan`}
                            fill
                            sizes="150px"
                            className="object-cover group-hover:scale-110 transition-transform duration-700" 
                          />
                        </div>
                        <div className="space-y-1 text-center">
                          <h3 className="text-[10px] uppercase tracking-widest font-bold truncate">{product.name}</h3>
                          <p className="text-[10px] opacity-40 font-bold">{product.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {searchQuery.trim() !== '' && filteredProducts.length === 0 && (
                  <div className="py-20 text-center opacity-30 italic font-light tracking-widest">
                    No results found for "{searchQuery}"
                  </div>
                )}

                {searchQuery.trim() === '' && (
                  <div className="flex flex-wrap gap-6 justify-center pt-8">
                    <span className="text-[10px] uppercase tracking-widest opacity-30">Popular:</span>
                    <button onClick={() => setSearchQuery('Lawn')} className="text-[10px] uppercase tracking-widest font-bold hover:text-zanora-brown transition-colors">Lawn '26</button>
                    <button onClick={() => setSearchQuery('Unstitched')} className="text-[10px] uppercase tracking-widest font-bold hover:text-zanora-brown transition-colors">Unstitched</button>
                    <button onClick={() => setSearchQuery('Silk')} className="text-[10px] uppercase tracking-widest font-bold hover:text-zanora-brown transition-colors">Silks</button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <NavigationDrawer 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
