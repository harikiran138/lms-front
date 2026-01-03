import Link from 'next/link';
import VideoBackground from './VideoBackground';

export default function DepartmentsBanner() {
  return (
    <section className="py-20 relative overflow-hidden border-y border-white/10">
      {/* Video Background */}
      <VideoBackground opacity={0.5} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
             <h2 className="font-serif text-3xl md:text-4xl text-white font-bold leading-tight max-w-2xl" style={{ textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)' }}>
                Explore Diverse Departments Available In Our School
            </h2>
             <Link
                href="#"
                className="px-8 py-3 liquid-glass-strong text-white rounded-full text-sm font-bold hover:bg-white/30 transition-colors shadow-lg whitespace-nowrap"
            >
                Explore Services
            </Link>
        </div>
      </div>
    </section>
  );
}
