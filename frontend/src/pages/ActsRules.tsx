import React from 'react';
import Layout from '@/components/Layout';
import { Search, BookOpen, ExternalLink, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

const actsCategories = [
  {
    title: 'Constitutional & Fundamental',
    acts: [
      { name: 'The Constitution of India, 1950', year: '1950', description: 'Supreme law of India laying down the framework for governance, fundamental rights, and duties.' },
      { name: 'The Citizenship Act, 1955', year: '1955', description: 'Provides for the acquisition and determination of Indian citizenship.' },
      { name: 'The Right to Information Act, 2005', year: '2005', description: 'Empowers citizens to seek information from public authorities.' },
    ],
  },
  {
    title: 'Criminal Law',
    acts: [
      { name: 'Bharatiya Nyaya Sanhita, 2023', year: '2023', description: 'Replaces the Indian Penal Code, 1860 — the primary criminal code of India.' },
      { name: 'Bharatiya Nagarik Suraksha Sanhita, 2023', year: '2023', description: 'Replaces the Code of Criminal Procedure, 1973 — governs criminal trial procedures.' },
      { name: 'Bharatiya Sakshya Adhiniyam, 2023', year: '2023', description: 'Replaces the Indian Evidence Act, 1872 — governs admissibility of evidence.' },
      { name: 'Prevention of Corruption Act, 1988', year: '1988', description: 'Combats corruption in government agencies and public sector.' },
    ],
  },
  {
    title: 'Civil & Property Law',
    acts: [
      { name: 'The Transfer of Property Act, 1882', year: '1882', description: 'Governs the transfer of property between living persons.' },
      { name: 'The Registration Act, 1908', year: '1908', description: 'Provides for registration of documents relating to immovable property.' },
      { name: 'The Indian Contract Act, 1872', year: '1872', description: 'Governs the law of contracts in India.' },
      { name: 'The Specific Relief Act, 1963', year: '1963', description: 'Provides remedies in case of breach of contract or civil obligations.' },
    ],
  },
  {
    title: 'Labour & Employment',
    acts: [
      { name: 'Code on Wages, 2019', year: '2019', description: 'Consolidates laws relating to wages, bonus, and equal remuneration.' },
      { name: 'Industrial Relations Code, 2020', year: '2020', description: 'Covers trade unions, standing orders, and industrial disputes.' },
      { name: 'Code on Social Security, 2020', year: '2020', description: 'Extends social security benefits to organized and unorganized workers.' },
    ],
  },
  {
    title: 'Women & Children',
    acts: [
      { name: 'Protection of Women from Domestic Violence Act, 2005', year: '2005', description: 'Protects women from domestic violence and provides civil remedies.' },
      { name: 'POCSO Act, 2012', year: '2012', description: 'Protection of Children from Sexual Offences Act — provides stringent punishment for child sexual abuse.' },
      { name: 'Dowry Prohibition Act, 1961', year: '1961', description: 'Prohibits the giving or receiving of dowry.' },
      { name: 'Sexual Harassment of Women at Workplace Act, 2013', year: '2013', description: 'Prevents sexual harassment at the workplace.' },
    ],
  },
  {
    title: 'Consumer & Technology',
    acts: [
      { name: 'Consumer Protection Act, 2019', year: '2019', description: 'Establishes consumer dispute resolution commissions and protects consumer rights.' },
      { name: 'Information Technology Act, 2000', year: '2000', description: 'Legal recognition for e-commerce, cyber crimes, and digital signatures.' },
      { name: 'Digital Personal Data Protection Act, 2023', year: '2023', description: 'Regulates processing of digital personal data.' },
    ],
  },
];

const ActsRules: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-6">Acts & Rules</h1>
            <p className="text-xl mb-8">
              Browse the comprehensive collection of Indian legislation organized by category.
              Access the full text of central acts and rules governing all aspects of law.
            </p>
            <div className="flex items-center max-w-md mx-auto bg-white/10 rounded-lg px-4 py-2">
              <Search className="h-5 w-5 text-white mr-2" />
              <Input
                type="search"
                placeholder="Search acts and rules..."
                className="bg-transparent border-none text-white placeholder:text-white/70 flex-1 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Acts Categories */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="space-y-10">
            {actsCategories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-3 mb-5">
                  <BookOpen className="h-5 w-5 text-india-saffron" />
                  <h2 className="text-xl font-bold text-india-blue">{category.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.acts.map((act) => (
                    <div
                      key={act.name}
                      className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-all duration-300 cursor-pointer group border-l-4 border-india-blue/20 hover:border-india-saffron"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-india-blue group-hover:text-india-saffron transition-colors text-sm mb-1">
                            {act.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mb-2">{act.description}</p>
                          <span className="text-xs bg-india-blue/10 text-india-blue px-2 py-0.5 rounded-full font-medium">
                            {act.year}
                          </span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-india-saffron transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Link */}
      <section className="bg-india-blue/5 py-10">
        <div className="container px-4 text-center">
          <h2 className="text-xl font-bold text-india-blue mb-3">Official Legal Repository</h2>
          <p className="text-muted-foreground mb-5 max-w-lg mx-auto text-sm">
            For the complete and official text of all Indian legislation, visit the India Code portal maintained by the Legislative Department.
          </p>
          <a
            href="https://www.indiacode.nic.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-india-blue text-white rounded-lg hover:bg-india-blue/90 transition-colors font-medium text-sm"
          >
            Visit India Code <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ActsRules;
