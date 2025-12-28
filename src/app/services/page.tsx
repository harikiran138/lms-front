import SchoolHeader from '@/components/school/SchoolHeader';
import StudentServices from '@/components/school/StudentServices';
import ResourcesGrid from '@/components/school/ResourcesGrid';
import DepartmentsBanner from '@/components/school/DepartmentsBanner';

export default function ServicesPage() {
  return (
    <div className="min-h-screen font-sans text-school-text">
      <SchoolHeader />
      <main className="pt-20">
        
        {/* Page Header */}
        <div className="bg-school-primary py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-school-text mb-6">
              Student Services
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
              We are dedicated to supporting the holistic growth and well-being of every student. 
              Explore the wide range of services and resources available to help you succeed.
            </p>
          </div>
        </div>

        {/* Main Services Section */}
        <StudentServices />

        {/* Detailed Services List Section */}
        <section className="py-20 bg-white">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    <div>
                        <h2 className="font-serif text-3xl mb-6">Academic Support</h2>
                        <ul className="space-y-4">
                            {[
                                "Individualized Education Plans (IEP)",
                                "Peer Tutoring Programs",
                                "Homework Clubs",
                                "University & College Application Guidance",
                                "Standardized Test Preparation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-school-accent mr-3">•</span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-serif text-3xl mb-6">Health & Wellness</h2>
                        <ul className="space-y-4">
                            {[
                                "On-site School Nurse",
                                "Mental Health Counselling",
                                "Wellness Workshops",
                                "Nutritional Guidance",
                                "Mindfulness & Medalitation Sessions"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-school-accent mr-3">•</span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
             </div>
        </section>

        <ResourcesGrid />
        <DepartmentsBanner />
      </main>
    </div>
  );
}
