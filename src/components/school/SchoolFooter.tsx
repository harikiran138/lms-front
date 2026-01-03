'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import VideoBackground from './VideoBackground';

export default function SchoolFooter() {
  return (
    <footer className="relative mt-20 border-t border-white/40 overflow-hidden">
      {/* Video Background */}
      <VideoBackground opacity={0.6} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <Link href="/school" className="font-serif text-2xl font-bold text-white mb-6 block" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}>
              St. Ignatius<br />College School
            </Link>
            <p className="text-white font-medium mb-6 leading-relaxed" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>
              Empowering minds and inspiring futures through a holistic approach to education and community building.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white hover:bg-white/40 transition-all shadow-lg">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-white" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>Quick Links</h3>
            <ul className="space-y-3">
              {['About School', 'Admissions', 'Academics', 'News & Events', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/90 font-medium hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-white" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>Resources</h3>
            <ul className="space-y-3">
              {['Student Portal', 'Parent Portal', 'Staff Directory', 'Library', 'Transportation'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/90 font-medium hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-white" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-white/90 font-medium">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>123 School Lane<br />Toronto, ON M1A 2B3</span>
              </li>
              <li className="flex items-center text-white/90 font-medium">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <span>(416) 555-0123</span>
              </li>
              <li className="flex items-center text-white/90 font-medium">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <span>info@stignatius.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
          <p className="font-medium">© {new Date().getFullYear()} St. Ignatius College School. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="font-medium hover:text-white">Privacy Policy</Link>
            <Link href="#" className="font-medium hover:text-white">Terms of Service</Link>
            <Link href="#" className="font-medium hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
