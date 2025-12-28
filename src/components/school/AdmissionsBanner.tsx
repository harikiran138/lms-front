import Link from 'next/link';

export default function AdmissionsBanner() {
  return (
    <section className="bg-school-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-school-text mb-8 leading-tight">
            Join Our Welcoming Community through St. Ignatius College School Admissions
          </h2>
          <Link
            href="#"
            className="inline-block bg-school-text text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Decorative Geometric Pattern Strip */}
      <div className="h-24 w-full relative overflow-hidden bg-white/30">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <pattern id="school-pattern" x="0" y="0" width="120" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 60 L0 0 A60 60 0 0 1 60 60 Z" className="fill-school-accent/80" />
            <path d="M60 60 L60 0 A60 60 0 0 0 0 60 Z" className="fill-school-primary/80" />
            <path d="M60 60 L60 0 A60 60 0 0 1 120 60 Z" className="fill-school-primary/80" />
            <path d="M120 60 L120 0 A60 60 0 0 0 60 60 Z" className="fill-school-accent/80" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#school-pattern)" />
        </svg>
      </div>
    </section>
  );
}
