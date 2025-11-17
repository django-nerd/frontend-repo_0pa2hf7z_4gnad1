import React from "react";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-white pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-1/2 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-10 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Trusted by growth teams building faster with AI
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Ship winning products in weeks, not quarters.
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              Noveo blends elite product talent with AI automation to validate, design, and build high-converting experiences at startup speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#book" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 text-sm font-medium px-5 py-3 shadow-sm hover:bg-white/90">
                Book a demo
              </a>
              <a href="#approach" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white text-sm font-medium px-5 py-3 shadow-sm hover:bg-white/20 border border-white/10">
                See how it works
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="text-3xl font-semibold">+38%</div>
              <div className="text-white/70 text-sm max-w-[14rem]">Average conversion lift in the first 90 days across our last 12 launches.</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-white/10 bg-slate-900/50">
              <iframe
                src="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
                className="w-full h-full"
                frameBorder="0"
                title="Interactive 3D"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden sm:block bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/10 backdrop-blur">
              Real-time preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
