import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/cartSlice';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

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
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden flex-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Links (Left) */}
        <div className="hidden lg:flex gap-8 flex-1">
          <Link to="/category/collections" className="text-[13px] uppercase tracking-widest nav-item-underline">Collections</Link>
          <Link to="/category/new-arrivals" className="text-[13px] uppercase tracking-widest nav-item-underline">New Arrivals</Link>
        </div>

        {/* Logo (Center) */}
        <Link to="/" className="flex-[2] lg:flex-1 text-center text-xl md:text-2xl font-extralight tracking-[0.5em] uppercase">
          Z A N O R A
        </Link>

        {/* Actions (Right) */}
        <div className="flex gap-6 items-center justify-end flex-1">
          <button className="hidden sm:block">
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

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-zanora-cream z-[999] p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <a href="#" className="text-[13px] uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>Collections</a>
          <a href="#" className="text-[13px] uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</a>
          <a href="#" className="text-[13px] uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
