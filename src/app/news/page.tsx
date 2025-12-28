import SchoolHeader from '@/components/school/SchoolHeader';
import Link from 'next/link';
import { ArrowRight, Calendar, Filter } from 'lucide-react';

const allNews = [
  {
    date: 'July 9, 2023',
    title: 'PA Day for Elementary and Secondary Schools',
    excerpt: 'Reminder to all parents and guardians that July 9th is a Professional Activity Day.',
    image: '/school_hero_extracted.png',
    category: 'Events'
  },
  {
    date: 'June 15, 2023',
    title: "TCDSB's Unsung Heroes | June 2023",
    excerpt: 'Celebrating the incredible contributions of our staff and students who go above and beyond.',
    image: '/news_heroes.png',
    category: 'Community'
  },
  {
    date: 'May 1, 2023',
    title: 'Asian Canadian Heritage Month',
    excerpt: 'Join us as we honor and celebrate the rich history and culture of Asian Canadians.',
    image: '/news_heritage.png',
    category: 'Events'
  },
  {
    date: 'April 22, 2023',
    title: 'Earth Day Initiatives',
    excerpt: 'Students lead the way in sustainability with new school-wide recycling program.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600',
    category: 'News'
  },
  {
    date: 'March 10, 2023',
    title: 'Spring Concert Series Announced',
    excerpt: 'Tickets remain for our annual showcase of musical talent.',
    image: 'https://images.unsplash.com/photo-1514320291940-236a2af4d672?auto=format&fit=crop&q=80&w=600',
    category: 'Arts'
  },
   {
    date: 'February 14, 2023',
    title: 'Valentine\'s Day Fundraiser Success',
    excerpt: 'Student council raised over $2,000 for local charities.',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600',
    category: 'Community'
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen font-sans text-school-text">
      <SchoolHeader />
      <main className="pt-20">
        
        {/* Page Header */}
        <div className="bg-school-primary py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-school-text mb-6">
              News & Events
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
              Stay up to date with the latest announcements, success stories, and upcoming events at St. Ignatius.
            </p>
          </div>
        </div>

        {/* Filters & Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Simple Category Filter */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
                {['All', 'News', 'Events', 'Community', 'Arts'].map((cat, i) => (
                    <button 
                        key={i} 
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-colors border ${i === 0 ? 'bg-school-text text-white border-school-text' : 'bg-white text-gray-600 border-gray-300 hover:border-school-text hover:text-school-text'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allNews.map((news, index) => (
                <div key={index} className="flex flex-col group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[16/9] overflow-hidden relative">
                     <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm">
                        {news.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-gray-500 text-xs font-medium uppercase tracking-wider mb-3">
                          <Calendar size={14} className="mr-2" />
                          {news.date}
                      </div>
                      
                      <h3 className="font-serif text-xl text-school-text mb-3 leading-tight group-hover:text-school-accent transition-colors">
                        {news.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                          {news.excerpt}
                      </p>
                      
                      <Link 
                        href="#" 
                        className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-school-text hover:text-school-accent transition-colors mt-auto"
                      >
                       <span className="mr-2">Read Article</span>
                       <ArrowRight size={14} />
                      </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
                 <button className="bg-white text-school-text border border-school-text px-8 py-3 rounded-full font-medium hover:bg-school-secondary transition-colors">
                    Load More News
                </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
