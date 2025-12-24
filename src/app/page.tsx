'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Collage from '../components/Collage';
import DashboardPreview from '../components/DashboardPreview';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-gray-50 selection:bg-teal-200">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Collage />
      <Footer />
    </main>
  );
}
