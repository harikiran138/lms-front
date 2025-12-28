import SchoolHeader from '@/components/school/SchoolHeader';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen font-sans text-school-text">
      <SchoolHeader />
      <main className="pt-20">
        
        {/* Page Header */}
        <div className="bg-school-primary py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-school-text mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
              We're here to help. Reach out to our administration team with any questions or to schedule a visit.
            </p>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
                
                {/* Contact Info */}
                <div>
                    <h2 className="font-serif text-3xl mb-8">Get In Touch</h2>
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="bg-school-secondary p-3 rounded-full mr-5 text-school-accent">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl mb-1">Our Location</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    St. Ignatius College School<br />
                                    123 School Lane<br />
                                    Toronto, ON M1A 2B3
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                             <div className="bg-school-secondary p-3 rounded-full mr-5 text-school-accent">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl mb-1">Phone</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Main Office: (416) 555-0123<br />
                                    Admissions: (416) 555-0124
                                </p>
                            </div>
                        </div>

                         <div className="flex items-start">
                             <div className="bg-school-secondary p-3 rounded-full mr-5 text-school-accent">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl mb-1">Email</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    General Inquiries: info@stignatius.edu<br />
                                    Admissions: admissions@stignatius.edu
                                </p>
                            </div>
                        </div>

                         <div className="flex items-start">
                             <div className="bg-school-secondary p-3 rounded-full mr-5 text-school-accent">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl mb-1">Office Hours</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Monday - Friday: 8:00 AM - 4:00 PM<br />
                                    Saturday - Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-school-secondary p-8 md:p-10 rounded-lg">
                    <h2 className="font-serif text-2xl mb-6">Send us a Message</h2>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input type="text" id="firstName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-school-accent focus:border-transparent outline-none bg-white/50" placeholder="Jane" />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input type="text" id="lastName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-school-accent focus:border-transparent outline-none bg-white/50" placeholder="Doe" />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                             <input type="email" id="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-school-accent focus:border-transparent outline-none bg-white/50" placeholder="jane@example.com" />
                        </div>

                         <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                             <select id="subject" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-school-accent focus:border-transparent outline-none bg-white/50">
                                <option>General Inquiry</option>
                                <option>Admissions Question</option>
                                <option>Student Services</option>
                                <option>Technical Support</option>
                             </select>
                        </div>
                        
                        <div>
                             <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                             <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-school-accent focus:border-transparent outline-none bg-white/50" placeholder="How can we help you?"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-school-text text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
