import React from 'react';
import Layout from '@/components/Layout';
import { Calendar, Download, FileText, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const circulars = [
  {
    number: 'DoJ/2026/Circular-15',
    title: 'Implementation of AI-Assisted Legal Research in District Courts',
    date: '25 March 2026',
    department: 'Department of Justice',
    type: 'Office Memorandum',
    summary: 'Guidelines for implementing AI-assisted legal research tools across all District Courts under Phase III of the e-Courts project.',
  },
  {
    number: 'DoJ/2026/Circular-14',
    title: 'Revised Guidelines for Tele-Law Service Delivery',
    date: '18 March 2026',
    department: 'Department of Justice',
    type: 'Circular',
    summary: 'Updated operational guidelines for Tele-Law services at Common Service Centres, including expanded service hours and multilingual support.',
  },
  {
    number: 'DoJ/2026/Circular-13',
    title: 'Annual Report on Pendency Reduction in Fast Track Courts',
    date: '10 March 2026',
    department: 'Department of Justice',
    type: 'Report',
    summary: 'Status report on the reduction of case pendency in Fast Track Special Courts established under the Centrally Sponsored Scheme.',
  },
  {
    number: 'DoJ/2026/Circular-12',
    title: 'National Lok Adalat Schedule for FY 2026-27',
    date: '1 March 2026',
    department: 'NALSA',
    type: 'Notification',
    summary: 'Schedule and guidelines for National Lok Adalats to be conducted across the country during the financial year 2026-27.',
  },
  {
    number: 'DoJ/2026/Circular-11',
    title: 'Grant-in-Aid for State Legal Services Authorities',
    date: '22 February 2026',
    department: 'Department of Justice',
    type: 'Office Memorandum',
    summary: 'Release of grant-in-aid to State Legal Services Authorities for the implementation of legal aid programmes in FY 2025-26.',
  },
  {
    number: 'DoJ/2026/Circular-10',
    title: 'Standards for Video Conferencing in Courts',
    date: '15 February 2026',
    department: 'Department of Justice',
    type: 'Circular',
    summary: 'Technical specifications and procedural guidelines for conducting court proceedings via video conferencing in all courts.',
  },
  {
    number: 'DoJ/2025/Circular-09',
    title: 'Legal Awareness Campaign for BNS Transition',
    date: '5 February 2026',
    department: 'Department of Justice',
    type: 'Circular',
    summary: 'Nationwide legal awareness campaign for the transition from IPC to Bharatiya Nyaya Sanhita (BNS) and associated new criminal legislation.',
  },
  {
    number: 'DoJ/2025/Circular-08',
    title: 'Empanelment of Lawyers for Free Legal Aid',
    date: '28 January 2026',
    department: 'NALSA',
    type: 'Notification',
    summary: 'Revised criteria and procedure for the empanelment of lawyers to provide free legal aid services through Legal Services Authorities.',
  },
];

const typeColors: Record<string, string> = {
  'Circular': 'bg-blue-100 text-blue-800',
  'Office Memorandum': 'bg-green-100 text-green-800',
  'Notification': 'bg-amber-100 text-amber-800',
  'Report': 'bg-purple-100 text-purple-800',
};

const Circulars: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-6">Circulars & Notifications</h1>
            <p className="text-xl mb-8">
              Official circulars, notifications, and office memorandums from the Department of Justice
              and associated legal bodies.
            </p>
            <div className="flex items-center max-w-md mx-auto bg-white/10 rounded-lg px-4 py-2">
              <Search className="h-5 w-5 text-white mr-2" />
              <Input
                type="search"
                placeholder="Search circulars..."
                className="bg-transparent border-none text-white placeholder:text-white/70 flex-1 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Circulars List */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {circulars.map((circular) => (
              <div
                key={circular.number}
                className="bg-white rounded-lg shadow-sm p-5 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-muted-foreground">{circular.number}</span>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColors[circular.type] || 'bg-gray-100 text-gray-800'}`}>
                        {circular.type}
                      </span>
                    </div>
                    <h3 className="font-semibold text-india-blue group-hover:text-india-saffron transition-colors mb-2">
                      {circular.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{circular.summary}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />{circular.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText className="h-3 w-3" />{circular.department}
                      </span>
                    </div>
                  </div>
                  <button className="text-india-blue hover:text-india-saffron transition-colors flex-shrink-0">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Circulars;
