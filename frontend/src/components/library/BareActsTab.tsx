import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { BARE_ACTS } from '@/constants';

const BareActsTab: React.FC = () => {
  return (
    <>
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Bare Acts & Rules</h2>
        <p className="text-muted-foreground">
          Browse through the collection of Indian laws, acts, and rules in their original form without annotations.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-3 text-left font-medium">Act Name</th>
              <th className="px-4 py-3 text-left font-medium">Last Updated</th>
              <th className="px-4 py-3 text-center font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {BARE_ACTS.map((act, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-4 font-medium">{act.name}</td>
                <td className="px-4 py-4 text-muted-foreground">{act.lastUpdated}</td>
                <td className="px-4 py-4 text-center">
                  <div className="flex justify-center space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/library/act/${index+1}`}>
                        <FileText className="h-4 w-4 mr-2" /> View
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" /> PDF
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline">View All Acts & Rules</Button>
      </div>
    </>
  );
};

export default BareActsTab;
