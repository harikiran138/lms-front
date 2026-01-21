'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' }, // Placeholder routes
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between pointer-events-auto">
          {/* Logo */}
          <Link href="/" className="group">
            <h1 className="text-2xl font-bold tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
              HYDRA<span className="text-cyan-500">.DRONE</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-widest text-white/70 hover:text-white transition-colors relative overflow-hidden group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <button className="px-5 py-2 text-xs font-bold tracking-widest text-black bg-cyan-400 hover:bg-cyan-300 transition-colors uppercase rounded-sm">
                Pre-Order
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col gap-6"
          >
             {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-widest text-white/80 hover:text-cyan-400 transition-colors border-b border-white/10 pb-4"
              >
                {link.name}
              </Link>
            ))}
             <button className="w-full py-4 text-sm font-bold tracking-widest text-black bg-cyan-400 hover:bg-cyan-300 transition-colors uppercase mt-4">
                Pre-Order Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
