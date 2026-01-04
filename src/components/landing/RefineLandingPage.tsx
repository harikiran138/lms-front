'use client';

import React from 'react';
import SchoolFooter from '../school/SchoolFooter';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const RefineLandingPage = () => {
  return (
    <div className="min-h-screen font-sans text-gray-900 relative selection:bg-yellow-200">
      
      {/* Background - Fixed */}
      <div 
        className="fixed inset-0 w-full h-full bg-top bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('/global_background.png')",
          backgroundSize: "contain",
          backgroundPosition: "top center",
          backgroundColor: "#fff" // Fallback
        }}
      />

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full">
        
        {/* HEADER */}
        <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold text-slate-800">C2E</span>
              <div className="h-1 w-full bg-yellow-500 rounded-full mt-1"></div>
            </div>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 uppercase tracking-wide">
              <a href="#" className="hover:text-black transition-colors">Home</a>
              <a href="#" className="hover:text-black transition-colors">About</a>
              <a href="#" className="hover:text-black transition-colors">Services</a>
            </nav>
          </div>

          <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded transition-colors">
            Institution Login
          </button>
        </header>

        {/* HERO SECTION */}
        <section className="pt-20 pb-32 px-8 max-w-7xl mx-auto min-h-[80vh] flex justify-end items-start">
          <div className="max-w-md text-right pt-10">
            <h1 className="text-6xl md:text-7xl font-oswald font-normal text-gray-900 leading-[0.9] text-right uppercase tracking-tight mb-4">
              Compliance <br />
              To Excellence
            </h1>
            
            <p className="text-red-700 font-bold text-sm tracking-wide mb-8 uppercase">
              Stand confident, stay competent, and distinguish yourself
            </p>

            <p className="text-gray-800 text-sm leading-relaxed max-w-sm ml-auto">
              Make your journey from meeting standards to setting benchmarks—where regulatory adherence transforms into academic distinction, innovation, and impact.
            </p>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section className="py-20 px-8 max-w-7xl mx-auto">
          <div className="max-w-lg">
            <h2 className="text-5xl font-oswald font-bold text-black uppercase tracking-tighter mb-2">
              ABOUT US
            </h2>
            <h3 className="text-xl text-gray-900 font-serif italic mb-4">
              Real estate law for the modern world
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed uppercase tracking-wide max-w-md text-justify">
              Arbaci & Co. is a legal office in Brooknew specializing in real estate law. With decades of experience and a personalized approach, our attorneys will help you with all aspects of your real estate deal.
            </p>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20 px-8 max-w-7xl mx-auto">
          <h2 className="text-6xl font-oswald font-bold text-black uppercase tracking-tighter mb-12">
            Services
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-10">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="contents">
                <div className="min-w-[140px] h-[300px] bg-zinc-900 rounded-3xl shadow-2xl transform transition hover:-translate-y-2 cursor-pointer border border-zinc-800"></div>
              </div>
            ))}
          </div>
        </section>

        {/* CUSTOM FOOTER (Matching Design) */}
        <footer className="bg-[#4a4a4a]/90 backdrop-blur-md text-white pt-20 pb-10 px-8 mt-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                {/* Left Column */}
                <div>
                    <h2 className="text-5xl font-bold mb-2">Jessica</h2>
                    <h2 className="text-5xl font-bold mb-6">Kowalski</h2>
                    <p className="text-xl font-medium mb-1">Entrepreneur, Stylist,</p>
                    <p className="text-xl font-medium mb-8">Speaker</p>
                    
                    <div className="flex gap-4">
                        <Instagram className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
                        <Facebook className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
                        <Twitter className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
                    </div>
                </div>

                {/* Right Column - Navigation */}
                <div className="flex flex-col gap-0">
                    {['Bio', 'Concept Store', 'Blog', 'Order My Book', 'Talks and Workshops'].map((item) => (
                        <div key={item} className="py-4 border-b border-white/40">
                             <a href="#" className="text-lg font-medium hover:text-gray-200 transition-colors">
                                {item}
                             </a>
                        </div>
                    ))}
                    <div className="mt-8">
                         <a href="#" className="text-sm text-gray-300 hover:text-white">Contact Me</a>
                    </div>
                </div>
            </div>
        </footer>

      </div>
    </div>
  );
};

export default RefineLandingPage;
