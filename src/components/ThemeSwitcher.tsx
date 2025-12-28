'use client';

import { useState, useEffect } from 'react';
import { Palette, ArrowLeftRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const themes = [
  { id: 'custom-elegance', name: 'Original Elegance', colors: ['#EBE2C8', '#7A6F9B'] },
  { id: 'warm-dark', name: 'Warm Dark Glass', colors: ['#8A4F3D', '#2C1814'] },
  { id: 'orange-sunset', name: 'Orange Sunset', colors: ['#F97316', '#FFF7ED'] },
  { id: 'iphone-pastel', name: 'iPhone Pastel', colors: ['#60A5FA', '#F472B6'] },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('custom-elegance');
  
  const [customColors, setCustomColors] = useState({
    primary: '#7A6F9B',
    secondary: '#EBE2C8',
    accent: '#9BB2CD',
    text: '#1F2937'
  });

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

  const handleCustomColorChange = (key: string, value: string) => {
    const newColors = { ...customColors, [key]: value };
    setCustomColors(newColors);
    
    // Apply immediately
    document.documentElement.style.setProperty(`--school-${key}`, value);
    
    // Update gradient dynamically based on new colors
    if (currentTheme === 'custom-builder') {
        document.documentElement.style.setProperty('--bg-gradient', `linear-gradient(-45deg, ${newColors.secondary}, ${newColors.accent}, ${newColors.primary})`);
    }
  };

  const activateCustomMode = () => {
    setTheme('custom-builder');
    // Apply current input values
    Object.entries(customColors).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--school-${key}`, value);
    });
    document.documentElement.style.setProperty('--bg-gradient', `linear-gradient(-45deg, ${customColors.secondary}, ${customColors.accent}, ${customColors.primary})`);
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
            <h3 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-widest">Preset Themes</h3>
            <div className="space-y-2 mb-6">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setTheme(theme.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all ${
                    currentTheme === theme.id 
                      ? 'bg-gradient-to-r from-school-primary to-school-accent text-white shadow-lg ring-2 ring-offset-2 ring-school-primary/30' 
                      : 'hover:bg-black/5 text-gray-700'
                  }`}
                >
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: theme.colors[0] }} />
                    <div className="w-6 h-6 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: theme.colors[1] }} />
                  </div>
                  <span className="text-sm font-semibold">{theme.name}</span>
                </button>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-5">
                 <h3 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-widest flex items-center justify-between">
                    <span>Custom Builder</span>
                    {currentTheme === 'custom-builder' && <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />}
                 </h3>
                 
                 <div className="space-y-4">
                    {/* Primary Color */}
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-600 block">Primary Color</label>
                        <div className="flex space-x-2">
                            <input 
                                type="color" 
                                value={customColors.primary}
                                onChange={(e) => handleCustomColorChange('primary', e.target.value)}
                                className="w-10 h-10 rounded-lg cursor-pointer border-0 p-0"
                            />
                            <input 
                                type="text"
                                value={customColors.primary}
                                onChange={(e) => handleCustomColorChange('primary', e.target.value)}
                                className="flex-1 bg-white/50 border border-gray-200 rounded-lg px-3 text-sm font-mono text-gray-600 focus:outline-none focus:ring-2 focus:ring-school-primary/50"
                            />
                        </div>
                    </div>

                    {/* Secondary Color */}
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-600 block">Secondary / Background</label>
                        <div className="flex space-x-2">
                            <input 
                                type="color" 
                                value={customColors.secondary}
                                onChange={(e) => handleCustomColorChange('secondary', e.target.value)}
                                className="w-10 h-10 rounded-lg cursor-pointer border-0 p-0"
                            />
                            <input 
                                type="text"
                                value={customColors.secondary}
                                onChange={(e) => handleCustomColorChange('secondary', e.target.value)}
                                className="flex-1 bg-white/50 border border-gray-200 rounded-lg px-3 text-sm font-mono text-gray-600 focus:outline-none focus:ring-2 focus:ring-school-primary/50"
                            />
                        </div>
                    </div>

                    {/* Accent Color */}
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-600 block">Accent Color</label>
                        <div className="flex space-x-2">
                            <input 
                                type="color" 
                                value={customColors.accent}
                                onChange={(e) => handleCustomColorChange('accent', e.target.value)}
                                className="w-10 h-10 rounded-lg cursor-pointer border-0 p-0"
                            />
                            <input 
                                type="text"
                                value={customColors.accent}
                                onChange={(e) => handleCustomColorChange('accent', e.target.value)}
                                className="flex-1 bg-white/50 border border-gray-200 rounded-lg px-3 text-sm font-mono text-gray-600 focus:outline-none focus:ring-2 focus:ring-school-primary/50"
                            />
                        </div>
                    </div>

                    <button 
                        onClick={activateCustomMode}
                        className={`w-full py-3 rounded-xl font-bold text-sm transition-all mt-4 ${
                            currentTheme === 'custom-builder'
                            ? 'bg-gray-900 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        {currentTheme === 'custom-builder' ? 'Active & Editing' : 'Activate Custom Theme'}
                    </button>
                 </div>
            </div>
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
