import React from 'react';
import Layout from '@/components/Layout';

const Organization: React.FC = () => {
  return (
    <Layout>
      <section className="bg-india-blue text-white py-12">
        <div className="container px-4">
          <h1 className="text-3xl font-bold text-center">Organization Chart</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            {/* Level 1 */}
            <div className="bg-india-saffron text-white rounded-lg p-4 shadow-md text-center min-w-64">
              <p className="font-bold">Minister of Law and Justice</p>
              <p className="text-xs mt-1 opacity-80">Government of India</p>
            </div>
            <div className="w-0.5 h-8 bg-india-blue/30" />

            {/* Level 2 */}
            <div className="bg-india-blue text-white rounded-lg p-4 shadow-md text-center min-w-64">
              <p className="font-bold">Secretary, Department of Justice</p>
              <p className="text-xs mt-1 opacity-80">IAS Officer</p>
            </div>
            <div className="w-0.5 h-8 bg-india-blue/30" />

            {/* Level 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {[
                { title: 'Additional Secretary', subtitle: 'Access to Justice' },
                { title: 'Additional Secretary', subtitle: 'Judicial Appointments' },
                { title: 'Additional Secretary', subtitle: 'e-Courts & Technology' },
              ].map((item, i) => (
                <div key={i} className="bg-white border-2 border-india-blue rounded-lg p-4 shadow-sm text-center">
                  <p className="font-semibold text-india-blue text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Level 4 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full">
              {[
                'Joint Secretary (NALSA)',
                'Joint Secretary (Tele-Law)',
                'Joint Secretary (Judicial Infrastructure)',
                'Joint Secretary (Policy & Research)',
              ].map((title, i) => (
                <div key={i} className="bg-india-blue/5 border border-india-blue/20 rounded-lg p-3 shadow-sm text-center">
                  <p className="font-medium text-india-blue text-xs">{title}</p>
                </div>
              ))}
            </div>

            {/* Level 5 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
              {[
                'Director (Admin)',
                'Director (Legal Aid)',
                'Director (IT)',
                'Director (Finance)',
                'Deputy Secretary',
                'Under Secretary',
                'Section Officer',
                'Technical Staff',
              ].map((title, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-2.5 text-center hover:border-india-saffron transition-colors">
                  <p className="text-xs text-muted-foreground">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Organization;
