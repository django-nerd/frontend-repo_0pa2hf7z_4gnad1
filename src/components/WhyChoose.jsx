import React from "react";

const WhyChoose = () => {
  const points = [
    {
      title: "Senior-only talent",
      desc: "Hands-on principals who ship. No handoffs, no fluff.",
    },
    {
      title: "AI-native ops",
      desc: "Automation and data wired in from day one.",
    },
    {
      title: "Obsessed with outcomes",
      desc: "We tie our work to your KPIs and share the numbers.",
    },
    {
      title: "Speed with quality",
      desc: "Design systems and codebases built to last.",
    },
  ];

  return (
    <section id="why" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Why teams choose Noveo
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl bg-white border border-slate-200 p-6">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 mb-4" />
              <div className="font-medium text-slate-900">{p.title}</div>
              <div className="text-sm text-slate-600 mt-1">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
