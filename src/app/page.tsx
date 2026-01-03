import SchoolHeader from '@/components/school/SchoolHeader';
import UnifiedContent from '@/components/school/UnifiedContent';
import SchoolFooter from '@/components/school/SchoolFooter';

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-school-text selection:bg-school-accent selection:text-white">
      <SchoolHeader />
      <main className="pt-20">
        <UnifiedContent />
      </main>
      <SchoolFooter />
    </div>
  );
}
