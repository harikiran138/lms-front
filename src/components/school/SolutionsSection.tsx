'use client';

import { GlassCard } from '@/ui/GlassCard';
import { ArrowRight, CheckCircle2, Layers, Zap, Shield } from 'lucide-react';
import { LiquidGlass } from '@/ui/LiquidGlass'; // Importing wrapper if needed, or just using card
import VideoBackground from './VideoBackground';

const solutions = [
  {
    title: 'Digital Learning Management',
    description: 'A comprehensive LMS tailored for modern education, supporting hybrid and remote learning environments with ease.',
    icon: Layers,
  },
  {
    title: 'Student Analytics Platform',
    description: 'Real-time insights into student performance, attendance, and engagement to drive better educational outcomes.',
    icon: Zap,
  },
  {
    title: 'Secure Campus Connect',
    description: 'Integrated security and communication tools keeping parents, students, and staff connected and safe.',
    icon: Shield,
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Video Background */}
      <VideoBackground opacity={0.5} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
           <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6" style={{ textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)' }}>Innovative Solutions</h2>
           <p className="text-lg text-white font-semibold max-w-2xl mx-auto" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
             Beyond traditional academics, we leverage cutting-edge technology to enhance the learning experience.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <GlassCard key={index} delay={index * 0.1} className="liquid-glass-strong hover:bg-white/30 border-white/50">
               <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-200 rounded-2xl flex items-center justify-center mb-6 text-gray-900 shadow-lg">
                  <sol.icon size={28} />
               </div>
               <h3 className="font-serif text-2xl mb-4 text-white font-bold">{sol.title}</h3>
               <p className="text-white font-medium mb-6 leading-relaxed">
                 {sol.description}
               </p>
               <ul className="mb-6 space-y-2">
                 {[1,2,3].map((_, i) => (
                    <li key={i} className="flex items-center text-sm text-white/90">
                        <CheckCircle2 size={16} className="text-white mr-2" />
                        Feature benefit or highlight
                    </li>
                 ))}
               </ul>
               <button className="text-white font-bold flex items-center hover:text-gray-200 transition-colors">
                 Explore Solution <ArrowRight size={16} className="ml-2" />
               </button>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
