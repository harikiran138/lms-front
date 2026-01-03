'use client';
import Link from 'next/link';

export default function UnifiedContent() {
  return (
    <section className="relative w-full min-h-screen py-20 overflow-hidden" id="home">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Section (Home) */}
        <div className="text-left mb-80 pt-32">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Empowering Minds, <span className="text-school-primary drop-shadow-sm">Inspiring Futures</span>
          </h1>
          <p className="text-base md:text-lg text-gray-800 font-medium mb-8 max-w-2xl leading-relaxed">
            Welcome to St. Ignatius College School. Get ready for another year of learning and growing together. We're excited to have you here!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#about" 
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm md:text-base"
            >
              About School
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-full font-bold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div className="text-left mb-80" id="about">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold mb-6">
            About Our School
          </h2>
          <p className="text-base md:text-lg text-gray-800 font-medium max-w-4xl leading-relaxed mb-6">
            St. Ignatius College School is dedicated to providing exceptional education and fostering a nurturing environment where every student can thrive. Our commitment to academic excellence, character development, and community engagement sets us apart.
          </p>
          <p className="text-base md:text-lg text-gray-800 font-medium max-w-4xl leading-relaxed">
            With state-of-the-art facilities, experienced faculty, and a comprehensive curriculum, we prepare students for success in an ever-changing world.
          </p>
        </div>

        {/* Student Services Section */}
        <div className="text-left mb-40" id="services">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold mb-6">
            Student Services
          </h2>
          <p className="text-base md:text-lg text-gray-800 font-medium max-w-4xl leading-relaxed mb-8">
            We provide comprehensive support services including academic counseling, career guidance, health and wellness programs, and extracurricular activities. Our dedicated staff ensures every student receives the support they need to succeed.
          </p>
        </div>

      </div>
    </section>
  );
}
