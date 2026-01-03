'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from '@/ui/GlassCard';
import VideoBackground from './VideoBackground';

export default function SchoolHero() {
  return (
    <section className="relative w-full pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Video Background */}
      <VideoBackground opacity={0.5} />
      
      {/* Additional Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 -z-[5] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="md:w-1/2 order-2 md:order-1 relative z-10">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
              Empowering Minds, <span className="text-white drop-shadow-lg">Inspiring Futures</span>
            </h1>
            <p className="text-lg md:text-xl text-white font-semibold mb-8 max-w-lg leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}>
              Welcome to St. Ignatius College School. Get ready for another year of learning and growing together. We're excited to have you here!
            </p>
             <div className="flex flex-wrap gap-4">
              <Link 
                href="/school" 
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                About School
              </Link>
              <Link 
                href="/contact" 
                className="liquid-glass-strong text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Image & Floating Card */}
          <div className="md:w-1/2 order-1 md:order-2 relative">
             {/* Main Image */}
             <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
                <img 
                    src="/school_hero_extracted.png" 
                    alt="Student in hallway" 
                    className="w-full h-full object-cover" 
                />
             </div>
              
              {/* Floating Event Card */}
              <div className="absolute -bottom-10 -left-4 md:-left-12 max-w-[280px] z-20">
                  <GlassCard className="!bg-white/90 !backdrop-blur-xl border-white/60 shadow-2xl">
                    <p className="text-sm font-bold uppercase tracking-wider mb-2 text-gray-900">July 9</p>
                    <h3 className="font-serif text-xl md:text-2xl mb-4 leading-tight text-gray-900 font-bold">
                    PA Day for Elementary and Secondary Schools
                    </h3>
                    <Link href="#" className="flex items-center text-sm font-bold text-gray-900 hover:text-gray-700 transition-colors">
                    Discover Event <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </GlassCard>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

