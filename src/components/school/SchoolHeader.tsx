'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
];

export default function SchoolHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          
          {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-school-text hover:text-school-accent px-3 py-2 rounded-md text-sm font-bold transition-colors uppercase tracking-widest"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center absolute right-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-school-text hover:text-school-accent p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-black/80 backdrop-blur-md border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-school-text/80 hover:text-school-accent block px-3 py-2 rounded-md text-sm font-bold uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
