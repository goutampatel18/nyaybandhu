import React from 'react';
import Layout from '@/components/Layout';
import { CheckCircle } from 'lucide-react';

const functions = [
  'Administration of justice-related legislation and constitutional provisions',
  'Appointment of Judges of the Supreme Court and High Courts',
  'Implementation of the Legal Services Authorities Act, 1987',
  'Oversight of the National Legal Services Authority (NALSA)',
  'Administration of the e-Courts project for digitization of courts',
  'Implementation of the Tele-Law programme across Common Service Centres',
  'Establishment and monitoring of Fast Track Special Courts',
  'Coordination with State governments on judiciary-related matters',
  'Policy formulation for access to justice initiatives',
  'Administration of the Nyaya Vikas (Justice Delivery and Legal Reforms) scheme',
  'Implementation of the Gram Nyayalaya Act, 2008',
  'Oversight of legal education standards and judicial training',
];

const Functions: React.FC = () => {
  return (
    <Layout>
      <section className="bg-india-blue text-white py-12">
        <div className="container px-4">
          <h1 className="text-3xl font-bold text-center">Functions of Department</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container px-4 max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The Department of Justice, under the Ministry of Law and Justice, is responsible for
            the administration and improvement of the Indian judiciary, legal aid, and access to justice programs.
          </p>
          <div className="space-y-3">
            {functions.map((fn, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4 flex items-start gap-3 hover:shadow-md transition-shadow">
                <CheckCircle className="h-5 w-5 text-india-green flex-shrink-0 mt-0.5" />
                <p className="text-sm">{fn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Functions;
