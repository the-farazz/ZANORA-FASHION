import React from 'react';

const reviews = [
  { id: 1, text: "The quality of the fabric is exceptional. ZANORA truly understands effortless elegance.", author: "Ayesha K." },
  { id: 2, text: "Minimal design with a premium feel. My daily go-to for work and evening wear.", author: "Zainab R." },
  { id: 3, text: "Fast delivery and the packaging was beautiful. Highly recommend the 3-piece sets.", author: "Sarah M." },
];

const Reviews = () => {
  return (
    <section className="py-24 bg-zanora-beige/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-xl font-extralight tracking-widest-plus mb-16 opacity-80 italic">Trusted by ZANORA Women</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((rev) => (
            <div key={rev.id} className="flex flex-col items-center">
              <p className="text-[15px] font-light leading-relaxed mb-6 italic opacity-90">
                "{rev.text}"
              </p>
              <span className="text-[11px] uppercase tracking-[0.3em] font-light text-zanora-brown">
                — {rev.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
