
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 px-4 text-center">
        <div className="mb-6">
          <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-6 mx-auto">
            <span className="text-5xl font-bold text-india-blue">404</span>
          </div>
          <h1 className="text-4xl font-bold text-india-blue mb-4">Page Not Found</h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="default" className="bg-india-blue hover:bg-india-blue/90" asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go to Homepage
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
