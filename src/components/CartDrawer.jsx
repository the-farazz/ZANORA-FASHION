import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toggleCart, removeItem, updateQuantity } from '../store/cartSlice';
import CheckoutModal from './CheckoutModal';

const CartDrawer = () => {
  const { items, isOpen } = useSelector((state) => state.cart);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const dispatch = useDispatch();

  const subtotal = items.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ''));
    return acc + price * item.quantity;
  }, 0);

  const formatPrice = (price) => `Rs. ${price.toLocaleString()}`;

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;
    setIsCheckoutModalOpen(true);
  };

  const handleFinalCheckout = (customerData) => {
    let message = "Hi ZANORA, I want to place an order:\n\n";
    
    // Order Summary
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Size: ${item.size}\n`;
      message += `   Qty: ${item.quantity}\n`;
      message += `   Price: ${item.price}\n\n`;
    });

    message += `--------------------------\n`;
    message += `*ORDER TOTAL: ${formatPrice(subtotal)}*\n`;
    message += `--------------------------\n\n`;

    // Customer Details
    message += `*SHIPPING DETAILS:*\n`;
    message += `Name: ${customerData.name}\n`;
    message += `Phone: ${customerData.phone}\n`;
    if (customerData.email) message += `Email: ${customerData.email}\n`;
    message += `Address: ${customerData.address}\n\n`;
    
    message += "Please confirm the availability. Thank you!";

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923112264613?text=${encodedMessage}`, '_blank');
    setIsCheckoutModalOpen(false);
    dispatch(toggleCart());
  };

  return (
    <>
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(toggleCart())}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[2000] cursor-pointer"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-zanora-cream z-[2001] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-black/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} strokeWidth={1} />
                <h2 className="text-sm uppercase tracking-widest-plus">Shopping Cart ({items.length})</h2>
              </div>
              <button onClick={() => dispatch(toggleCart())} className="hover:opacity-60 transition-opacity">
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center opacity-40 gap-4">
                  <ShoppingBag size={48} strokeWidth={0.5} />
                  <p className="text-[12px] uppercase tracking-widest">Your cart is empty</p>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {items.map((item, idx) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-4 group">
                      <div className="w-24 h-32 flex-shrink-0 bg-zanora-beige/30 overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="text-[12px] uppercase tracking-widest leading-tight pr-4">{item.name}</h3>
                            <button 
                              onClick={() => dispatch(removeItem({ id: item.id, size: item.size }))}
                              className="opacity-40 hover:opacity-100 transition-opacity"
                            >
                              <X size={14} />
                            </button>
                          </div>
                          <p className="text-[11px] uppercase tracking-widest opacity-60">Size: {item.size}</p>
                        </div>
                        
                        <div className="flex justify-between items-end">
                          <div className="flex items-center border border-black/5 h-8">
                            <button 
                              onClick={() => dispatch(updateQuantity({ id: item.id, size: item.size, quantity: item.quantity - 1 }))}
                              className="px-2 hover:bg-black/5 transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-3 text-[12px]">{item.quantity}</span>
                            <button 
                              onClick={() => dispatch(updateQuantity({ id: item.id, size: item.size, quantity: item.quantity + 1 }))}
                              className="px-2 hover:bg-black/5 transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <p className="text-[13px] font-normal">{item.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="p-8 bg-white/50 backdrop-blur-md border-t border-black/5">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[12px] uppercase tracking-widest opacity-60">Subtotal</span>
                  <span className="text-[16px] font-normal">{formatPrice(subtotal)}</span>
                </div>
                
                <p className="text-[11px] opacity-40 mb-6 italic">
                  Shipping and taxes calculated at checkout. WhatsApp will open with your order summary.
                </p>

                <button 
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-zanora-black text-white py-4 flex items-center justify-center gap-3 group hover:bg-zanora-brown transition-all duration-500"
                >
                  <span className="text-[12px] uppercase tracking-widest">Checkout via WhatsApp</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
    <CheckoutModal 
      isOpen={isCheckoutModalOpen}
      onClose={() => setIsCheckoutModalOpen(false)}
      onConfirm={handleFinalCheckout}
      subtotal={formatPrice(subtotal)}
      items={items}
    />
    </>
  );
};

export default CartDrawer;
