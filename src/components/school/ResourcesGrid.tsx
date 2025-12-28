import { Bus, Library, PenTool, Compass, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { GlassCard } from '@/ui/GlassCard';

const resources = [
  {
    title: 'Transportation Options for Students',
    description: 'The Toronto Catholic District School Board (TCDSB) works with the Toronto Student Transportation Group (TSTG) to provide transportation for qualifying children.',
    icon: Bus,
    href: '#',
  },
  {
    title: 'Online School Library and Databases',
    description: 'Access to academic journals, articles, and research papers is crucial for students\' academic projects and assignments. Stay updated on the latest research trends.',
    icon: Library,
    href: '#',
  },
  {
    title: 'Tools for Writing and Research Online',
    description: 'Enhance writing proficiency by refining language skills, meticulously ensuring grammatical accuracy, and meticulously detecting plagiarism through advanced online tools.',
    icon: PenTool,
    href: '#',
  },
  {
    title: 'Career Exploration and Planning Tools',
    description: 'Engage in exploration of various career options, conduct in-depth research into diverse industries, and strategically plan educational pursuits and career pathways.',
    icon: Compass,
    href: '#',
  },
];

export default function ResourcesGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-school-text mb-12">Essential Resources for Students</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <GlassCard key={resource.title} className="hover:bg-white/40 border-white/40 flex flex-col h-full">
               <div className="mb-4 text-school-accent">
                <resource.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-school-text mb-3 leading-tight">{resource.title}</h3>
              <p className="text-school-text/80 text-sm mb-6 flex-grow">{resource.description}</p>
              <Link 
                href={resource.href} 
                className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-school-text hover:text-school-accent transition-colors mt-auto"
              >
                Learn More <ArrowRight size={14} className="ml-2" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
