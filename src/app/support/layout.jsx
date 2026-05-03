'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Truck, 
  RefreshCcw, 
  FileText, 
  HelpCircle, 
  ChevronRight 
} from 'lucide-react';

const SupportLayout = ({ children }) => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Help Center', href: '/support', icon: HelpCircle },
    { name: 'Shipping Policy', href: '/support/shipping', icon: Truck },
    { name: 'Returns & Exchange', href: '/support/returns', icon: RefreshCcw },
    { name: 'Privacy Policy', href: '/support/privacy', icon: ShieldCheck },
    { name: 'Terms & Conditions', href: '/support/terms', icon: FileText },
    { name: 'FAQs', href: '/support/faq', icon: HelpCircle },
  ];

  return (
    <div className="pt-32 pb-20 px-6 md:px-20 bg-zanora-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 space-y-8">
            <div className="space-y-2">
              <h1 className="text-2xl font-extralight tracking-widest-plus uppercase">Customer Care</h1>
              <div className="h-px w-20 bg-zanora-brown opacity-40"></div>
            </div>

            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                
                return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className={`group flex items-center justify-between p-4 transition-all duration-300 border-l-2 ${
                      isActive 
                        ? 'border-zanora-brown bg-white/50 text-zanora-black' 
                        : 'border-transparent text-zanora-black/40 hover:text-zanora-black hover:bg-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} strokeWidth={1} />
                      <span className="text-[12px] uppercase tracking-widest font-medium">{item.name}</span>
                    </div>
                    <ChevronRight 
                      size={14} 
                      className={`transition-transform duration-300 ${isActive ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} 
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="p-6 bg-zanora-black text-white space-y-4">
              <h4 className="text-[11px] uppercase tracking-widest font-bold">Need Direct Help?</h4>
              <p className="text-[12px] font-light opacity-70 leading-relaxed">
                Our support team is available Mon-Sat, 10 AM - 8 PM.
              </p>
              <a 
                href="https://wa.me/923112264613" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-3 bg-white text-zanora-black text-center text-[10px] uppercase tracking-widest font-bold hover:bg-zanora-brown hover:text-white transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </aside>

          {/* Content Area */}
          <main className="w-full lg:w-3/4 bg-white p-8 md:p-16 shadow-sm border border-black/5 min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key={pathname}
            >
              {children}
            </motion.div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default SupportLayout;
