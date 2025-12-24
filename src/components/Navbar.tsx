import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav h-16' : 'h-24 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-400 to-blue-400 flex items-center justify-center shadow-lg">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            Applie Finch
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Education', 'Gallery', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-teal-600 font-medium transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <button className="px-6 py-2 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5">
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass border-b border-white/20 p-6 md:hidden flex flex-col space-y-4 animate-fadeIn">
          {['Home', 'Education', 'Gallery', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-teal-600 font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
