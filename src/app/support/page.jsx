import React from 'react';
import { Truck, RefreshCcw, ShieldCheck, HelpCircle, FileText } from 'lucide-react';
import Link from 'next/link';

const SupportHub = () => {
  const cards = [
    {
      title: 'Shipping Policy',
      desc: 'Delivery timelines, charges, and tracking info.',
      icon: Truck,
      href: '/support/shipping'
    },
    {
      title: 'Returns & Exchange',
      desc: '7-day hassle-free exchange policy.',
      icon: RefreshCcw,
      href: '/support/returns'
    },
    {
      title: 'FAQs',
      desc: 'Quick answers to common questions.',
      icon: HelpCircle,
      href: '/support/faq'
    },
    {
      title: 'Privacy Policy',
      desc: 'Our commitment to protecting your data.',
      icon: ShieldCheck,
      href: '/support/privacy'
    },
    {
      title: 'Terms & Conditions',
      desc: 'Store rules and user responsibilities.',
      icon: FileText,
      href: '/support/terms'
    }
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-extralight tracking-widest uppercase">Welcome to Zanora Support</h2>
        <p className="text-[14px] font-light leading-relaxed opacity-60 max-w-2xl">
          At Zanora, your satisfaction is our priority. Whether you have a question about your order, need help with sizing, or want to track your parcel, our support team is here to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, idx) => (
          <Link 
            key={idx} 
            href={card.href}
            className="group p-8 border border-black/5 bg-zanora-cream/30 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
          >
            <card.icon size={32} strokeWidth={1} className="mb-6 text-zanora-brown" />
            <h3 className="text-[13px] uppercase tracking-widest font-bold mb-2">{card.title}</h3>
            <p className="text-[12px] font-light opacity-50 leading-relaxed">{card.desc}</p>
          </Link>
        ))}
      </div>

      <div className="pt-12 border-t border-black/5">
        <h3 className="text-[14px] uppercase tracking-widest font-bold mb-6 text-center">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold opacity-40 mb-2">WhatsApp</h4>
            <p className="text-[14px] font-light">03112264613</p>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold opacity-40 mb-2">Email</h4>
            <p className="text-[14px] font-light">fashionzanora@gmail.com</p>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold opacity-40 mb-2">Support Hours</h4>
            <p className="text-[14px] font-light">10 AM – 8 PM (Mon–Sat)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportHub;
