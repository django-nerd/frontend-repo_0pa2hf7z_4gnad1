import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Approach from "./components/Approach";
import Programs from "./components/Programs";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Approach />
        <Programs />
        <WhyChoose />
        <Testimonials />
        <FinalCTA />
      </main>
      <footer className="py-10 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Noveo</span>
          <div className="flex items-center gap-6">
            <a href="#approach" className="hover:text-slate-700">Approach</a>
            <a href="#programs" className="hover:text-slate-700">Programs</a>
            <a href="#book" className="hover:text-slate-700">Book</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
