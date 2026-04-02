import React from 'react';
import Layout from '@/components/Layout';
import { TrendingUp } from 'lucide-react';

const achievements = [
  { metric: '1 Crore+', label: 'Tele-Law Consultations', description: 'Free legal consultations provided via Common Service Centres across India.' },
  { metric: '5.6 Crore', label: 'Cases Resolved via Lok Adalats', description: 'Cases settled through National Lok Adalats in the past year alone.' },
  { metric: '18,735', label: 'Courts Digitized', description: 'District and Taluka courts brought online under the e-Courts project.' },
  { metric: '744', label: 'Fast Track Courts', description: 'FTSCs operational for cases of rape, POCSO, and crimes against women.' },
  { metric: '15,000+', label: 'Legal Literacy Clubs', description: 'Legal Literacy Clubs established across schools and communities.' },
  { metric: '2.5 Lakh', label: 'Gram Panchayats Covered', description: 'Villages connected through Tele-Law and legal awareness campaigns.' },
];

const Achievements: React.FC = () => {
  return (
    <Layout>
      <section className="bg-india-blue text-white py-12">
        <div className="container px-4">
          <h1 className="text-3xl font-bold text-center">Monthly Achievements</h1>
          <p className="text-center mt-3 text-white/80">Key milestones and achievements of the Department of Justice</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center border-b-4 border-india-saffron">
                <TrendingUp className="h-8 w-8 text-india-saffron mx-auto mb-3" />
                <p className="text-3xl font-bold text-india-blue mb-1">{item.metric}</p>
                <p className="text-sm font-semibold text-india-blue mb-2">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;
