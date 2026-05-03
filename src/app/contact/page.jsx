import React from 'react';
import { Mail, Phone, Clock, MapPin, Instagram } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-20 bg-zanora-cream min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h1 className="text-4xl font-extralight tracking-widest-plus uppercase text-zanora-black">Get in Touch</h1>
          <div className="h-px w-20 bg-zanora-brown mx-auto opacity-40" />
          <p className="text-[14px] font-light tracking-widest uppercase opacity-40">We are here to help you anytime</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm">
                  <Phone size={20} strokeWidth={1} className="text-zanora-brown" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">WhatsApp Support</h4>
                  <p className="text-[16px] font-light text-zanora-black">0311 2264613</p>
                  <a href="https://wa.me/923112264613" className="text-[10px] uppercase tracking-widest font-bold text-zanora-brown border-b border-zanora-brown/30 mt-2 inline-block">Start Chat</a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm">
                  <Mail size={20} strokeWidth={1} className="text-zanora-brown" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">Email Us</h4>
                  <p className="text-[16px] font-light text-zanora-black">fashionzanora@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm">
                  <Clock size={20} strokeWidth={1} className="text-zanora-brown" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">Support Hours</h4>
                  <p className="text-[16px] font-light text-zanora-black">10:00 AM – 08:00 PM</p>
                  <p className="text-[11px] opacity-40 uppercase tracking-widest mt-1">Monday – Saturday</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-black/5 space-y-6">
              <h4 className="text-[12px] uppercase tracking-widest font-bold">Follow Our Journey</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/zanora.fashion.official/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white shadow-sm hover:shadow-md transition-all group"
                >
                  <Instagram size={18} strokeWidth={1} />
                  <span className="text-[11px] uppercase tracking-widest font-medium">@zanora.fashion.official</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map/Image Placeholder */}
          <div className="bg-zanora-black/5 min-h-[400px] flex items-center justify-center relative overflow-hidden group">
            <div className="text-center space-y-4 z-10">
              <MapPin size={40} strokeWidth={1} className="mx-auto text-zanora-brown opacity-40" />
              <p className="text-[11px] uppercase tracking-widest font-bold opacity-40">Operating from Karachi, Pakistan</p>
              <p className="text-[14px] font-light italic px-10">"Bringing premium lawn to your doorstep nationwide."</p>
            </div>
            <div className="absolute inset-0 opacity-10 grayscale group-hover:opacity-20 transition-opacity">
              {/* Optional background texture or pattern */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
