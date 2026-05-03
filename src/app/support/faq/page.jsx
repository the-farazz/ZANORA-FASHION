'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-[13px] uppercase tracking-widest transition-colors ${isOpen ? 'text-zanora-brown font-bold' : 'text-zanora-black font-medium'}`}>
          {question}
        </span>
        {isOpen ? <Minus size={16} strokeWidth={1} /> : <Plus size={16} strokeWidth={1} />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-6' : 'max-h-0'}`}>
        <p className="text-[14px] font-light opacity-60 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const faqs = [
    {
      question: "How can I place an order?",
      answer: "Simply browse your favorite outfit, click “Add to Cart” and proceed to checkout. Fill in your delivery details and choose your payment method to confirm."
    },
    {
      question: "How do I track my order?",
      answer: "You can contact our support team on WhatsApp with your Order ID for real-time tracking updates."
    },
    {
      question: "Do you offer refunds?",
      answer: "Currently, we only offer exchanges (no refunds). If there is a quality issue, we will happily exchange the item for you within 7 days."
    },
    {
      question: "What if I receive a damaged item?",
      answer: "Please contact us within 24 hours of delivery with pictures of the damaged item for a quick resolution."
    },
    {
      question: "Are there any shipping charges?",
      answer: "Standard delivery charges apply nationwide. However, we often run 'Free Home Delivery' campaigns on specific collections."
    },
    {
      question: "Can I change my order after placing it?",
      answer: "If the order hasn't been dispatched, you can contact us to make changes. Once dispatched, no modifications can be made."
    }
  ];

  return (
    <div className="space-y-10">
      <div className="space-y-2 text-center pb-8 border-b border-black/5">
        <h2 className="text-3xl font-extralight tracking-widest uppercase">Frequently Asked Questions</h2>
        <p className="text-[12px] uppercase tracking-widest opacity-40">Quick answers to common queries</p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="mt-20 p-10 bg-zanora-cream/50 text-center space-y-6">
        <h3 className="text-[14px] uppercase tracking-widest font-bold">Still have questions?</h3>
        <p className="text-[13px] font-light opacity-60">
          Our customer support team is ready to help you with anything you need.
        </p>
        <a 
          href="https://wa.me/923112264613" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-zanora-black text-white text-[11px] uppercase tracking-widest font-bold hover:bg-zanora-brown transition-colors"
        >
          Contact on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default FAQPage;
