import React from 'react';
import Layout from '@/components/Layout';
import { User } from 'lucide-react';

const officials = [
  { name: 'Secretary, Department of Justice', designation: 'Head of Department', rank: 'Secretary to Government of India' },
  { name: 'Additional Secretary (Access to Justice)', designation: 'Oversees NALSA and Tele-Law programmes', rank: 'Additional Secretary' },
  { name: 'Additional Secretary (Judicial Appointments)', designation: 'Manages High Court and Supreme Court appointments', rank: 'Additional Secretary' },
  { name: 'Joint Secretary (Infrastructure)', designation: 'Judicial infrastructure development across India', rank: 'Joint Secretary' },
  { name: 'Joint Secretary (e-Courts)', designation: 'Digitization of courts and IT initiatives', rank: 'Joint Secretary' },
  { name: 'Joint Secretary (Policy)', designation: 'Legal reforms and policy research', rank: 'Joint Secretary' },
];

const WhosWho: React.FC = () => {
  return (
    <Layout>
      <section className="bg-india-blue text-white py-12">
        <div className="container px-4">
          <h1 className="text-3xl font-bold text-center">Who's Who</h1>
          <p className="text-center mt-3 text-white/80">Key Officials of the Department of Justice</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officials.map((official, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-india-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-india-blue" />
                </div>
                <h3 className="font-semibold text-india-blue text-sm mb-1">{official.name}</h3>
                <p className="text-xs text-india-saffron font-medium mb-2">{official.rank}</p>
                <p className="text-xs text-muted-foreground">{official.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhosWho;
