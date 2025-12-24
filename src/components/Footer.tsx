import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/50 backdrop-blur-sm border-t border-white/20 py-12 mt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-gray-800">Applie Finch</span>
        </div>
        <p className="text-gray-500 mb-8">
          Crafting polished educational experiences with liquid glass aesthetics.
        </p>
        <div className="flex justify-center space-x-6 mb-8 text-gray-400">
          <a href="#" className="hover:text-teal-500 transition-colors">Twitter</a>
          <a href="#" className="hover:text-teal-500 transition-colors">Instagram</a>
          <a href="#" className="hover:text-teal-500 transition-colors">LinkedIn</a>
        </div>
        <div className="text-sm text-gray-400 flex items-center justify-center">
          <span>© 2024 Applie Finch. Made with</span>
          <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
          <span>and lots of glass.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
