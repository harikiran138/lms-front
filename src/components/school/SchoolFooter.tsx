'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function SchoolFooter() {
  return (
    <footer className="relative mt-20 border-t border-white/40 bg-white/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <Link href="/school" className="font-serif text-2xl font-bold text-school-text mb-6 block">
              St. Ignatius<br />College School
            </Link>
            <p className="text-gray-800 mb-6 leading-relaxed">
              Empowering minds and inspiring futures through a holistic approach to education and community building.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center text-school-text hover:bg-school-accent hover:text-white transition-all shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About School', 'Admissions', 'Academics', 'News & Events', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-school-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {['Student Portal', 'Parent Portal', 'Staff Directory', 'Library', 'Transportation'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-school-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-600">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>123 School Lane<br />Toronto, ON M1A 2B3</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <span>(416) 555-0123</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <span>info@stignatius.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} St. Ignatius College School. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-school-text">Privacy Policy</Link>
            <Link href="#" className="hover:text-school-text">Terms of Service</Link>
            <Link href="#" className="hover:text-school-text">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
