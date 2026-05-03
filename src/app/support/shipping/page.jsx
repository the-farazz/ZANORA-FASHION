import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-extralight tracking-widest uppercase">Shipping Policy</h2>
        <div className="h-px w-12 bg-zanora-brown opacity-40"></div>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">Delivery Timelines</h3>
          <ul className="space-y-3 text-[14px] font-light opacity-70 leading-relaxed list-disc pl-5">
            <li>Orders are processed within 1–2 working days.</li>
            <li>Standard delivery time: 3–7 working days across Pakistan.</li>
            <li>Unexpected delays may occur due to weather, public holidays, or logistics issues.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">Order Confirmation</h3>
          <p className="text-[14px] font-light opacity-70 leading-relaxed">
            All orders are confirmed via call or WhatsApp before dispatch. You will receive a confirmation message once your order is processed.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">Shipping Charges</h3>
          <p className="text-[14px] font-light opacity-70 leading-relaxed">
            Standard delivery charges apply nationwide. Promotional "Free Delivery" offers may be applicable during specific campaigns.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">Payment Methods</h3>
          <ul className="space-y-3 text-[14px] font-light opacity-70 leading-relaxed list-disc pl-5">
            <li>Cash on Delivery (COD) – Available nationwide.</li>
            <li>Bank Transfer – Available upon request (contact support).</li>
          </ul>
        </section>

        <section className="p-6 bg-zanora-cream/50 border border-black/5">
          <h3 className="text-[12px] uppercase tracking-widest font-bold mb-2">Need to Track Your Order?</h3>
          <p className="text-[13px] font-light opacity-70 mb-4">
            Contact us on WhatsApp with your Order ID for real-time tracking updates.
          </p>
          <a 
            href="https://wa.me/923112264613" 
            className="text-[11px] font-bold uppercase tracking-widest text-zanora-brown border-b border-zanora-brown pb-1"
          >
            Contact Support
          </a>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;
