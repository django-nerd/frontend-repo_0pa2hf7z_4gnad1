import React from "react";

const FinalCTA = () => {
  return (
    <section id="book" className="py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Ready to lift conversions?
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          Book a short call. We’ll map the fastest path to impact for your product.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#book" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 text-sm font-medium px-5 py-3 shadow-sm hover:bg-white/90">
            Book a demo
          </a>
          <a href="#approach" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white text-sm font-medium px-5 py-3 shadow-sm hover:bg-white/20 border border-white/10">
            See our approach
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
