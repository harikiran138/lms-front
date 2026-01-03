import SchoolHeader from '@/components/school/SchoolHeader';
import UnifiedContent from '@/components/school/UnifiedContent';
import SchoolFooter from '@/components/school/SchoolFooter';
import SceneLoader from '@/components/3d/SceneLoader';

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-school-text selection:bg-school-accent selection:text-white">
      {/* 3D Background */}
      <SceneLoader />
      
      <SchoolHeader />
      <main className="pt-20 relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <UnifiedContent />
        </div>
      </main>
      <SchoolFooter />
    </div>
  );
}
