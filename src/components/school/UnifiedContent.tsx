'use client';
import Link from 'next/link';
import VideoBackground from './VideoBackground';

export default function UnifiedContent() {
  return (
    <section className="relative w-full min-h-screen py-20 overflow-hidden" id="home">
      {/* Single Video Background for Everything */}
      <VideoBackground opacity={0.5} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 -z-[5] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Section (Home) */}
        <div className="text-center mb-40 pt-10">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
            Empowering Minds, <span className="text-white drop-shadow-lg">Inspiring Futures</span>
          </h1>
          <p className="text-base md:text-lg text-white font-semibold mb-8 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}>
            Welcome to St. Ignatius College School. Get ready for another year of learning and growing together. We're excited to have you here!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="#about" 
              className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm md:text-base"
            >
              About School
            </Link>
            <Link 
              href="/contact" 
              className="liquid-glass-strong text-white px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div className="text-center mb-40" id="about">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-6" style={{ textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)' }}>
            About Our School
          </h2>
          <p className="text-base md:text-lg text-white font-semibold max-w-4xl mx-auto leading-relaxed mb-6" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            St. Ignatius College School is dedicated to providing exceptional education and fostering a nurturing environment where every student can thrive. Our commitment to academic excellence, character development, and community engagement sets us apart.
          </p>
          <p className="text-base md:text-lg text-white font-semibold max-w-4xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            With state-of-the-art facilities, experienced faculty, and a comprehensive curriculum, we prepare students for success in an ever-changing world.
          </p>
        </div>

        {/* Student Services Section */}
        <div className="text-center mb-20" id="services">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-6" style={{ textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)' }}>
            Student Services
          </h2>
          <p className="text-base md:text-lg text-white font-semibold max-w-4xl mx-auto leading-relaxed mb-8" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            We provide comprehensive support services including academic counseling, career guidance, health and wellness programs, and extracurricular activities. Our dedicated staff ensures every student receives the support they need to succeed.
          </p>
        </div>

      </div>
    </section>
  );
}
