import React from 'react';
import Layout from '@/components/Layout';
import { Search, Calendar, Building, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

const landmarkCases = [
  {
    title: 'Kesavananda Bharati v. State of Kerala (1973)',
    court: 'Supreme Court of India',
    date: '24 April 1973',
    category: 'Constitutional Law',
    summary: 'Established the "Basic Structure Doctrine" — Parliament\'s amending power under Article 368 does not extend to altering the basic structure or framework of the Constitution. This landmark decision placed limits on constitutional amendments.',
  },
  {
    title: 'Maneka Gandhi v. Union of India (1978)',
    court: 'Supreme Court of India',
    date: '25 January 1978',
    category: 'Fundamental Rights',
    summary: 'Expanded the scope of Article 21 (Right to Life and Personal Liberty). The Court held that the right to travel abroad is part of personal liberty and that any procedure depriving personal liberty must be fair, just, and reasonable.',
  },
  {
    title: 'Vishaka v. State of Rajasthan (1997)',
    court: 'Supreme Court of India',
    date: '13 August 1997',
    category: 'Women\'s Rights',
    summary: 'Laid down guidelines for preventing sexual harassment at the workplace, later codified as the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.',
  },
  {
    title: 'Navtej Singh Johar v. Union of India (2018)',
    court: 'Supreme Court of India',
    date: '6 September 2018',
    category: 'LGBTQ+ Rights',
    summary: 'Decriminalized homosexuality by striking down Section 377 of the IPC insofar as it applied to consensual sexual conduct between adults. Recognized the right to sexual orientation as a fundamental right.',
  },
  {
    title: 'K.S. Puttaswamy v. Union of India (2017)',
    court: 'Supreme Court of India',
    date: '24 August 2017',
    category: 'Right to Privacy',
    summary: 'A nine-judge bench unanimously declared the Right to Privacy a fundamental right protected under Articles 14, 19, and 21 of the Constitution, overruling earlier decisions.',
  },
  {
    title: 'S.R. Bommai v. Union of India (1994)',
    court: 'Supreme Court of India',
    date: '11 March 1994',
    category: 'Federalism',
    summary: 'Restricted the misuse of Article 356 (President\'s Rule). The Court held that the power under Article 356 is not absolute and is subject to judicial review. Secularism was declared a basic feature of the Constitution.',
  },
  {
    title: 'Indian Young Lawyers Association v. State of Kerala (2018)',
    court: 'Supreme Court of India',
    date: '28 September 2018',
    category: 'Religious Freedom',
    summary: 'The Sabarimala case — the Supreme Court allowed women of all ages to enter the Sabarimala temple, holding that the exclusion violated Articles 14, 15, 25, and 26 of the Constitution.',
  },
  {
    title: 'M.C. Mehta v. Union of India (1987)',
    court: 'Supreme Court of India',
    date: '1987',
    category: 'Environmental Law',
    summary: 'Introduced the Absolute Liability principle for hazardous industries. Expanded Article 21 to include the right to a healthy environment, making industries absolutely liable for environmental damage.',
  },
];

const categoryColors: Record<string, string> = {
  'Constitutional Law': 'bg-blue-100 text-blue-800',
  'Fundamental Rights': 'bg-green-100 text-green-800',
  'Women\'s Rights': 'bg-pink-100 text-pink-800',
  'LGBTQ+ Rights': 'bg-purple-100 text-purple-800',
  'Right to Privacy': 'bg-indigo-100 text-indigo-800',
  'Federalism': 'bg-amber-100 text-amber-800',
  'Religious Freedom': 'bg-orange-100 text-orange-800',
  'Environmental Law': 'bg-emerald-100 text-emerald-800',
};

const CaseHistories: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-6">Landmark Case Histories</h1>
            <p className="text-xl mb-8">
              Explore pivotal judgments that have shaped Indian jurisprudence, defined fundamental rights,
              and transformed the legal landscape of the nation.
            </p>
            <div className="flex items-center max-w-md mx-auto bg-white/10 rounded-lg px-4 py-2">
              <Search className="h-5 w-5 text-white mr-2" />
              <Input
                type="search"
                placeholder="Search cases..."
                className="bg-transparent border-none text-white placeholder:text-white/70 flex-1 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cases List */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="space-y-6">
            {landmarkCases.map((caseItem) => (
              <div
                key={caseItem.title}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-india-saffron group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColors[caseItem.category] || 'bg-gray-100 text-gray-800'}`}>
                        {caseItem.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-india-blue group-hover:text-india-saffron transition-colors mb-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{caseItem.summary}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building className="h-3.5 w-3.5" />{caseItem.court}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />{caseItem.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-india-blue group-hover:text-india-saffron transition-colors">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseHistories;
