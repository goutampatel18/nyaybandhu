import React from 'react';
import Layout from '@/components/Layout';
import { ExternalLink, FileText, Download, BookOpen, Globe, Scale, Building } from 'lucide-react';

const resourceCategories = [
  {
    title: 'Legal Databases',
    icon: <Globe className="h-6 w-6" />,
    resources: [
      { name: 'Indian Kanoon', url: 'https://indiankanoon.org/', description: 'Search engine for Indian law — judgments, acts, and legal documents.' },
      { name: 'SCC Online', url: 'https://www.scconline.com/', description: 'Premier legal research platform for Indian courts.' },
      { name: 'Manupatra', url: 'https://www.manupatrafast.com/', description: 'Comprehensive legal information retrieval system.' },
      { name: 'Live Law', url: 'https://www.livelaw.in/', description: 'Legal news, judgments, and analysis portal.' },
    ],
  },
  {
    title: 'Government Legal Portals',
    icon: <Building className="h-6 w-6" />,
    resources: [
      { name: 'e-Courts Services', url: 'https://ecourts.gov.in/', description: 'Access case status, cause lists, and court orders online.' },
      { name: 'India Code Portal', url: 'https://www.indiacode.nic.in/', description: 'Digital repository of all Central and State Acts.' },
      { name: 'Legislative Department', url: 'https://legislative.gov.in/', description: 'Official source for bills, acts, and ordinances.' },
      { name: 'National Judicial Data Grid', url: 'https://njdg.ecourts.gov.in/', description: 'Real-time data on pending and disposed cases across courts.' },
    ],
  },
  {
    title: 'Legal Aid Resources',
    icon: <Scale className="h-6 w-6" />,
    resources: [
      { name: 'NALSA', url: 'https://nalsa.gov.in/', description: 'National Legal Services Authority — free legal aid information.' },
      { name: 'Tele-Law', url: 'https://tele-law.in/', description: 'Free legal consultation via video at Common Service Centres.' },
      { name: 'Pro Bono Legal Services', url: 'https://probono-india.in/', description: 'Connect with volunteer lawyers for free legal help.' },
      { name: 'Legal Services India', url: 'https://www.legalserviceindia.com/', description: 'Legal articles, forums, and information for citizens.' },
    ],
  },
  {
    title: 'Educational Materials',
    icon: <BookOpen className="h-6 w-6" />,
    resources: [
      { name: 'Know Your Rights Handbook', url: '#', description: 'Comprehensive guide to fundamental rights under the Indian Constitution.' },
      { name: 'RTI Guide', url: '#', description: 'Step-by-step guide to filing Right to Information applications.' },
      { name: 'Consumer Rights Guide', url: '#', description: 'Understanding consumer protection laws and filing complaints.' },
      { name: 'Women\'s Legal Rights', url: '#', description: 'Laws protecting women — dowry prohibition, domestic violence, workplace harassment.' },
    ],
  },
];

const quickDownloads = [
  { name: 'Constitution of India (English)', size: '2.1 MB' },
  { name: 'Right to Information Act, 2005', size: '340 KB' },
  { name: 'Consumer Protection Act, 2019', size: '520 KB' },
  { name: 'Legal Aid Application Form', size: '85 KB' },
  { name: 'Lok Adalat Guide', size: '150 KB' },
];

const Resources: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-6">Legal Resources</h1>
            <p className="text-xl">
              Curated collection of legal databases, government portals, educational materials,
              and tools to help you navigate the Indian legal system.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="space-y-12">
            {resourceCategories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-india-saffron">{category.icon}</div>
                  <h2 className="text-2xl font-bold text-india-blue">{category.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.resources.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-all duration-300 border-l-4 border-india-blue/30 hover:border-india-saffron group flex items-start gap-4"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-india-blue group-hover:text-india-saffron transition-colors flex items-center gap-2">
                          {resource.name}
                          <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Downloads */}
      <section className="bg-india-blue/5 py-12">
        <div className="container px-4">
          <h2 className="text-2xl font-bold text-india-blue mb-6 text-center">Quick Downloads</h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {quickDownloads.map((doc) => (
              <div
                key={doc.name}
                className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-india-saffron" />
                  <div>
                    <p className="font-medium text-sm">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">{doc.size}</p>
                  </div>
                </div>
                <button className="text-india-blue hover:text-india-saffron transition-colors">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
