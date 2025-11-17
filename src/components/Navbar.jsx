import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600" />
          <span className="font-semibold tracking-tight text-slate-900">Noveo</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#approach" className="hover:text-slate-900">Approach</a>
          <a href="#programs" className="hover:text-slate-900">Programs</a>
          <a href="#why" className="hover:text-slate-900">Why Noveo</a>
          <a href="#testimonials" className="hover:text-slate-900">Results</a>
        </nav>
        <a href="#book" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white text-sm font-medium px-4 py-2 shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">Book a demo</a>
      </div>
    </header>
  );
};

export default Navbar;
