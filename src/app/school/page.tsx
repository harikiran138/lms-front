import SchoolHeader from '@/components/school/SchoolHeader';
import SchoolHero from '@/components/school/SchoolHero';
import AdmissionsBanner from '@/components/school/AdmissionsBanner';
import ResourcesGrid from '@/components/school/ResourcesGrid';
import StudentServices from '@/components/school/StudentServices';
import NewsEvents from '@/components/school/NewsEvents';
import DepartmentsBanner from '@/components/school/DepartmentsBanner';

export default function SchoolPage() {
  return (
    <div className="min-h-screen bg-school-secondary font-sans text-school-text">
      <SchoolHeader />
      <main className="pt-20">
        <SchoolHero />
        <AdmissionsBanner />
        <ResourcesGrid />
        <StudentServices />
        <NewsEvents />
        <DepartmentsBanner />
      </main>
    </div>
  );
}
