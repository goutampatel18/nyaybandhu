import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Layout from '@/components/Layout';
import ConstitutionTab from '@/components/library/ConstitutionTab';
import LegalBooksTab from '@/components/library/LegalBooksTab';
import BareActsTab from '@/components/library/BareActsTab';

const Library: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-india-blue text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className="w-full h-full">
            <path d="M500,10 L990,250 L990,750 L500,990 L10,750 L10,250 z" fill="currentColor"/>
            <path d="M500,100 L500,900 M200,250 L800,250 M200,750 L800,750" stroke="currentColor" strokeWidth="10" fill="none"/>
            <path d="M350,250 L350,750 M650,250 L650,750" stroke="currentColor" strokeWidth="10" fill="none"/>
            <path d="M150,250 C150,180 850,180 850,250" stroke="currentColor" strokeWidth="15" fill="none"/>
            <circle cx="500" cy="180" r="50" stroke="currentColor" strokeWidth="10" fill="none"/>
          </svg>
        </div>
        
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Digital Legal Library</h1>
            <p className="text-xl mb-8">
              Access the constitution, legal books, and documents in multiple languages to enhance your legal knowledge.
            </p>
            <div className="flex items-center max-w-md mx-auto bg-white/10 rounded-lg px-4 py-2">
              <Search className="h-5 w-5 text-white mr-2" />
              <Input 
                type="search" 
                placeholder="Search for legal resources..." 
                className="bg-transparent border-none text-white placeholder:text-white/70 flex-1 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Indian Emblem Vector */}
      <div className="flex justify-center -mt-16 relative z-20">
        <div className="bg-white rounded-full p-4 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20">
            <circle cx="50" cy="50" r="45" fill="#f1f5f9" stroke="#1e40af" strokeWidth="1"/>
            <path d="M50,10 A40,40 0 1,0 50,90 A40,40 0 1,0 50,10z" fill="none" stroke="#ff9933" strokeWidth="1"/>
            <path d="M50,15 A35,35 0 1,0 50,85 A35,35 0 1,0 50,15z" fill="none" stroke="#138808" strokeWidth="1"/>
            <path d="M50,30 L50,70 M30,50 L70,50 M35.86,35.86 L64.14,64.14 M35.86,64.14 L64.14,35.86" stroke="#0e1e6f" strokeWidth="2" fill="none"/>
            <circle cx="50" cy="50" r="8" fill="#0e1e6f"/>
            <circle cx="50" cy="50" r="5" fill="#f1f5f9"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <Tabs defaultValue="constitution" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-lg mx-auto mb-8">
              <TabsTrigger value="constitution">Constitution</TabsTrigger>
              <TabsTrigger value="books">Legal Books</TabsTrigger>
              <TabsTrigger value="bareacts">Bare Acts</TabsTrigger>
            </TabsList>

            <TabsContent value="constitution">
              <ConstitutionTab />
            </TabsContent>

            <TabsContent value="books">
              <LegalBooksTab />
            </TabsContent>

            <TabsContent value="bareacts">
              <BareActsTab />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Library;
