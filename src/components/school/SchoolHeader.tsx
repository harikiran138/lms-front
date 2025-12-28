'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { name: 'About', href: '/school' }, // Keeping About as Home/School for now or separate? Request didn't specify About page but listed it in nav. Plan didn't include About page explicitly in the new list? checking task.md... no About page in task.md. I will point About to /school (Home) for now or maybe create a placeholder if needed. The prompts said "Services, Admissions, Academics, News & Events, Contact Us". About is missing from the explicit "implement these" list in the last prompt. I'll point it to /school for now.
  { name: 'Services', href: '/services' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Academics', href: '/academics' },
  { name: 'News & Events', href: '/news' },
  { name: 'Contact Us', href: '/contact' },
];

export default function SchoolHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/school" className="font-serif text-xl sm:text-2xl font-bold text-school-text">
              St. Ignatius<br className="sm:hidden" /> College School
            </Link>
          </div>

          {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-school-text hover:text-school-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
        <div className="md:hidden glass-nav absolute w-full border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-school-text/80 hover:text-school-accent block px-3 py-2 rounded-md text-base font-medium"
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
