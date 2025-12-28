import Link from 'next/link';

export default function DepartmentsBanner() {
  return (
    <section className="py-20 glass border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
             <h2 className="font-serif text-3xl md:text-4xl text-school-text leading-tight max-w-2xl">
                Explore Diverse Departments Available In Our School
            </h2>
             <Link
                href="#"
                className="px-8 py-3 border border-school-text rounded-full text-sm font-medium hover:bg-school-text hover:text-white transition-colors bg-white/50 backdrop-blur-sm whitespace-nowrap"
            >
                Explore Services
            </Link>
        </div>
      </div>
    </section>
  );
}
