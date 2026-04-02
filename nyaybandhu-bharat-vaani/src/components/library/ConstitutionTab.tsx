import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Download, FileText } from 'lucide-react';
import { CONSTITUTION_LANGUAGES } from '@/constants';

const ConstitutionTab: React.FC = () => {
  return (
    <>
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Constitution of India</h2>
        <p className="text-muted-foreground">
          The Constitution of India is the supreme law of India. It lays down the framework defining fundamental 
          political principles, establishes the structure, procedures, powers and duties of government institutions, 
          and sets out fundamental rights, directive principles, and the duties of citizens.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Available Languages</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {CONSTITUTION_LANGUAGES.map((language) => (
            <Button 
              key={language.code} 
              variant={language.available ? "outline" : "ghost"} 
              className="justify-start"
              disabled={!language.available}
            >
              <Book className="h-4 w-4 mr-2" />
              {language.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Parts of the Constitution</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Part {i + 1}</CardTitle>
                <CardDescription>Articles {i * 30 + 1} to {i * 30 + 30}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  {i === 0 && "The Union and its Territory"}
                  {i === 1 && "Citizenship"}
                  {i === 2 && "Fundamental Rights"}
                  {i === 3 && "Directive Principles of State Policy"}
                  {i === 4 && "Fundamental Duties"}
                  {i === 5 && "The Union"}
                  {i === 6 && "The States"}
                  {i === 7 && "The Union Territories"}
                  {i === 8 && "The Panchayats"}
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/constitution/part/${i+1}`}>
                    <FileText className="h-4 w-4 mr-2" /> Read Part
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button size="lg">
          <Download className="h-4 w-4 mr-2" /> Download Full Constitution
        </Button>
      </div>
    </>
  );
};

export default ConstitutionTab;
