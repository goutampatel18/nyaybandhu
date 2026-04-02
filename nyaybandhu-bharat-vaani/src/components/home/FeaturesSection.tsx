import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Users, Newspaper } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-india-blue to-india-blue/90 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Legal Protection</h3>
            <p className="text-white/80">
              Understanding your rights and how to protect yourself with the power of legal knowledge.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Community Support</h3>
            <p className="text-white/80">
              Access to a network of legal professionals and community resources for assistance.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
              <Newspaper className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Latest Updates</h3>
            <p className="text-white/80">
              Stay informed about the latest legal developments, rulings, and changes to the law.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Legal Assistance?</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Our team of legal experts is ready to assist you with any questions or concerns. 
            Contact us today to get the help you need.
          </p>
          <Button className="bg-white text-india-blue hover:bg-white/90" size="lg" asChild>
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
