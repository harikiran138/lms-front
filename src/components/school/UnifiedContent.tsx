'use client';
import Link from 'next/link';
import { Search, MapPin, Phone, Instagram, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function UnifiedContent() {
  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full p-4 md:p-6 flex items-center justify-center">
        {/* Background Image Container Removed as per user request */}
        <div className="absolute inset-0 z-0 bg-transparent" />
        
        {/* Glass Overlay Frame */}
        <div className="relative z-10 w-full h-full rounded-[3rem] border border-white/30 bg-white/5 backdrop-blur-sm flex flex-col justify-between p-8 md:p-12 overflow-hidden shadow-2xl">
           
           {/* Top Bar */}
           <div className="flex justify-between items-center text-white">
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                 <span className="text-xs">•••</span>
              </div>
              <div className="text-center">
                 <h1 className="font-serif text-xl tracking-widest uppercase">AKINA</h1>
                 <p className="text-[10px] tracking-[0.2em] opacity-70 uppercase">Hotel</p>
              </div>
              <button className="px-5 py-2 rounded-full border border-white/30 text-xs hover:bg-white/10 transition-colors uppercase tracking-wider">
                 Find tips
              </button>
           </div>

           {/* Center Content */}
           <div className="text-center">
              <h2 className="text-4xl md:text-6xl text-white font-medium mb-6 drop-shadow-md">Trip to the Alps</h2>
              <button className="px-8 py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-sm hover:bg-white/30 transition-colors border border-white/20">
                 view trip selection
              </button>
           </div>

           {/* Bottom Bar */}
           <div className="flex flex-wrap gap-4 justify-between items-center bg-black/20 backdrop-blur-md rounded-full px-6 py-4 border border-white/10 text-white text-xs md:text-sm">
              <div className="flex items-center gap-2">
                 <Phone size={14} className="opacity-70"/> <span>093 556 788</span>
              </div>
              <div className="hidden md:flex gap-6 opacity-80">
                 <span className="flex items-center gap-1"><Instagram size={14}/> akina_trips</span>
                 <span className="flex items-center gap-1"><MapPin size={14}/> akina.ss.trips</span>
              </div>
              <div className="flex items-center gap-3">
                 <span>view more about</span>
                 <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                 <span className="uppercase font-serif tracking-widest">AKINA</span>
              </div>
           </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="bg-transparent py-20 px-4 md:px-6">
        <h3 className="text-center text-black font-medium text-xl mb-12">About Us</h3>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
           {/* Purple Card */}
           <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="w-full md:w-1/2 h-64 md:h-full rounded-[2rem] overflow-hidden">
                 <img src="/akina-about.png" alt="Grenoble" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 text-white p-4">
                 <h4 className="text-2xl font-medium mb-4 leading-tight">Our hotel is located<br/>in Grenoble</h4>
                 <p className="text-[11px] leading-relaxed opacity-90 mb-6">
                    It is a cozy and comfortable place, combining modernity with a peaceful atmosphere. The rooms have everything you need for a pleasant stay, and the windows offer views of the mountains and the city.
                 </p>
                 <div className="text-[10px] opacity-60">
                    There are many different interesting things to do among these mountains.
                 </div>
              </div>
           </div>

           {/* Right Info Block */}
           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-12 flex flex-col justify-center shadow-sm">
              <p className="text-gray-900 text-lg font-medium mb-8 leading-snug">
                 You can view more information about our hotel and all its details on our page.
              </p>
              <button className="px-8 py-3 border border-gray-300 rounded-full self-start hover:bg-gray-50 transition-colors text-sm font-medium">
                 View more
              </button>
           </div>
        </div>
      </section>

      {/* 3. TRIPS SECTION */}
      <section className="bg-transparent pb-20 px-4 md:px-6">
         <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row text-white shadow-2xl border border-white/10">
            {/* Left Content */}
            <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center relative">
               <h3 className="text-3xl font-medium mb-8 text-center md:text-left">Team or private trips to<br/>the mountains</h3>
               <p className="text-[11px] leading-relaxed opacity-70 max-w-md mb-12 text-center md:text-left">
                  A trip to the mountains with the team is a great way to relax, build stronger connections, and create lasting memories. Shared hikes, snowy views, and cozy evenings by the fire bring everyone closer together.
               </p>
               
               <div className="flex gap-4 justify-center md:justify-start">
                  <button className="px-6 py-2 rounded-full border border-white/20 text-xs hover:bg-white/10 transition-colors">With team</button>
                  <button className="px-6 py-2 rounded-full border border-white/20 text-xs hover:bg-white/10 transition-colors">Private</button>
               </div>

               {/* Button "View price" floating outside in the white area design match */}
               <div className="absolute top-1/2 -left-64 hidden xl:block w-48 text-black">
                   <p className="text-sm font-bold mb-4">You can book a trip on the website or at our hotel</p>
                   <button className="px-6 py-2 border border-gray-300 rounded-full text-xs">View price</button>
               </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 h-[500px] relative">
               <img src="/akina-hiker.png" alt="Hiker" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#2B0F0F]/20"></div>
            </div>
         </div>
      </section>

      {/* 4. CTA BOTTOM (Simplified as Spacer or just removed if no longer needed) */}
      
    </div>
  );
}
