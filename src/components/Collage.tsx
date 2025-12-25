

'use client';

import { LiquidGlass } from '../ui/LiquidGlass';
import { BookOpen, GraduationCap, Library, Users, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Collage = () => {
    const items = [
        { 
            id: 1, 
            title: 'Undergraduate Programs', 
            subtitle: 'Explore 50+ majors designed for the future.',
            size: 'col-span-1 md:col-span-2 row-span-2', 
            gradient: 'from-teal-200 to-blue-200',
            textColor: 'text-teal-900',
            icon: <GraduationCap className="w-8 h-8 text-teal-700" />
        },
        { 
            id: 2, 
            title: 'Campus Life', 
            subtitle: 'Vibrant community.',
            size: 'col-span-1 row-span-1', 
            gradient: 'from-purple-200 to-pink-200',
            textColor: 'text-purple-900',
            icon: <Users className="w-6 h-6 text-purple-700" />
        },
        { 
            id: 3, 
            title: 'Research', 
            subtitle: 'Innovating for tomorrow.',
            size: 'col-span-1 row-span-1', 
            gradient: 'from-orange-100 to-red-200',
            textColor: 'text-orange-900',
            icon: <Library className="w-6 h-6 text-orange-700" />
        },
        { 
            id: 4, 
            title: 'Scholarships', 
            subtitle: 'Financial aid for 80% of students.',
            size: 'col-span-1 md:col-span-2 row-span-1', 
            gradient: 'from-blue-200 to-cyan-200',
            textColor: 'text-blue-900',
            icon: <Award className="w-6 h-6 text-blue-700" />
        },
    ];

    return (
        <section id="education" className="py-32 relative overflow-hidden">
             {/* Decorative background element */}
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/3" />

            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-4 block"
                    >
                        Academic Excellence
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                    >
                        Teall About Our <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Education Universe</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto font-light"
                    >
                        Immerse yourself in a liquid learning environment where knowledge flows freely and barriers dissolve.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`${item.size} group`}
                        >
                            <LiquidGlass className="relative h-full transition-transform duration-500 hover:-translate-y-2">
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 transition-opacity duration-500 group-hover:opacity-60`} />
                                
                                <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                                    <div className="p-3 bg-white/40 backdrop-blur-md rounded-2xl w-fit shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-2xl font-bold mb-2 ${item.textColor} group-hover:translate-x-1 transition-transform duration-300`}>{item.title}</h3>
                                        <p className={`${item.textColor} opacity-80 font-medium`}>
                                            {item.subtitle}
                                        </p>
                                    </div>
                                    
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                         <Sparkles className={`w-5 h-5 ${item.textColor}`} />
                                    </div>
                                </div>
                            </LiquidGlass>
                        </motion.div>
                    ))}
                    
                    {/* Stats Card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="col-span-1 md:col-span-1 row-span-1"
                    >
                        <LiquidGlass className="flex flex-col items-center justify-center text-center !bg-white/60 h-full">
                             <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 mb-2">98%</div>
                             <div className="text-gray-500 font-medium">Placement Rate</div>
                        </LiquidGlass>
                    </motion.div>

                     {/* CTA Card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="col-span-1 md:col-span-1 row-span-1"
                    >
                         <div className="h-full rounded-3xl bg-gray-900 p-8 flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                             <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                             <BookOpen className="w-8 h-8 text-white mb-4" />
                             <div className="text-white text-lg font-bold mb-4">Apply for Fall 2025</div>
                             <button className="px-6 py-2 bg-white text-gray-900 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors z-10">
                                Start Application
                             </button>
                         </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Collage;
