import SchoolHeader from '@/components/school/SchoolHeader';
import DepartmentsBanner from '@/components/school/DepartmentsBanner';
import { BookOpen, Monitor, FlaskConical, Globe, Calculator, Music } from 'lucide-react';

const departments = [
  { name: 'Mathematics', icon: Calculator, desc: 'Developing critical thinking and problem-solving through advanced mathematical concepts.' },
  { name: 'Science', icon: FlaskConical, desc: 'Exploring the natural world through Physics, Chemistry, Biology, and Environmental Science.' },
  { name: 'English & Literature', icon: BookOpen, desc: 'Fostering a love for reading, writing, and analytical thinking.' },
  { name: 'Computer Studies', icon: Monitor, desc: 'Programming, digital literacy, and computer engineering.' },
  { name: 'Social Studies', icon: Globe, desc: 'History, Geography, and understanding our global society.' },
  { name: 'Arts', icon: Music, desc: 'Visual arts, music, drama, and creative expression.' },
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen font-sans text-school-text">
      <SchoolHeader />
      <main className="pt-20">
        
        {/* Page Header */}
        <div className="bg-school-primary py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-school-text mb-6">
              Academics
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
              Our rigorous academic program challenges students to think critically, communicate effectively, and achieve excellence.
            </p>
          </div>
        </div>

        {/* Curriculum Overview */}
        <section className="py-20 bg-white">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-serif text-3xl mb-6">A Tradition of Excellence</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At St. Ignatius College School, we believe in a balanced education that nurtures the whole person. Our curriculum is designed to prepare students for top universities and fulfilling careers.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We offer a wide range of courses, including Advanced Placement (AP) options, ensuring every student can pursue their passions and reach their full potential.
                        </p>
                    </div>
                    <div className="bg-school-secondary p-8 rounded-lg border border-school-primary">
                        <h3 className="font-serif text-2xl mb-4">Academic Highlights</h3>
                        <ul className="space-y-3">
                            {[
                                "98% University Acceptance Rate",
                                "Average Class Size: 18 Students",
                                "15+ AP Courses Offered",
                                "1:1 Chromebook Program",
                                "Dedicated Learning Support Centre"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-800 font-medium">
                                    <div className="w-2 h-2 bg-school-accent rounded-full mr-3"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
             </div>
        </section>

        {/* Departments Grid */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Academic Departments</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {departments.map((dept, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="w-12 h-12 bg-school-secondary rounded-full flex items-center justify-center mb-6 text-school-text">
                            <dept.icon size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-xl mb-3">{dept.name}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{dept.desc}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        <DepartmentsBanner />
      </main>
    </div>
  );
}
