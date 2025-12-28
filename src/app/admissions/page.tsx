import SchoolHeader from '@/components/school/SchoolHeader';
import AdmissionsBanner from '@/components/school/AdmissionsBanner';
import DepartmentsBanner from '@/components/school/DepartmentsBanner';
import Link from 'next/link';

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen font-sans text-school-text">
      <SchoolHeader />
      <main className="pt-20">
        
        {/* Page Header */}
        <div className="bg-school-primary py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-school-text mb-6">
              Admissions
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
              Join the St. Ignatius College School community. We welcome students who are eager to learn, grow, and contribute to our vibrant environment.
            </p>
          </div>
        </div>

        <AdmissionsBanner />

        {/* Requirements & Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                <div>
                    <h2 className="font-serif text-3xl mb-8">Application Process</h2>
                    <ol className="relative border-l border-school-accent ml-3">
                        {[
                            { step: "Submit Online Application", desc: "Complete the application form via our portal." },
                            { step: "Submit Required Documents", desc: "Upload transcripts, reference letters, and identification." },
                            { step: "Entrance Assessment", desc: "All applicants must complete a standard entrance test." },
                            { step: "Family Interview", desc: "A meeting with the admissions team." },
                            { step: "Offer of Admission", desc: "Successful candidates will receive an offer letter." }
                        ].map((item, i) => (
                          <li key={i} className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-school-secondary rounded-full -left-4 ring-8 ring-white text-school-text font-bold text-sm border-2 border-school-accent">
                                {i + 1}
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">{item.step}</h3>
                            <p className="mb-4 text-base font-normal text-gray-500">{item.desc}</p>
                        </li>
                        ))}
                    </ol>
                </div>

                <div>
                    <h2 className="font-serif text-3xl mb-8">Important Dates</h2>
                     <div className="bg-school-secondary rounded-lg p-8 border border-gray-100">
                        <ul className="space-y-6">
                             {[
                                { date: "October 1, 2023", event: "Applications Open" },
                                { date: "November 15, 2023", event: "Open House" },
                                { date: "December 1, 2023", event: "Early Application Deadline" },
                                { date: "January 15, 2024", event: "Regular Application Deadline" },
                                { date: "March 1, 2024", event: "Admission Decisions Released" }
                             ].map((item, i) => (
                                <li key={i} className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                                    <span className="font-medium text-school-text">{item.event}</span>
                                    <span className="text-school-accent font-semibold">{item.date}</span>
                                </li>
                             ))}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <Link 
                                href="#"
                                className="block w-full text-center bg-school-text text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                            >
                                Apply Now
                            </Link>
                        </div>
                     </div>
                </div>
            </div>
          </div>
        </section>

        <DepartmentsBanner />
      </main>
    </div>
  );
}
