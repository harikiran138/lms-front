
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collage from './components/Collage';
import DashboardPreview from './components/DashboardPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative bg-gray-50 selection:bg-teal-200">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Collage />
      <Footer />
      
      {/* Global decorative elements if needed */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
         <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-teal-100/20 rounded-full blur-3xl" />
         <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
}

export default App;
