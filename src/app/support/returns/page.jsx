import React from 'react';

const ReturnsPolicy = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-extralight tracking-widest uppercase">Returns & Exchange</h2>
        <div className="h-px w-12 bg-zanora-brown opacity-40"></div>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">Exchange Policy</h3>
          <p className="text-[14px] font-light opacity-70 leading-relaxed">
            Customer satisfaction is our priority. We aim to deliver premium quality, but if there is any issue with your order, we offer an exchange within **7 days** of delivery.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">Valid Reasons for Exchange</h3>
          <ul className="space-y-3 text-[14px] font-light opacity-70 leading-relaxed list-disc pl-5">
            <li>Defective or damaged product received.</li>
            <li>Incorrect item sent by Zanora.</li>
            <li>Size issues (where applicable).</li>
          </ul>
        </section>

        <section className="space-y-4 border-l-2 border-zanora-brown/20 pl-6 py-2">
          <h3 className="text-[14px] uppercase tracking-widest font-bold text-zanora-brown">Important: No Refund Policy</h3>
          <p className="text-[14px] font-light opacity-70 leading-relaxed italic">
            Please note that we currently only offer exchanges. We do not have a refund policy.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">Conditions for Exchange</h3>
          <ul className="space-y-3 text-[14px] font-light opacity-70 leading-relaxed list-disc pl-5">
            <li>The product must be unused and in its original packaging.</li>
            <li>All tags must be intact.</li>
            <li>Change of mind is not covered under the exchange policy.</li>
            <li>Slight color variation due to studio lighting is not considered a defect.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-[14px] uppercase tracking-widest font-bold">How to Initiate an Exchange</h3>
          <p className="text-[14px] font-light opacity-70 leading-relaxed">
            Contact us on WhatsApp with your Order ID and pictures of the product. Our team will review your request and guide you through the next steps within 24–48 hours.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ReturnsPolicy;
