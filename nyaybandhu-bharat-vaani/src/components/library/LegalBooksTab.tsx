import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book } from 'lucide-react';
import { LEGAL_BOOKS } from '@/constants';

const LegalBooksTab: React.FC = () => {
  return (
    <>
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Legal Books Collection</h2>
        <p className="text-muted-foreground">
          Access a comprehensive collection of legal books, commentaries, and resources to enhance your 
          understanding of Indian law and legal principles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {LEGAL_BOOKS.map((book, index) => (
          <Card key={index} className="overflow-hidden hover-card-effect">
            <div className="h-48 overflow-hidden">
              <img 
                src={book.coverImage} 
                alt={book.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{book.title}</CardTitle>
              <CardDescription>by {book.author}, {book.year}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{book.description}</p>
              <Button variant="outline" className="w-full" asChild>
                <Link to={`/library/book/${index+1}`}>
                  <Book className="h-4 w-4 mr-2" /> View Details
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline">View All Legal Books</Button>
      </div>
    </>
  );
};

export default LegalBooksTab;
