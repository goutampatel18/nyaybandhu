import React from 'react';
import Layout from '@/components/Layout';
import { Calendar, ArrowRight, Bell } from 'lucide-react';

const newsItems = [
  {
    title: 'Supreme Court Expands Scope of Article 21 to Include Right to Clean Air',
    date: '28 March 2026',
    category: 'Supreme Court',
    excerpt: 'In a landmark ruling, the Supreme Court of India expanded the interpretation of the right to life under Article 21 to explicitly include the right to breathe clean air, directing the Centre and states to take concrete measures.',
  },
  {
    title: 'New Fast Track Courts for Crimes Against Women and Children',
    date: '22 March 2026',
    category: 'Judiciary',
    excerpt: 'The Department of Justice approves the establishment of 400 additional Fast Track Special Courts (FTSCs) across the country to expedite trials of cases involving crimes against women and children under the POCSO Act.',
  },
  {
    title: 'Tele-Law Service Crosses 1 Crore Consultations Milestone',
    date: '15 March 2026',
    category: 'Legal Aid',
    excerpt: 'The Tele-Law programme, providing free legal aid via video conferencing at Common Service Centres, has surpassed 1 crore legal consultations, benefiting citizens in over 2.5 lakh Gram Panchayats.',
  },
  {
    title: 'Digital India: e-Courts Project Phase III Launched',
    date: '10 March 2026',
    category: 'Digital Justice',
    excerpt: 'The Government of India launches Phase III of the e-Courts project with a budget of ₹7,210 crore, aiming to digitize all court processes and enable virtual hearings across District and Taluka courts.',
  },
  {
    title: 'Amendment to Legal Services Authorities Act Proposed',
    date: '5 March 2026',
    category: 'Legislation',
    excerpt: 'The Law Ministry proposes amendments to the Legal Services Authorities Act, 1987, to expand the scope of free legal aid to cover gig workers, migrant laborers, and senior citizens above 60.',
  },
  {
    title: 'AI-Powered Legal Research Tool Piloted in High Courts',
    date: '28 February 2026',
    category: 'Legal Tech',
    excerpt: 'The Supreme Court of India approves a pilot programme to introduce AI-powered legal research assistants in five High Courts, aimed at reducing case pendency and aiding judges in legal research.',
  },
  {
    title: 'National Lok Adalat Resolves 52 Lakh Cases in Single Day',
    date: '20 February 2026',
    category: 'Dispute Resolution',
    excerpt: 'The National Legal Services Authority reports that the latest National Lok Adalat resolved over 52 lakh pending and pre-litigation cases across the country in a single day, setting a new record.',
  },
  {
    title: 'Uniform Civil Code Draft Submitted to Law Commission',
    date: '15 February 2026',
    category: 'Legislation',
    excerpt: 'After extensive public consultations across all states and union territories, the Law Commission submits a comprehensive draft report on the Uniform Civil Code to the Government of India.',
  },
];

const categoryColors: Record<string, string> = {
  'Supreme Court': 'bg-blue-100 text-blue-800',
  'Judiciary': 'bg-purple-100 text-purple-800',
  'Legal Aid': 'bg-green-100 text-green-800',
  'Digital Justice': 'bg-cyan-100 text-cyan-800',
  'Legislation': 'bg-amber-100 text-amber-800',
  'Legal Tech': 'bg-indigo-100 text-indigo-800',
  'Dispute Resolution': 'bg-orange-100 text-orange-800',
};

const News: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-6">Latest News & Updates</h1>
            <p className="text-xl">
              Stay informed with the latest developments in Indian law, judiciary,
              and government legal initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* News Items */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer border-l-4 border-transparent hover:border-india-saffron"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColors[item.category] || 'bg-gray-100 text-gray-800'}`}>
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />{item.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-india-blue group-hover:text-india-saffron transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-muted-foreground group-hover:text-india-saffron transition-colors mt-1" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-india-blue/5 py-12">
        <div className="container px-4 text-center">
          <Bell className="h-10 w-10 mx-auto text-india-saffron mb-4" />
          <h2 className="text-2xl font-bold text-india-blue mb-3">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Subscribe to receive the latest legal news, updates, and notifications directly to your inbox.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default News;
