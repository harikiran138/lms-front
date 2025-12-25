'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Bell, LayoutGrid, Activity, ChevronDown, ArrowUpRight } from 'lucide-react';

const DashboardPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations matching the reference */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          
          {/* Mobile App Preview Side - Mindo Style */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="w-full lg:w-[380px] bg-white/20 backdrop-blur-3xl rounded-[3rem] p-6 shadow-2xl border border-white/40"
            >
             <motion.div 
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8 }}
               className="relative w-[300px] h-[600px] bg-[#F5F3FF] rounded-[40px] shadow-2xl overflow-hidden border-4 border-white"
             >
                {/* Status Bar Mock */}
                <div className="h-12 px-6 flex items-center justify-between text-gray-800 text-xs font-medium">
                  <span>09:41</span>
                  <div className="flex gap-2">
                     <div className="w-4 h-4 bg-gray-800 rounded-full opacity-20" />
                     <div className="w-4 h-4 bg-gray-800 rounded-full opacity-20" />
                  </div>
                </div>

                {/* Mobile Content */}
                <div className="p-6 space-y-6">
                   <div className="flex justify-between items-center">
                     <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" alt="Profile" className="w-full h-full object-cover" />
                     </div>
                     <div className="flex gap-3">
                       <div className="p-2 bg-white rounded-full shadow-sm"><Bell className="w-4 h-4 text-gray-600" /></div>
                       <div className="p-2 bg-white rounded-full shadow-sm"><LayoutGrid className="w-4 h-4 text-gray-600" /></div>
                     </div>
                   </div>

                   <div>
                     <h3 className="text-2xl text-gray-500 font-light">Hello, <span className="text-gray-900 font-semibold">Sara</span> 👋</h3>
                     <p className="text-2xl text-gray-500 font-light">How are you <span className="text-gray-900 font-semibold">feeling today?</span></p>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-1 bg-white/60 p-4 rounded-3xl backdrop-blur-md">
                        <div className="text-xs text-gray-500 mb-2 flex justify-between">Goal Progress <Activity className="w-3 h-3" /></div>
                        <div className="text-2xl font-bold text-gray-800 mb-1">65%</div>
                        <div className="text-[10px] text-gray-400">Standard Status</div>
                      </div>
                      <div className="col-span-1 h-32 relative">
                         {/* Abstract Brain Element */}
                         <div className="absolute inset-0 bg-purple-300 rounded-3xl opacity-50 blur-sm animate-pulse" />
                         <div className="relative z-10 bg-gradient-to-br from-purple-400 to-indigo-400 p-4 rounded-3xl h-full flex items-end text-white">
                           <span className="font-medium text-sm">Focus Mode</span>
                         </div>
                      </div>
                   </div>

                   <div className="bg-gradient-to-br from-purple-200 to-indigo-200 p-6 rounded-3xl">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="text-sm font-medium text-gray-700">Stress Level</div>
                          <div className="text-2xl font-bold text-gray-900">Low</div>
                        </div>
                        <div className="text-gray-600 font-bold">70%</div>
                      </div>
                      <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                        <div className="h-full w-[70%] bg-white/80 rounded-full" />
                      </div>
                   </div>
                </div>
             </motion.div>
          </motion.div>

          {/* Desktop Dashboard Side */}
          <div className="md:col-span-8 lg:col-span-9 space-y-8">
             <div className="flex justify-between items-center mb-12">
               <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">M</div>
                 <span className="font-bold text-xl text-gray-800">Mindo</span>
               </div>
               
               <div className="hidden md:flex bg-white/50 backdrop-blur-md rounded-full p-1 border border-white/40">
                 {['Dashboard', 'Psychiatrist', 'Session', 'Progress'].map((tab, i) => (
                   <button key={tab} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>
                     {tab}
                   </button>
                 ))}
               </div>
             </div>

             <div className="mb-12">
               <h2 className="text-4xl md:text-6xl text-gray-800 font-light mb-4">
                 Hello, <span className="font-bold">Sara</span> 👋 How are <br/>you <span className="font-bold">looking today?</span>
               </h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main 3D Brain Viz Area */}
                <div className="md:col-span-2 bg-white/30 backdrop-blur-xl border border-white/40 rounded-[40px] p-8 relative overflow-hidden min-h-[300px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-indigo-100/50" />
                    {/* Placeholder for 3D element */}
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10 w-64 h-64 bg-gradient-to-tr from-purple-300 via-purple-400 to-indigo-400 rounded-full blur-md opacity-80 mix-blend-multiply" 
                    />
                    <motion.div 
                      animate={{ scale: [1.05, 1, 1.05], rotate: [0, -2, 2, 0] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute z-10 w-60 h-60 bg-gradient-to-bl from-pink-300 via-purple-300 to-blue-300 rounded-full blur-md opacity-80 mix-blend-multiply left-1/3" 
                    />
                    
                    <div className="absolute top-8 left-8 bg-white/60 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-white/50">
                       <div className="flex items-center justify-between gap-4 mb-2">
                         <span className="text-sm font-medium text-gray-600">Goal Progress</span>
                         <Activity className="w-4 h-4 text-gray-400" />
                       </div>
                       <div className="text-2xl font-bold text-gray-800">65%</div>
                    </div>

                    <div className="absolute bottom-8 right-8 bg-white/60 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-white/50">
                       <div className="flex items-center justify-between gap-4 mb-2">
                         <span className="text-sm font-medium text-gray-600">Stress Level</span>
                         <div className="w-2 h-2 rounded-full bg-green-400" />
                       </div>
                       <div className="text-2xl font-bold text-gray-800">Low</div>
                    </div>
                </div>

                {/* Right Side Stats */}
                <div className="space-y-6">
                   <GlassCard className="!rounded-[32px] !bg-white/40">
                      <div className="flex justify-between items-start mb-2">
                         <div className="text-sm text-gray-500">Status</div>
                         <ArrowUpRight className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="text-4xl font-bold text-gray-800 mb-1">70%</div>
                      <div className="text-sm text-gray-400">Stress Level</div>
                   </GlassCard>
                   
                   <GlassCard className="!rounded-[32px] !bg-white/40">
                      <div className="flex justify-between items-start mb-2">
                         <div className="text-sm text-gray-500">Focus Power</div>
                         <Activity className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="text-4xl font-bold text-gray-800 mb-1 flex items-baseline gap-1">42 <span className="text-lg font-normal text-gray-500">mins</span></div>
                      <div className="text-sm text-gray-400">Standard</div>
                      
                      <div className="mt-4 h-12 flex items-end gap-1">
                        {[40, 60, 30, 80, 50, 70, 45].map((h, i) => (
                           <div key={i} className="flex-1 bg-purple-300/30 rounded-t-sm" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                   </GlassCard>
                </div>
             </div>

             {/* Bottom Lists */}
             <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-[40px] p-8">
                  <div className="flex justify-between items-center mb-6">
                     <h3 className="text-xl font-bold text-gray-800">Reports</h3>
                     <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors">
                        Filters <ChevronDown className="w-4 h-4" />
                     </button>
                  </div>
                  
                  <div className="space-y-4">
                     {[
                        { title: 'Cognitive Therapy', doctor: 'Dr. Jasmin', date: '17-08-25', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=50&h=50' },
                        { title: 'Stress Management', doctor: 'Dr. Jonshon', date: '15-08-25', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=50&h=50' },
                        { title: 'Sleep Therapy', doctor: 'Dr. Samira', date: '12-08-25', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=50&h=50' }
                     ].map((item) => (
                        <div key={item.title} className="flex items-center justify-between p-4 bg-white/40 rounded-2xl hover:bg-white/60 transition-colors cursor-pointer group">
                           <div>
                              <div className="font-bold text-gray-800 mb-1">{item.title}</div>
                              <div className="text-xs text-gray-500">{item.date}</div>
                           </div>
                           <div className="flex items-center gap-3">
                              <img src={item.img} alt={item.doctor} className="w-8 h-8 rounded-full object-cover" />
                              <span className="text-sm font-medium text-gray-700">{item.doctor}</span>
                           </div>
                           <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <ArrowUpRight className="w-4 h-4 text-gray-500" />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="flex flex-col gap-6">
                  <GlassCard className="!bg-white flex-1 !rounded-[40px] flex flex-col justify-center">
                     <div className="text-lg font-medium text-gray-600 mb-1">Remaining</div>
                     <div className="text-5xl font-light text-gray-900 mb-2">6<span className="text-2xl font-normal text-gray-400">hr</span> 52<span className="text-2xl font-normal text-gray-400">min</span></div>
                     <div className="text-sm text-gray-400">Upcoming Session Estimation</div>
                  </GlassCard>
                
                  <div className="bg-white rounded-[40px] p-4 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                           <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100" alt="Dr" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-gray-800">Dr. Jams Alther</span>
                      </div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
