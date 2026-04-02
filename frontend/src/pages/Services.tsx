import React from 'react';
import Layout from '@/components/Layout';
import { Scale, Users, FileText, Building, Gavel, ShieldCheck, BookOpen, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: <Scale className="h-8 w-8" />,
    title: 'Free Legal Aid',
    description: 'Access free legal assistance through the National Legal Services Authority (NALSA) and State Legal Services Authorities. Available for economically weaker sections, SC/ST communities, women, children, and persons with disabilities.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Lok Adalat (People\'s Court)',
    description: 'Resolve disputes through Lok Adalats which provide amicable settlement of disputes at pre-litigation and post-litigation stages. No court fees are required and decisions are binding.',
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Legal Awareness Programs',
    description: 'Participate in legal awareness camps, workshops, and seminars conducted across villages and urban areas to inform citizens about their fundamental rights and legal entitlements.',
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: 'Tele-Law Services',
    description: 'Connect with lawyers through video conferencing from Common Service Centres (CSCs) across India. Over 75,000 CSCs provide tele-law services to rural and semi-urban citizens.',
  },
  {
    icon: <Gavel className="h-8 w-8" />,
    title: 'Alternative Dispute Resolution',
    description: 'Resolve disputes outside the courts through mediation, arbitration, and conciliation. ADR provides faster, cost-effective resolution for civil, commercial, and family disputes.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Victim Compensation Scheme',
    description: 'Financial assistance to victims of crimes including acid attacks, sexual assault, and other offences under the Victim Compensation Scheme implemented by State Legal Services Authorities.',
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Legal Literacy Clubs',
    description: 'Join Legal Literacy Clubs established in schools, colleges, and communities to develop legal awareness. Over 15,000 clubs operate across India promoting legal education.',
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: 'AI Legal Assistant',
    description: 'Get instant answers to your legal queries through our AI-powered NyayBandhu chatbot. Available 24/7 with knowledge of Indian Constitution, laws, and legal procedures.',
  },
];

const Services: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl">
              Empowering citizens with accessible legal services, aid programs, and technology-driven solutions
              to bridge the gap between people and the justice system.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-india-saffron group"
              >
                <div className="text-india-blue mb-4 group-hover:text-india-saffron transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-india-blue">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-india-blue/5 py-12">
        <div className="container px-4 text-center">
          <h2 className="text-2xl font-bold text-india-blue mb-4">Need Legal Help?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you are unable to afford legal services, you may be eligible for free legal aid
            under the Legal Services Authorities Act, 1987. Contact your nearest District Legal Services Authority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://nalsa.gov.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-india-blue text-white rounded-lg hover:bg-india-blue/90 transition-colors font-medium">
              Visit NALSA Website
            </a>
            <a href="tel:15100" className="inline-flex items-center justify-center px-6 py-3 border-2 border-india-blue text-india-blue rounded-lg hover:bg-india-blue/5 transition-colors font-medium">
              Call Helpline: 15100
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
