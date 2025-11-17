import React from "react";

const Testimonials = () => {
  const quotes = [
    {
      quote:
        "They shipped more in 6 weeks than we did the previous two quarters. Our signup-to-paid jumped 41%.",
      name: "VP Growth, B2B SaaS",
    },
    {
      quote:
        "The system and cadence changed how we work. It feels like our team leveled up overnight.",
      name: "Head of Product, Marketplace",
    },
    {
      quote:
        "The automation suite cut our manual ops by half. That alone paid for the engagement.",
      name: "COO, Fintech",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Proof, not promises
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <blockquote key={q.name} className="rounded-xl border border-slate-200 p-6 bg-slate-50">
              <p className="text-slate-700">“{q.quote}”</p>
              <footer className="mt-3 text-sm text-slate-500">{q.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
