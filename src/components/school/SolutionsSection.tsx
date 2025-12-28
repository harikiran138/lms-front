'use client';

import { GlassCard } from '@/ui/GlassCard';
import { ArrowRight, CheckCircle2, Layers, Zap, Shield } from 'lucide-react';
import { LiquidGlass } from '@/ui/LiquidGlass'; // Importing wrapper if needed, or just using card

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
           <h2 className="font-serif text-4xl md:text-5xl text-school-text mb-6">Innovative Solutions</h2>
           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             Beyond traditional academics, we leverage cutting-edge technology to enhance the learning experience.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <GlassCard key={index} delay={index * 0.1} className="hover:bg-white/40 border-white/50">
               <div className="w-14 h-14 bg-gradient-to-br from-school-accent to-school-primary rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                  <sol.icon size={28} />
               </div>
               <h3 className="font-serif text-2xl mb-4 text-school-text">{sol.title}</h3>
               <p className="text-gray-700 mb-6 leading-relaxed">
                 {sol.description}
               </p>
               <ul className="mb-6 space-y-2">
                 {[1,2,3].map((_, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-school-accent mr-2" />
                        Feature benefit or highlight
                    </li>
                 ))}
               </ul>
               <button className="text-school-text font-semibold flex items-center hover:text-school-accent transition-colors">
                 Explore Solution <ArrowRight size={16} className="ml-2" />
               </button>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
