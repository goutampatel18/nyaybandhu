import React from 'react';
import Layout from '@/components/Layout';
import { Phone, Mail, MapPin, Clock, Globe, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Contact: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-india-blue text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className="w-full h-full">
            <path d="M500,10 L990,250 L990,750 L500,990 L10,750 L10,250 z" fill="currentColor"/>
          </svg>
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl">
              Reach out to the Department of Justice for any queries related to legal services,
              access to justice, or the NyayBandhu platform.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-india-blue mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-india-blue/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-india-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-india-blue mb-1">Office Address</h3>
                    <p className="text-sm text-muted-foreground">
                      Department of Justice<br />
                      Ministry of Law and Justice<br />
                      Jaisalmer House, 26, Man Singh Road<br />
                      New Delhi - 110011, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-india-saffron/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-india-saffron" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-india-blue mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      General Queries: +91-11-2338 7557<br />
                      Tele-Law Helpline: 15100 (Toll Free)<br />
                      NALSA Helpline: 1516 (Toll Free)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-india-green/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-india-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-india-blue mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      General: secy-justice@nic.in<br />
                      Grievances: grievance-doj@gov.in<br />
                      NyayBandhu Support: support@nyaybandhu.gov.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-india-blue mb-1">Office Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday to Friday: 9:30 AM - 6:00 PM<br />
                      Saturday & Sunday: Closed<br />
                      Public Holidays: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-india-blue mb-1">Official Website</h3>
                    <p className="text-sm text-muted-foreground">
                      <a href="https://doj.gov.in/" target="_blank" rel="noopener noreferrer" className="text-india-blue hover:text-india-saffron transition-colors underline">
                        https://doj.gov.in/
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-india-blue mb-8">Send us a Message</h2>

              <form className="bg-white rounded-lg shadow-md p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">Full Name</label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone Number</label>
                  <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1.5">Subject</label>
                  <select id="subject" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="">Select a subject</option>
                    <option value="legal-aid">Free Legal Aid</option>
                    <option value="chatbot">NyayBandhu Chatbot</option>
                    <option value="tele-law">Tele-Law Services</option>
                    <option value="grievance">Grievance</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your query or feedback..."
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-india-blue/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-india-blue text-white py-3 rounded-lg hover:bg-india-blue/90 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
