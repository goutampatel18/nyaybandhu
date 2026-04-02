import React from 'react';
import Layout from '@/components/Layout';
import { Clock } from 'lucide-react';

const milestones = [
  { year: '1947', event: 'Independence of India. Ministry of Law established as one of the original ministries.' },
  { year: '1950', event: 'Constitution of India adopted on 26th January. Supreme Court of India established.' },
  { year: '1952', event: 'Department of Legal Affairs created under the Ministry of Law.' },
  { year: '1987', event: 'Legal Services Authorities Act enacted to provide free legal aid and organize Lok Adalats.' },
  { year: '1995', event: 'National Legal Services Authority (NALSA) constituted.' },
  { year: '2005', event: 'Department of Justice formed as a separate department under the Ministry of Law and Justice.' },
  { year: '2007', event: 'e-Courts project launched for computerization of district and subordinate courts.' },
  { year: '2017', event: 'Tele-Law programme launched to provide legal aid through Common Service Centres.' },
  { year: '2019', event: 'Three new criminal codes introduced to modernize criminal justice (BNS, BNSS, BSA).' },
  { year: '2023', event: 'e-Courts Phase III launched. AI integration pilot programs for legal research initiated.' },
  { year: '2025', event: 'NyayBandhu AI Legal Assistant launched for citizen-friendly access to legal information.' },
];

const History: React.FC = () => {
  return (
    <Layout>
      <section className="bg-india-blue text-white py-12">
        <div className="container px-4">
          <h1 className="text-3xl font-bold text-center">History</h1>
          <p className="text-center mt-3 text-white/80">Department of Justice — Historical Milestones</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container px-4 max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-india-blue/20" />
            <div className="space-y-8">
              {milestones.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="relative z-10 bg-india-blue text-white rounded-full w-16 h-16 flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                    {item.year}
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4 flex-1 hover:shadow-md transition-shadow border-l-4 border-india-saffron">
                    <p className="text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default History;
