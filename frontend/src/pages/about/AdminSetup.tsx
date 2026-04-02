import React from 'react';
import Layout from '@/components/Layout';
import { Building2, Users, Monitor, BookOpen } from 'lucide-react';

const setupItems = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: 'Headquarters',
    details: 'Jaisalmer House, 26, Man Singh Road, New Delhi - 110011',
    description: 'The Department of Justice functions under the Ministry of Law and Justice, headed by the Secretary to the Government of India.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Divisions',
    details: '5 major divisions',
    description: 'Access to Justice, Judicial Appointments, Infrastructure Development, e-Courts and Technology, and Policy & Research divisions.',
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: 'Attached Offices',
    details: 'NALSA, e-Committee of Supreme Court',
    description: 'Works closely with the National Legal Services Authority and the e-Committee for digitization of courts.',
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Field Offices',
    details: 'Pan-India presence through SLSAs and DLSAs',
    description: 'State and District Legal Services Authorities across all states and union territories.',
  },
];

const AdminSetup: React.FC = () => {
  return (
    <Layout>
      <section className="bg-india-blue text-white py-12">
        <div className="container px-4">
          <h1 className="text-3xl font-bold text-center">Administrative Setup</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {setupItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-india-saffron">
                <div className="text-india-blue mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-india-blue mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-india-saffron mb-2">{item.details}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminSetup;
