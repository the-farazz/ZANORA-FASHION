'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Heart, Facebook, Instagram, Phone, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { addItem, toggleCart } from '../../../store/cartSlice';

const ProductClient = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [zoomLevel, setZoomLevel] = useState({ x: 0, y: 0, show: false });
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isFullZoomOpen, setIsFullZoomOpen] = useState(false);
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedImage(0);
  }, [product.id]);

  const lensSize = 150; 

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    let x = e.clientX - left;
    let y = e.clientY - top;

    x = Math.max(0, Math.min(x, width));
    y = Math.max(0, Math.min(y, height));

    const percentX = (x / width) * 100;
    const percentY = (y / height) * 100;

    setZoomLevel({
      x: x - lensSize / 2,
      y: y - lensSize / 2,
      px: percentX,
      py: percentY,
      show: true
    });
  };

  const handleMouseLeave = () => {
    setZoomLevel(prev => ({ ...prev, show: false }));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size first');
      return;
    }
    dispatch(addItem({ product, size: selectedSize, quantity }));
    dispatch(toggleCart());
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-20 bg-zanora-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 relative">
        
        {/* LEFT: GALLERY & ZOOM AREA */}
        <div className="flex flex-col md:flex-row gap-4 w-full lg:w-3/5 relative">
          
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 w-full md:w-20 overflow-x-auto md:overflow-y-auto no-scrollbar py-2 md:py-0 order-2 md:order-1">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-20 md:w-full aspect-[3/4] flex-shrink-0 overflow-hidden border transition-all ${
                  selectedImage === idx ? 'border-zanora-black' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image Viewport */}
          <div className="flex-1 relative order-1 md:order-2">
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={(e) => {
                const touch = e.touches[0];
                handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
              }}
              onMouseLeave={handleMouseLeave}
              onTouchEnd={handleMouseLeave}
              className="aspect-[3/4] relative overflow-hidden bg-white cursor-crosshair border border-black/5"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={product.images[selectedImage]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </AnimatePresence>
              
              <button 
                onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:bg-white transition-colors z-20"
              >
                <ChevronLeft size={20} strokeWidth={1} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:bg-white transition-colors z-20"
              >
                <ChevronRight size={20} strokeWidth={1} />
              </button>

              <button 
                onClick={() => setIsFullZoomOpen(true)}
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg z-20"
              >
                <Maximize2 size={18} strokeWidth={1} />
              </button>
              
              {zoomLevel.show && (
                <div 
                  style={{
                    width: `${lensSize}px`,
                    height: `${lensSize}px`,
                    left: `${zoomLevel.x}px`,
                    top: `${zoomLevel.y}px`,
                  }}
                  className="absolute border-2 border-white shadow-2xl pointer-events-none z-50 overflow-hidden rounded-sm"
                >
                  <img
                    src={product.images[selectedImage]}
                    alt="Zoom"
                    style={{
                      position: 'absolute',
                      width: `${400}%`,
                      height: `${400}%`,
                      left: `-${zoomLevel.px * 3.5}%`,
                      top: `-${zoomLevel.py * 3.5}%`,
                      maxWidth: 'none',
                    }}
                    className="lg:hidden block"
                  />
                  <div className="hidden lg:block w-full h-full bg-white/10 backdrop-blur-[1px]" />
                </div>
              )}
            </div>

            <AnimatePresence>
              {zoomLevel.show && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-[calc(100%+3rem)] top-0 w-full h-full bg-zanora-cream z-[1000] border border-black/10 pointer-events-none shadow-2xl overflow-hidden hidden lg:block"
                >
                  <img
                    src={product.images[selectedImage]}
                    alt="Zoom Preview"
                    style={{
                      position: 'absolute',
                      width: '400%',
                      height: '400%',
                      left: `-${zoomLevel.px * 3}%`,
                      top: `-${zoomLevel.py * 3}%`,
                      maxWidth: 'none',
                    }}
                    className="object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6">
          <div className="space-y-4">
            <h1 className="text-xl md:text-2xl font-light tracking-widest text-zanora-black uppercase">
              {product.name}
            </h1>
            <p className="text-lg font-normal text-zanora-brown">{product.price}</p>
            <div className="text-[11px] uppercase tracking-widest opacity-40 space-y-1">
              <p>SKU: {product.sku}</p>
              <p>Availability: <span className="text-green-600 font-medium">{product.availability}</span></p>
            </div>
          </div>

          <div className="border-t border-black/5 pt-6 space-y-6">
            <div className="space-y-2">
              <h4 className="text-[12px] uppercase tracking-widest font-bold">Product Detail</h4>
              <p className="text-[13px] font-light leading-relaxed opacity-70">
                ZANORA's {product.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-y-4 text-[12px] tracking-widest uppercase">
              <div>
                <p className="font-bold mb-1">Shirt</p>
                <p className="font-light opacity-60">{product.details.shirt}</p>
              </div>
              <div>
                <p className="font-bold mb-1">Trouser</p>
                <p className="font-light opacity-60">{product.details.trouser}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-black/5 pt-6">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-[11px] uppercase tracking-widest font-bold">Size: {selectedSize || 'Select'}</p>
                <button 
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-[10px] uppercase tracking-widest border-b border-black/40 hover:opacity-100 opacity-60 transition-opacity"
                >
                  Size Guide
                </button>
              </div>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2 text-[12px] border transition-all ${
                      selectedSize === size 
                        ? 'bg-zanora-black text-white border-zanora-black' 
                        : 'border-black/10 hover:border-black/40'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-end sm:items-center">
              <div className="space-y-3 flex-1 w-full">
                 <p className="text-[11px] uppercase tracking-widest font-bold">Quantity</p>
                 <div className="flex items-center w-32 border border-black/10 h-11 bg-white">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex-1 h-full flex items-center justify-center hover:bg-black/5 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="flex-1 text-center text-[14px]">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex-1 h-full flex items-center justify-center hover:bg-black/5 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                <button 
                  onClick={handleAddToCart}
                  className="flex-[3] sm:w-64 bg-zanora-black text-white h-11 text-[11px] uppercase tracking-widest hover:bg-zanora-brown transition-all shadow-lg"
                >
                  Add To Cart
                </button>
                <button className="flex-1 w-11 h-11 border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors focus:outline-none">
                  <Heart size={18} strokeWidth={1} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-black/5 flex items-center justify-between">
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61567419680748" target="_blank" rel="noopener noreferrer">
                <Facebook size={16} strokeWidth={1.5} className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.instagram.com/zanora.fashion.official/" target="_blank" rel="noopener noreferrer">
                <Instagram size={16} strokeWidth={1.5} className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity" />
              </a>
              <Phone size={16} strokeWidth={1.5} className="cursor-pointer opacity-60 hover:opacity-100" />
            </div>
            <p className="text-[11px] uppercase tracking-widest opacity-40 italic">
              * images for illustrative purpose
            </p>
          </div>
        </div>
      </div>

      {/* SIZE GUIDE MODAL */}
      <AnimatePresence>
        {isSizeGuideOpen && (
          <div className="fixed inset-0 z-[3000] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-zanora-cream p-8 md:p-12 max-w-2xl w-full shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsSizeGuideOpen(false)}
                className="absolute top-6 right-6 hover:opacity-60 z-10"
              >
                <X size={24} strokeWidth={1} />
              </button>
              
              <h2 className="text-xl tracking-widest-plus uppercase mb-8 border-b border-black/5 pb-4">Size Guide</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-center text-[12px] tracking-widest">
                  <thead>
                    <tr className="border-b border-black/10 uppercase">
                      <th className="py-4 font-bold">Size</th>
                      <th className="py-4 font-bold">Chest</th>
                      <th className="py-4 font-bold">Waist</th>
                      <th className="py-4 font-bold">Length</th>
                    </tr>
                  </thead>
                  <tbody className="font-light opacity-80">
                    <tr className="border-b border-black/5">
                      <td className="py-4 font-bold uppercase">Small</td>
                      <td className="py-4">19.0"</td>
                      <td className="py-4">17.0"</td>
                      <td className="py-4">38.0"</td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-4 font-bold uppercase">Medium</td>
                      <td className="py-4">20.5"</td>
                      <td className="py-4">18.5"</td>
                      <td className="py-4">39.0"</td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-4 font-bold uppercase">Large</td>
                      <td className="py-4">22.5"</td>
                      <td className="py-4">20.5"</td>
                      <td className="py-4">40.0"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FULL SCREEN ZOOM MODAL */}
      <AnimatePresence>
        {isFullZoomOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[5000] bg-white flex flex-col"
          >
            <div className="p-4 flex justify-end bg-white border-b border-black/5">
              <button 
                onClick={() => setIsFullZoomOpen(false)}
                className="p-2 flex items-center gap-2 uppercase text-[11px] tracking-widest font-bold"
              >
                Close <X size={20} strokeWidth={1} />
              </button>
            </div>
            <div className="flex-1 overflow-auto bg-white p-4 flex items-center justify-center">
              <img 
                src={product.images[selectedImage]} 
                alt="Full View" 
                className="max-w-[400%] md:max-w-none cursor-zoom-out h-auto w-full object-contain"
                onClick={() => setIsFullZoomOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductClient;
