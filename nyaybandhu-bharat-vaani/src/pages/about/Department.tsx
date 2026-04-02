
import React from 'react';
import Layout from '@/components/Layout';

const Department = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">About Department</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
              <img 
                src="/lovable-uploads/5df34b66-aa05-484b-b692-7a97b7508ea3.png" 
                alt="Indian Emblem" 
                className="mx-auto h-48 object-contain"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                The Department of Justice is part of the Ministry of Law & Justice, Government of India. 
                It is responsible for the administrative functions in relation to the appointment of various 
                judges at various courts in India, maintenance and revision of the conditions and rules of 
                service of judges and other related areas.
              </p>
              <p className="mb-4">
                The Department also handles all matters relating to the National Legal Services Authority 
                and the appointment of the Law Officers of the Government. It administers the Judicial 
                Officers Protection Act, 1850 and the Contempt of Courts Act, 1971.
              </p>
              <p>
                The Department of Justice has launched NYAYBANDHU as an initiative to promote legal 
                literacy and provide access to justice for all citizens, especially those from 
                marginalized and underserved communities.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Our Mandate</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Appointment, resignation and removal of the Chief Justice of India and Judges of the Supreme Court of India.</li>
              <li>Appointment, resignation and removal of Chief Justices and Judges of High Courts.</li>
              <li>Transfer of Judges of High Courts.</li>
              <li>Administration of justice through the judiciary, legal aid to the poor under legal services authorities.</li>
              <li>Implementation of the provisions of the Constitution relating to official languages.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Key Initiatives</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Computerization of courts</li>
              <li>Infrastructure development for subordinate judiciary</li>
              <li>NYAYBANDHU - Legal assistance portal</li>
              <li>Access to Justice for the marginalized</li>
              <li>National Mission for Justice Delivery and Legal Reforms</li>
              <li>eCourts Project</li>
              <li>National Judicial Data Grid</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Department;
