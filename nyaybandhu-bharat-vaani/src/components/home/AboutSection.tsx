import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About NYAYBANDHU</h2>
            <p className="text-muted-foreground mb-6">
              NYAYBANDHU is an initiative by the Department of Justice, Government of India, 
              aimed at promoting legal literacy and providing access to justice for all citizens, 
              especially those from marginalized and underserved communities.
            </p>
            <p className="text-muted-foreground mb-6">
              Our mission is to bridge the gap between citizens and the legal system by providing 
              easy-to-understand legal information, resources, and support services that empower 
              individuals to understand and exercise their legal rights.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-india-saffron">24/7</div>
                <div className="text-sm text-muted-foreground">Legal Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-india-saffron">29+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-india-saffron">1000+</div>
                <div className="text-sm text-muted-foreground">Legal Resources</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden h-40 bg-india-blue/10">
                <img 
                  src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                  alt="Legal services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-56 bg-india-green/10">
                <img 
                  src="https://images.unsplash.com/photo-1560184611-44e3dba48541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                  alt="Legal education" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden h-56 bg-india-saffron/10">
                <img 
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                  alt="Legal awareness" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-40 bg-india-blue/10">
                <img 
                  src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                  alt="Community outreach" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
