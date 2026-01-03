'use client';
import VideoBackground from './VideoBackground';
import { GlassCard } from '@/ui/GlassCard';
import { BookOpen, Users, Calendar, Award } from 'lucide-react';

const resources = [
  {
    title: 'Library Resources',
    description: 'Access our extensive digital and physical library collection',
    icon: BookOpen,
  },
  {
    title: 'Student Portal',
    description: 'Your gateway to grades, schedules, and school updates',
    icon: Users,
  },
  {
    title: 'Events Calendar',
    description: 'Stay updated with all school events and activities',
    icon: Calendar,
  },
  {
    title: 'Achievements',
    description: 'Celebrate student accomplishments and milestones',
    icon: Award,
  },
];

export default function ResourcesGrid() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Video Background */}
      <VideoBackground opacity={0.5} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4" style={{ textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)' }}>
            Essential Resources
          </h2>
          <p className="text-lg text-white font-semibold max-w-2xl mx-auto" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Everything you need for a successful academic journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <GlassCard key={index} className="liquid-glass-strong hover:bg-white/30 border-white/50 text-center">
              <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center mb-4 mx-auto text-gray-900 shadow-lg">
                <resource.icon size={32} />
              </div>
              <h3 className="font-serif text-xl mb-3 text-white font-bold">{resource.title}</h3>
              <p className="text-white/90 font-medium text-sm leading-relaxed">
                {resource.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
