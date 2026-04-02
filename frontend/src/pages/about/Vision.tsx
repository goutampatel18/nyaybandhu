import React from 'react';
import Layout from '@/components/Layout';
import { Target, Eye } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <Layout>
      <section className="bg-india-blue text-white py-12">
        <div className="container px-4">
          <h1 className="text-3xl font-bold text-center">Vision & Mission</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-india-saffron">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="h-8 w-8 text-india-saffron" />
                <h2 className="text-2xl font-bold text-india-blue">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To create a just society where every citizen, regardless of their social or economic status,
                has equal access to justice and is aware of their legal rights and entitlements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision an India where the rule of law is upheld effectively, legal processes are
                transparent and efficient, and technology bridges the gap between citizens and the justice system.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-india-green">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-india-green" />
                <h2 className="text-2xl font-bold text-india-blue">Our Mission</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex gap-2"><span className="text-india-saffron font-bold">•</span>Promote legal literacy across all sections of society</li>
                <li className="flex gap-2"><span className="text-india-saffron font-bold">•</span>Provide free legal aid to marginalized and vulnerable communities</li>
                <li className="flex gap-2"><span className="text-india-saffron font-bold">•</span>Leverage AI and digital technology to improve access to justice</li>
                <li className="flex gap-2"><span className="text-india-saffron font-bold">•</span>Reduce case pendency through technology-driven court management</li>
                <li className="flex gap-2"><span className="text-india-saffron font-bold">•</span>Strengthen the network of Legal Services Authorities at national, state, and district levels</li>
                <li className="flex gap-2"><span className="text-india-saffron font-bold">•</span>Promote alternative dispute resolution mechanisms including Lok Adalats and mediation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vision;
