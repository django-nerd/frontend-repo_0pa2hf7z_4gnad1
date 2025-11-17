import React from "react";

const Programs = () => {
  const items = [
    {
      title: "Conversion Lift",
      desc: "Rapid experiments to increase signups, sales, or activation.",
      tag: "Most popular",
    },
    {
      title: "AI Automation",
      desc: "Operational workflows that cut cycle time and cost.",
    },
    {
      title: "New Product",
      desc: "Validate and launch a new revenue line in weeks.",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Programs to match your goals
          </h2>
          <p className="mt-4 text-slate-600">
            Pick the outcome. We run the playbook end-to-end.
          </p>
        </div>
        
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-medium text-slate-900">{i.title}</div>
                  <div className="text-sm text-slate-600 mt-1">{i.desc}</div>
                </div>
                {i.tag && (
                  <span className="text-[10px] uppercase tracking-wide bg-slate-900 text-white px-2 py-1 rounded">{i.tag}</span>
                )}
              </div>
              <a href="#book" className="inline-flex mt-6 text-sm font-medium text-blue-700 hover:text-blue-800">Start now →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
