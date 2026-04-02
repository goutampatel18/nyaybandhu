
import React from 'react';
import Layout from '@/components/Layout';

const AboutUs = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-india-blue">About Us</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6 flex justify-center">
              <img 
                src="/lovable-uploads/ca3cc9d1-9af1-4f9c-95ca-5125a8898515.png" 
                alt="Department of Justice" 
                className="h-48 object-contain"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4 text-india-saffron">NYAYBANDHU</h2>
              <p className="text-lg mb-4">
                An initiative by the Department of Justice, Government of India, 
                aimed at promoting legal literacy and providing access to justice for all citizens. 
              </p>
              <p className="mb-4">
                Our mission is to bridge the gap between citizens and the legal system by providing 
                easy-to-understand legal information, resources, and support services that empower 
                individuals to understand and exercise their legal rights.
              </p>
              <p>
                We are committed to ensuring that justice is accessible to all, especially those from 
                marginalized and underserved communities, through innovative legal services, education, 
                and technology solutions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-india-blue">Our Vision</h2>
            <p className="mb-4">
              To create a society where every citizen is aware of their legal rights and has equal access to justice.
            </p>
            <p>
              We envision a legal system that is transparent, accessible, and responsive to the needs of all citizens, 
              regardless of their socio-economic background.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-india-blue">Our Mission</h2>
            <p className="mb-4">
              To promote legal literacy and provide accessible legal services to all citizens, especially 
              those from marginalized and underserved communities.
            </p>
            <p>
              To leverage technology and innovation to bridge the gap between citizens and the legal system, 
              making justice more accessible, efficient, and transparent.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
