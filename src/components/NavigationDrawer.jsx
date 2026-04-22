import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, Store, Plus, Truck, HelpCircle, AlertCircle } from 'lucide-react';

const NavigationDrawer = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('WOMEN');
  const [showComingSoon, setShowComingSoon] = useState(false);

  const tabs = ['WOMEN', 'KIDS', 'MEN'];
  
  const womenCategories = [
    { name: "SUMMER LAWN '26", isBold: true },
    { name: "NEW ARRIVALS", hasSub: true },
    { name: "SUMMER SALE", color: "text-green-700", hasSub: true },
    { name: "BEST SELLERS" },
    { name: "UNSTITCHED", hasSub: true },
    { name: "READY TO WEAR", hasSub: true },
    { name: "FESTIVE" },
    { name: "MAN", hasSub: true, isComingSoon: true },
    { name: "KIDS", hasSub: true, isComingSoon: true },
    { name: "FRAGRANCE", isComingSoon: true },
    { name: "ZANORA WEST", hasSub: true },
    { name: "NOOR BY ZANORA" },
    { name: "BOTTOMS", hasSub: true },
    { name: "ACCESSORIES", hasSub: true },
    { name: "LOOKBOOK" },
    { name: "CUSTOMER REVIEWS" },
  ];

  const handleCategoryClick = (cat) => {
    if (cat.isComingSoon) {
      setShowComingSoon(true);
      setTimeout(() => setShowComingSoon(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[2000]"
          />

          {/* Drawer Container (LEFT SIDE) */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-[85%] max-w-[400px] bg-zanora-cream z-[2001] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Top Toolbar */}
            <div className="p-4 flex items-center justify-between bg-white/50 border-b border-black/5">
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1} />
              </button>
              
              <div className="flex gap-2">
                <button className="flex flex-col items-center gap-1 border border-black/10 rounded-xl p-2 min-w-[75px] bg-white hover:border-zanora-brown transition-colors group">
                  <User size={18} strokeWidth={1} className="group-hover:text-zanora-brown" />
                  <span className="text-[9px] uppercase tracking-widest font-bold">Login</span>
                </button>
                <button className="flex flex-col items-center gap-1 border border-black/10 rounded-xl p-2 min-w-[75px] bg-white hover:border-zanora-brown transition-colors group">
                  <Phone size={18} strokeWidth={1} className="group-hover:text-zanora-brown" />
                  <span className="text-[9px] uppercase tracking-widest font-bold">Contact</span>
                </button>
                <button className="flex flex-col items-center gap-1 border border-black/10 rounded-xl p-2 min-w-[75px] bg-white hover:border-zanora-brown transition-colors group">
                  <Store size={18} strokeWidth={1} className="group-hover:text-zanora-brown" />
                  <span className="text-[9px] uppercase tracking-widest font-bold">Stores</span>
                </button>
              </div>
            </div>

            {/* Main Tabs */}
            <div className="flex border-b border-black/5 bg-white">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    if (tab !== 'WOMEN') {
                      setShowComingSoon(true);
                      setTimeout(() => setShowComingSoon(false), 2000);
                    }
                  }}
                  className={`flex-1 py-5 text-[11px] tracking-widest-plus font-medium transition-all relative ${
                    activeTab === tab ? 'text-zanora-black' : 'text-gray-400'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="navTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-zanora-brown"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* List Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  {activeTab === 'WOMEN' ? (
                    <div className="flex flex-col gap-7">
                       {womenCategories.map((cat, idx) => (
                         <div 
                          key={idx} 
                          onClick={() => handleCategoryClick(cat)}
                          className="flex justify-between items-center group cursor-pointer"
                         >
                            <span className={`text-[12px] tracking-widest uppercase transition-colors group-hover:text-zanora-brown ${cat.isBold ? 'font-bold' : 'font-light'} ${cat.color || 'text-zanora-black/80'}`}>
                              {cat.name}
                            </span>
                            {cat.hasSub && <Plus size={12} className="opacity-20 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-300" />}
                         </div>
                       ))}
                    </div>
                  ) : (
                    <div className="py-20 flex flex-col items-center justify-center text-center space-y-4">
                      <Store size={40} strokeWidth={1} className="opacity-20" />
                      <p className="text-[11px] uppercase tracking-widest-plus font-bold opacity-40">Coming Soon</p>
                      <p className="text-[10px] uppercase tracking-widest opacity-30 max-w-[200px]">We are building our {activeTab} collection for you.</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sticky "Coming Soon" Toast */}
            <AnimatePresence>
              {showComingSoon && (
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  className="absolute bottom-28 left-8 right-8 bg-zanora-brown text-white py-3 px-4 rounded-lg flex items-center gap-3 shadow-2xl z-[3000]"
                >
                  <AlertCircle size={16} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Catalog coming soon!</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Links */}
            <div className="p-8 bg-white/50 border-t border-black/5 space-y-5">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-zanora-brown/10 flex items-center justify-center group-hover:bg-zanora-brown group-hover:text-white transition-colors">
                  <Truck size={14} strokeWidth={1} />
                </div>
                <span className="text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100 font-bold transition-opacity">Track Your Order</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-zanora-brown/10 flex items-center justify-center group-hover:bg-zanora-brown group-hover:text-white transition-colors">
                  <HelpCircle size={14} strokeWidth={1} />
                </div>
                <span className="text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100 font-bold transition-opacity">Help & Support</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NavigationDrawer;
