'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, MapPin, Mail, Send } from 'lucide-react';

const CheckoutModal = ({ isOpen, onClose, onConfirm, subtotal, items }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedDetails = localStorage.getItem('zanora_customer_details');
    if (savedDetails) {
      setFormData(JSON.parse(savedDetails));
    }
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Shipping address is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem('zanora_customer_details', JSON.stringify(formData));
      onConfirm(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-zanora-cream w-full max-w-lg shadow-2xl overflow-hidden border border-black/5"
          >
            {/* Header */}
            <div className="p-8 border-b border-black/5 flex justify-between items-center bg-white/50">
              <div>
                <h2 className="text-lg tracking-widest-plus uppercase mb-1">Shipping Details</h2>
                <p className="text-[10px] uppercase tracking-widest opacity-40">Complete your order on WhatsApp</p>
              </div>
              <button onClick={onClose} className="hover:opacity-60 transition-opacity">
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-widest font-bold opacity-60 flex items-center gap-2">
                    <User size={12} /> Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Aasim Khatri"
                    className={`w-full bg-white border h-12 px-4 text-sm focus:outline-none transition-all ${
                      errors.name ? 'border-red-400' : 'border-black/10 focus:border-zanora-brown'
                    }`}
                  />
                  {errors.name && <p className="text-[10px] text-red-500 uppercase tracking-widest">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-widest font-bold opacity-60 flex items-center gap-2">
                    <Phone size={12} /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +92 3XX XXXXXXX"
                    className={`w-full bg-white border h-12 px-4 text-sm focus:outline-none transition-all ${
                      errors.phone ? 'border-red-400' : 'border-black/10 focus:border-zanora-brown'
                    }`}
                  />
                  {errors.phone && <p className="text-[10px] text-red-500 uppercase tracking-widest">{errors.phone}</p>}
                </div>

                {/* Email (Optional) */}
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-widest font-bold opacity-60 flex items-center gap-2">
                    <Mail size={12} /> Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. hello@zanora.com"
                    className="w-full bg-white border border-black/10 h-12 px-4 text-sm focus:outline-none focus:border-zanora-brown transition-all"
                  />
                </div>

                {/* Address */}
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-widest font-bold opacity-60 flex items-center gap-2">
                    <MapPin size={12} /> Shipping Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House#, Street, City, ZIP"
                    rows="3"
                    className={`w-full bg-white border p-4 text-sm focus:outline-none transition-all resize-none ${
                      errors.address ? 'border-red-400' : 'border-black/10 focus:border-zanora-brown'
                    }`}
                  />
                  {errors.address && <p className="text-[10px] text-red-500 uppercase tracking-widest">{errors.address}</p>}
                </div>
              </div>

              {/* Order Summary Preview */}
              <div className="bg-zanora-beige/30 p-4 border border-black/5 space-y-2">
                <div className="flex justify-between text-[11px] uppercase tracking-widest opacity-60">
                  <span>Items ({items.length})</span>
                  <span>{subtotal}</span>
                </div>
                <div className="flex justify-between text-[13px] font-bold uppercase tracking-widest">
                  <span>Total Amount</span>
                  <span className="text-zanora-brown">{subtotal}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-zanora-black text-white h-14 flex items-center justify-center gap-3 group hover:bg-zanora-brown transition-all duration-500 shadow-xl"
              >
                <span className="text-[12px] uppercase tracking-widest font-medium">Continue to WhatsApp</span>
                <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
