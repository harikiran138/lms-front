import SchoolHeader from '@/components/school/SchoolHeader';
import SchoolHero from '@/components/school/SchoolHero';
import AdmissionsBanner from '@/components/school/AdmissionsBanner';
import ResourcesGrid from '@/components/school/ResourcesGrid';
import StudentServices from '@/components/school/StudentServices';
import NewsEvents from '@/components/school/NewsEvents';
import DepartmentsBanner from '@/components/school/DepartmentsBanner';
import SolutionsSection from '@/components/school/SolutionsSection';
import SchoolFooter from '@/components/school/SchoolFooter';

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-school-text selection:bg-school-accent selection:text-white">
      <SchoolHeader />
      <main className="pt-20">
        <SchoolHero />
        <SolutionsSection />
        <AdmissionsBanner />
        <ResourcesGrid />
        <StudentServices />
        <NewsEvents />
        <DepartmentsBanner />
      </main>
      <SchoolFooter />
    </div>
  );
}
