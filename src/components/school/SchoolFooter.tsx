'use client';
import { Search } from 'lucide-react';

interface SchoolFooterProps {
  transparent?: boolean;
}

export default function SchoolFooter({ transparent = false }: SchoolFooterProps) {
  return (
    <footer className="relative w-full">
       {!transparent && (
         <>
           <div className="absolute inset-0 h-[80vh]">
              <img src="/akina-footer.png" alt="Village" className="w-full h-full object-cover" />
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#7B7BC4]/30 to-transparent"></div>
         </>
       )}
       
       <div className={`relative z-10 w-full flex flex-col justify-end px-6 ${transparent ? 'pt-20 pb-10' : 'h-[80vh] pb-20'}`}>
           <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-end justify-between gap-10">
              
              {/* Navigation Links */}
              <nav className="flex flex-col md:flex-row gap-8 text-white/80 font-medium tracking-wider uppercase text-sm md:text-base">
                 <a href="#home" className="hover:text-white transition-colors">Home</a>
                 <a href="#about" className="hover:text-white transition-colors">About</a>
                 <a href="#services" className="hover:text-white transition-colors">Services</a>
              </nav>

              {/* Logo */}
              <div className="text-right text-white">
                 <h2 className="font-serif text-5xl uppercase tracking-wider mb-2">AKINA</h2>
                 <p className="text-xl font-light tracking-[0.3em] uppercase opacity-90">Hotel</p>
              </div>
           </div>
       </div>
    </footer>
  );
}
