import React from 'react';

const TermsConditions = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-extralight tracking-widest uppercase">Terms & Conditions</h2>
        <div className="h-px w-12 bg-zanora-brown opacity-40"></div>
      </div>

      <div className="space-y-8">
        <p className="text-[14px] font-light opacity-70 leading-relaxed">
          Welcome to Zanora. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">Orders & Availability</h3>
          <p className="text-[14px] font-light opacity-70 leading-relaxed">
            All orders placed through the website are subject to availability. We reserve the right to cancel any order if the product is out of stock or due to any other logistical reason. In such cases, you will be notified immediately.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">Pricing Policy</h3>
          <p className="text-[14px] font-light opacity-70 leading-relaxed">
            Prices for our products are subject to change without notice. While we strive for accuracy, we are not responsible for typographical errors regarding pricing or product descriptions.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">Product Representation</h3>
          <p className="text-[14px] font-light opacity-70 leading-relaxed">
            We make every effort to display the colors of our products as accurately as possible. However, actual product colors may vary slightly due to studio lighting or your device's screen settings.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">User Responsibility</h3>
          <p className="text-[14px] font-light opacity-70 leading-relaxed">
            Users are responsible for providing accurate and complete information during the checkout process. Misuse of the website, including fraudulent orders, may result in restricted access or legal action.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">Intellectual Property</h3>
          <p className="text-[14px] font-light opacity-70 leading-relaxed">
            All content on this website, including images, logos, and text, is the property of Zanora and may not be used without explicit permission.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
