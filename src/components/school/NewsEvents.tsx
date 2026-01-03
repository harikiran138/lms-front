import { GlassCard } from '@/ui/GlassCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import VideoBackground from './VideoBackground';

const news = [
  {
    date: 'July 9',
    title: 'PA Day for Elementary and Secondary Schools',
    image: '/school_hero_extracted.png', // Reusing hero image as it appears to be the same event context
    href: '#',
  },
  {
    title: "TCDSB's Unsung Heroes | June 2023",
    image: '/news_heroes.png',
    href: '#',
  },
  {
    title: 'Asian Canadian Heritage Month',
    image: '/news_heritage.png',
    href: '#',
  },
];

export default function NewsEvents() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Video Background */}
      <VideoBackground opacity={0.5} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-12" style={{ textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)' }}>Stay Informed and Engaged</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <GlassCard key={index} className="!p-0 overflow-hidden flex flex-col group border-white/50 liquid-glass-strong">
              <div className="h-48 overflow-hidden relative">
                 <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 {item.date && (
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg text-gray-900">
                        {item.date}
                    </div>
                 )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow bg-white/20 backdrop-blur-md">
                  <h3 className="font-serif text-xl text-white font-bold mb-4 leading-tight group-hover:text-gray-100 transition-colors">
                    {item.title}
                  </h3>
                  
                  <Link 
                    href={item.href} 
                    className="inline-flex items-center text-sm font-bold text-white hover:text-gray-200 transition-colors mt-auto"
                  >
                   Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
