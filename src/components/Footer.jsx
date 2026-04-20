import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 px-6 md:px-20 bg-zanora-cream border-t border-black/5">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Brand Info */}
        <div className="flex-1">
          <h2 className="text-xl tracking-widest-plus uppercase mb-4">Z A N O R A</h2>
          <p className="max-w-xs text-[13px] font-light leading-relaxed opacity-60">
            Effortless style for the modern woman. Curated elegance for your everyday life.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-16 md:gap-32">
          <div className="flex flex-col gap-4">
            <h5 className="text-[12px] uppercase tracking-widest mb-2 font-normal">Explore</h5>
            <a href="#" className="text-[13px] font-light opacity-60 hover:opacity-100 transition-opacity">Home</a>
            <a href="#" className="text-[13px] font-light opacity-60 hover:opacity-100 transition-opacity">Collections</a>
            <a href="#" className="text-[13px] font-light opacity-60 hover:opacity-100 transition-opacity">New Arrivals</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h5 className="text-[12px] uppercase tracking-widest mb-2 font-normal">Help</h5>
            <a href="#" className="text-[13px] font-light opacity-60 hover:opacity-100 transition-opacity">Contact</a>
            <a href="#" className="text-[13px] font-light opacity-60 hover:opacity-100 transition-opacity">Shipping</a>
            <a href="#" className="text-[13px] font-light opacity-60 hover:opacity-100 transition-opacity">Returns</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex-1 w-full md:max-w-xs">
          <h5 className="text-[12px] uppercase tracking-widest mb-4 font-normal">Newsletter</h5>
          <div className="flex border-b border-black/20 pb-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent text-[13px] w-full focus:outline-none font-light"
            />
            <button className="text-[11px] uppercase tracking-widest opacity-60 hover:opacity-100">Join</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-black/5 gap-4">
        <p className="text-[11px] font-light opacity-40">© 2026 ZANORA. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-[11px] uppercase tracking-widest opacity-40 hover:opacity-80">Instagram</a>
          <a href="#" className="text-[11px] uppercase tracking-widest opacity-40 hover:opacity-80">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
