

'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Liquid Blobs */}
      {/* Background Liquid Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle white glow instead of colored blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-teal-600 uppercase bg-teal-50 rounded-full border border-teal-100">
            Reimagining Education
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
            Learn with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Liquid Simplicity
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
            Experience a fluid learning journey designed with polished aesthetics and intuitive interactions. Education, redefined.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all"
            >
              Start Learning <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold flex items-center gap-2 shadow-lg border border-gray-100 hover:border-gray-200"
            >
              <Play className="w-5 h-5 fill-current" /> Watch Demo
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <GlassCard className="relative z-10 w-full aspect-square flex flex-col items-center justify-center md:rotate-3 hover:rotate-0 transition-transform duration-500">
             {/* Mock Content */}
             <div className="w-full h-full bg-gradient-to-br from-white/40 to-white/10 rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative border border-white/50">
               <div className="absolute top-0 right-0 p-4">
                 <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xl">
                   A+
                 </div>
               </div>
               <div className="space-y-4 pt-12">
                 <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200/50"></div>
                    <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-200/50 rounded w-2/3"></div>
                        <div className="h-3 bg-gray-200/50 rounded w-1/2"></div>
                    </div>
                 </div>
                 <div className="h-32 bg-gray-100/30 rounded-xl mt-4 border border-white/20"></div>
                 <div className="h-4 bg-gray-200/50 rounded w-full"></div>
                 <div className="h-4 bg-gray-200/50 rounded w-5/6"></div>
               </div>
               <div className="mt-8">
                 <div className="w-full h-12 bg-indigo-50/50 rounded-xl flex items-center justify-center border border-indigo-100">
                    <span className="text-indigo-400 font-medium">Continue Lesson</span>
                 </div>
               </div>
             </div>
          </GlassCard>
          
          {/* Floating Elements */}
          <GlassCard className="absolute -top-12 -right-8 w-48 p-4 z-20 animate-float" delay={0.4}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xl">🎨</div>
              <div>
                <div className="text-sm font-bold text-gray-800">Visual Art</div>
                <div className="text-xs text-gray-500">2h left</div>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="absolute -bottom-8 -left-8 w-48 p-4 z-20 animate-float animation-delay-2000" delay={0.6}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-xl">🔬</div>
              <div>
                <div className="text-sm font-bold text-gray-800">Science Lab</div>
                <div className="text-xs text-gray-500">Completed</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
