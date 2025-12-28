import Link from 'next/link';

const services = [
  {
    title: 'Academic Counselling',
    image: '/service_academic.png',
    href: '#',
  },
  {
    title: 'Personal Counselling',
    image: '/service_personal.png',
    href: '#',
  },
  {
    title: 'Resources and Information',
    image: '/service_resources.png',
    href: '#',
  },
];

export default function StudentServices() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-school-text max-w-md">
                Comprehensive Student Services
            </h2>
             <Link
            href="/services"
            className="hidden md:block px-6 py-2 border border-school-text/50 text-school-text rounded-full text-sm font-medium hover:bg-school-text hover:text-school-secondary transition-colors"
          >
            Learn More
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group relative block aspect-[3/4] overflow-hidden rounded-lg">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-white font-serif text-2xl md:text-3xl leading-tight">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
         <div className="mt-8 md:hidden text-center">
             <Link
            href="#"
            className="inline-block px-6 py-2 border border-school-text rounded-full text-sm font-medium hover:bg-school-text hover:text-white transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
