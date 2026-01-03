import SchoolHeader from '@/components/school/SchoolHeader';
import Link from 'next/link';
import { Calendar, MapPin, Clock } from 'lucide-react';

const upcomingEvents = [
  {
    eventDate: 'May 7, 2030',
    checkInTime: '5:30 PM',
    eventStartTime: '6:00 PM',
    location: 'Liberty Events Plaza',
    title: 'THE MASTER #OBE',
    subtitle: 'FIRST OF ITS KIND',
    tagline: 'Our Transformative Leadership Model Projects',
    focus: 'Focussing\nWA Knowledge Profile & Attitude',
    dates: 'September 27 - 28, 2024 | Online',
    quote: 'Let your curriculum stand tall, competent & be a differentiator',
    image: '/school_hero_extracted.png',
    category: 'Workshop'
  },
  {
    eventDate: 'June 15, 2030',
    checkInTime: '2:00 PM',
    eventStartTime: '3:00 PM',
    location: 'Main Auditorium',
    title: 'Annual Science Fair',
    subtitle: 'Innovation & Discovery',
    tagline: 'Student Research Showcase',
    focus: 'STEM Excellence\nCreative Problem Solving',
    dates: 'June 15, 2030 | In-Person',
    quote: 'Inspiring the next generation of innovators',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200',
    category: 'Event'
  },
  {
    eventDate: 'July 20, 2030',
    checkInTime: '9:00 AM',
    eventStartTime: '9:30 AM',
    location: 'School Gymnasium',
    title: 'Sports Day Championship',
    subtitle: 'Athletic Excellence',
    tagline: 'Celebrating Sportsmanship',
    focus: 'Physical Fitness\nTeam Spirit & Leadership',
    dates: 'July 20, 2030 | Outdoor',
    quote: 'Building character through sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1200',
    category: 'Sports'
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen font-sans">
      <SchoolHeader />
      
      <main className="pt-20">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={upcomingEvents[0].image}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-sky-200/80 via-sky-100/70 to-white/90"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Event Details */}
              <div className="text-left">
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    {upcomingEvents[0].subtitle}
                  </p>
                  <h1 className="font-serif text-5xl md:text-7xl font-bold mb-2">
                    <span className="text-red-600">THE</span>
                    <span className="text-blue-900 ml-2">MASTER #OBE</span>
                  </h1>
                  <p className="text-sm text-gray-700 mb-2">{upcomingEvents[0].tagline}</p>
                  <div className="text-blue-900 font-semibold whitespace-pre-line mb-4">
                    {upcomingEvents[0].focus}
                  </div>
                  <p className="text-sm text-gray-600 mb-6">{upcomingEvents[0].dates}</p>
                </div>

                <blockquote className="border-l-4 border-blue-900 pl-4 mb-8">
                  <p className="text-gray-700 italic text-lg">
                    {upcomingEvents[0].quote}
                  </p>
                </blockquote>

                <button className="bg-white text-gray-800 px-8 py-3 rounded-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Register to Attend
                </button>
              </div>

              {/* Right: Giraffe Image Placeholder */}
              <div className="hidden md:block">
                {/* The giraffe from the background will show through */}
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Bar */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-gray-400 text-sm mb-1">Save the date</p>
                <p className="text-xl font-bold">{upcomingEvents[0].eventDate}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Check-in starts</p>
                <p className="text-xl font-bold">{upcomingEvents[0].checkInTime}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Event begins at</p>
                <p className="text-xl font-bold">{upcomingEvents[0].eventStartTime}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">See you there</p>
                <p className="text-xl font-bold">{upcomingEvents[0].location}</p>
              </div>
            </div>
          </div>
        </section>

        {/* All Events Grid */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Join us for transformative experiences and community celebrations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  {/* Event Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                      {event.category}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{event.subtitle}</p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-700 text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-blue-900" />
                        <span>{event.eventDate}</span>
                      </div>
                      <div className="flex items-center text-gray-700 text-sm">
                        <Clock className="w-4 h-4 mr-2 text-blue-900" />
                        <span>{event.eventStartTime}</span>
                      </div>
                      <div className="flex items-center text-gray-700 text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-blue-900" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <Link 
                      href="#"
                      className="inline-block w-full text-center bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
