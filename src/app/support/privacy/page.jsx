import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-extralight tracking-widest uppercase">Privacy Policy</h2>
        <div className="h-px w-12 bg-zanora-brown opacity-40"></div>
        <p className="text-[10px] uppercase tracking-widest opacity-40 pt-2">Effective Date: 01-May-2026</p>
      </div>

      <div className="space-y-8">
        <p className="text-[14px] font-light opacity-70 leading-relaxed">
          At Zanora, we respect your privacy and are committed to protecting your personal information. This policy outlines how we handle the data you provide while using our store.
        </p>

        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">Information We Collect</h3>
          <ul className="space-y-3 text-[14px] font-light opacity-70 leading-relaxed list-disc pl-5">
            <li>Contact Details: Name, phone number, and shipping address.</li>
            <li>Order Activity: Details of the products you purchase and your browsing activity.</li>
            <li>Communication: Any details provided via email or WhatsApp support.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">How We Use Your Information</h3>
          <p className="text-[14px] font-light opacity-70 leading-relaxed">
            We use your data strictly to process and deliver your orders, contact you for confirmation, and improve our services. We ensure your data is secure and never sold or shared with third parties except for delivery purposes.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">Cookies</h3>
          <p className="text-[14px] font-light opacity-70 leading-relaxed">
            Our website may use cookies to enhance your browsing experience, remember your cart items, and provide personalized service.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">Your Rights</h3>
          <p className="text-[14px] font-light opacity-70 leading-relaxed">
            You can request to update or delete your personal data anytime by contacting our support team at <span className="font-medium">fashionzanora@gmail.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
