import React from "react";

const Problem = () => {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              The problem slowing growth teams
            </h2>
            <p className="mt-6 text-slate-600 text-lg">
              Shipping high-impact work quickly is hard. Strategy drifts, designs sit in Figma, tickets pile up, and experiments never reach production.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {["Siloed functions", "Slow dev cycles", "Unclear ROI", "Underused data"].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 p-4">
                  <div className="text-sm font-medium text-slate-900">{item}</div>
                  <div className="text-sm text-slate-600 mt-1">We remove these blockers with a compound system of people + AI.</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
            <div className="text-xs font-medium text-slate-500">What you get</div>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• Weekly shipped value, not updates</li>
              <li>• Clear roadmaps tied to outcomes</li>
              <li>• Ops and automation that scale with you</li>
              <li>• Experiments from idea to live in days</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
