import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Book, FileText, Gavel, Library } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const SERVICES: ServiceItem[] = [
  {
    title: "Legal Assistance",
    description: "Access to legal advice and representation through our network of legal professionals.",
    icon: <Gavel className="h-10 w-10 text-india-saffron" />,
    link: "/services",
  },
  {
    title: "Legal Education",
    description: "Resources to understand your rights, duties and the legal system of India.",
    icon: <Book className="h-10 w-10 text-india-saffron" />,
    link: "/resources",
  },
  {
    title: "Digital Library",
    description: "Access the Constitution of India, legal books, and judicial documents.",
    icon: <Library className="h-10 w-10 text-india-saffron" />,
    link: "/library",
  },
  {
    title: "Case Repository",
    description: "Comprehensive database of legal case histories from Indian courts.",
    icon: <FileText className="h-10 w-10 text-india-saffron" />,
    link: "/cases",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nyaybandhu offers a comprehensive range of legal services to ensure justice 
            and legal awareness for all citizens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <Card key={index} className="hover-card-effect border-t-4 border-t-india-saffron">
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="text-india-blue p-0">
                  <Link to={service.link} className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
