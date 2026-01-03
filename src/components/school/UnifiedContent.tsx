'use client';
import Link from 'next/link';
import { ArrowRight, Box, Globe, ShieldCheck, Zap } from 'lucide-react';

export default function UnifiedContent() {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 overflow-hidden" id="home">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* FreightX Style Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-40">
          
          {/* Main Headline Block */}
          <div className="lg:col-span-8 bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-3xl p-10 flex flex-col justify-between min-h-[500px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-32 bg-[#FF4D00]/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-[#FF4D00]/20"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4D00]/10 text-[#FF4D00] text-sm font-bold uppercase tracking-wider mb-8 border border-[#FF4D00]/20">
                <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse"></span>
                Next Gen Logistics
              </div>
              <h1 className="font-sans text-5xl md:text-7xl font-bold text-white leading-[0.9] tracking-tight mb-6">
                MOVING <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">THE WORLD</span> <br/>
                FORWARD.
              </h1>
            </div>

            <div className="relative z-10 flex flex-wrap gap-4 mt-10">
              <Link 
                href="/contact" 
                className="bg-[#FF4D00] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ff6a2b] transition-all flex items-center gap-2 group/btn"
              >
                Get Started
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#services" 
                className="bg-zinc-900 text-white border border-zinc-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right Column Stats & Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Stat Card 1 */}
            <div className="flex-1 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-[#FF4D00]/50 transition-colors group">
              <div className="bg-zinc-800 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:bg-[#FF4D00] group-hover:text-white transition-colors">
                <Globe size={24} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">150+</h3>
              <p className="text-zinc-400 font-medium">Countries Served Globally</p>
            </div>

            {/* Stat Card 2 */}
            <div className="flex-1 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-[#FF4D00]/50 transition-colors group">
              <div className="bg-zinc-800 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:bg-[#FF4D00] group-hover:text-white transition-colors">
                <Box size={24} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
              <p className="text-zinc-400 font-medium">Real-time Tracking Support</p>
            </div>

          </div>

          {/* Bottom Banner - Features */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-6 flex items-center gap-4">
                <div className="p-3 bg-[#FF4D00]/10 rounded-xl text-[#FF4D00]">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Secure Cargo</h4>
                  <p className="text-zinc-500 text-sm">Insured & Protected</p>
                </div>
             </div>
             <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-6 flex items-center gap-4">
                <div className="p-3 bg-[#FF4D00]/10 rounded-xl text-[#FF4D00]">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Fast Delivery</h4>
                  <p className="text-zinc-500 text-sm">Optimized Routes</p>
                </div>
             </div>
             <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-6 flex items-center gap-4">
                <div className="p-3 bg-[#FF4D00]/10 rounded-xl text-[#FF4D00]">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Global Network</h4>
                  <p className="text-zinc-500 text-sm">International Reach</p>
                </div>
             </div>
          </div>

        </div>

        {/* Keeping existing sections for now, could be restyled later or removed if user wants ONLY hero */}
        {/* About Section */}
        <div className="text-center mb-40" id="about">
          <div className="inline-block p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-white/5 max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-8 uppercase tracking-widest">
              The Journey
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-6">
              We travel through digital landscapes, creating immersive experiences that defy expectations. Join us as we navigate the vast expanse of creativity.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="text-center mb-40" id="services">
          <div className="inline-block p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-white/5 max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-8 uppercase tracking-widest">
              Our Craft
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8">
              Design. Development. Interaction. We build the future of the web.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
