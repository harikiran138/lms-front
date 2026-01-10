'use client';

import { useState, useEffect } from 'react';
import { Palette, ArrowLeftRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';



export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('custom-elegance');
  


  useEffect(() => {
    // Check local storage or default
    const savedTheme = localStorage.getItem('school-theme') || 'custom-elegance';
    setTheme(savedTheme);
  }, []);

  const setTheme = (themeId: string) => {
    document.documentElement.setAttribute('data-theme', themeId);
    setCurrentTheme(themeId);
    localStorage.setItem('school-theme', themeId);
  };



  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-full right-0 mb-4 bg-white/90 backdrop-blur-2xl border border-white/50 p-5 rounded-3xl shadow-2xl min-w-[260px] max-h-[80vh] overflow-y-auto"
          >



          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-school-primary to-school-accent text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 ring-4 ring-white/30 backdrop-blur-md"
        title="Switch Theme"
      >
        <Palette size={28} />
      </button>
    </div>
  );
}
