'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from '@/ui/GlassCard';

export default function SchoolHero() {
  return (
    <section className="relative w-full pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pastel-purple rounded-full blur-3xl opacity-50 mix-blend-multiply filter animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-pastel-yellow rounded-full blur-3xl opacity-50 mix-blend-multiply filter animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pastel-pink rounded-full blur-3xl opacity-50 mix-blend-multiply filter animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="md:w-1/2 order-2 md:order-1 relative z-10">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-school-text leading-tight mb-6">
              Empowering Minds, <span className="text-school-primary">Inspiring Futures</span>
            </h1>
            <p className="text-lg md:text-xl text-school-text/80 mb-8 max-w-lg leading-relaxed">
              Welcome to St. Ignatius College School. Get ready for another year of learning and growing together. We're excited to have you here!
            </p>
             <div className="flex flex-wrap gap-4">
              <Link 
                href="/school" 
                className="bg-school-primary text-white px-8 py-4 rounded-full font-medium hover:bg-school-accent transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                About School
              </Link>
              <Link 
                href="/contact" 
                className="bg-white/60 backdrop-blur-sm border border-white/80 text-school-text px-8 py-4 rounded-full font-medium hover:bg-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
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
                  <GlassCard className="!bg-white/80 !backdrop-blur-xl border-white/40">
                    <p className="text-sm font-medium uppercase tracking-wider mb-2 text-school-accent">July 9</p>
                    <h3 className="font-serif text-xl md:text-2xl mb-4 leading-tight text-school-text">
                    PA Day for Elementary and Secondary Schools
                    </h3>
                    <Link href="#" className="flex items-center text-sm font-medium hover:text-school-accent transition-colors">
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

