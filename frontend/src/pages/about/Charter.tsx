import React from 'react';
import Layout from '@/components/Layout';
import { FileText, Clock, PhoneCall, Shield } from 'lucide-react';

const charterItems = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Our Commitment',
    points: [
      'Provide access to justice for all citizens, especially the marginalized',
      'Ensure transparency in all departmental processes',
      'Deliver services within defined timelines',
      'Maintain highest standards of integrity in service delivery',
    ],
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Service Standards',
    points: [
      'Tele-Law consultation: Within 24 hours of registration',
      'Legal aid application processing: Within 7 working days',
      'Grievance acknowledgment: Within 3 working days',
      'Grievance resolution: Within 30 working days',
    ],
  },
  {
    icon: <PhoneCall className="h-6 w-6" />,
    title: 'Grievance Redressal',
    points: [
      'In case of service deficiency, citizens may file a grievance through CPGRAMS',
      'Dedicated grievance officers at district, state, and national levels',
      'Escalation mechanism for unresolved grievances',
      'Regular monitoring and review of grievance status',
    ],
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Citizen Obligations',
    points: [
      'Provide accurate information in applications and forms',
      'Cooperate with legal service providers and officers',
      'Respect court procedures and legal processes',
      'Report any malpractice or corruption through proper channels',
    ],
  },
];

const Charter: React.FC = () => {
  return (
    <Layout>
      <section className="bg-india-blue text-white py-12">
        <div className="container px-4">
          <h1 className="text-3xl font-bold text-center">Citizens' Charter</h1>
          <p className="text-center mt-3 text-white/80">Our pledge to the citizens of India</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {charterItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-india-saffron">{item.icon}</div>
                  <h3 className="text-lg font-bold text-india-blue">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-india-green font-bold mt-0.5">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Charter;
