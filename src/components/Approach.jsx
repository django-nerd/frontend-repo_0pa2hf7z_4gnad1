import React from "react";

const Approach = () => {
  const steps = [
    {
      title: "Discovery sprint",
      desc: "We map opportunities, align on KPIs, and design the leanest path to value.",
    },
    {
      title: "Design x Build",
      desc: "In parallel, we prototype, validate, and ship production-ready experiences.",
    },
    {
      title: "Run the loop",
      desc: "Measure, learn, and iterate weekly with embedded analytics and AI ops.",
    },
  ];

  return (
    <section id="approach" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            A compound system built for speed
          </h2>
          <p className="mt-4 text-slate-600">
            A cross-functional pod augmented by automation. Clear priorities. Weekly cadence. Real outcomes.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl bg-white border border-slate-200 p-6">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 mb-4" />
              <div className="font-medium text-slate-900">{s.title}</div>
              <div className="text-sm text-slate-600 mt-1">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
