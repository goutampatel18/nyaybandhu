import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  isOpen: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-4 top-16 w-72 p-4 rounded-md bg-background shadow-md border animate-fade-in">
      <div className="flex space-x-2">
        <Input placeholder="Search..." className="flex-1" autoFocus />
        <Button size="sm" className="bg-india-blue hover:bg-india-blue/90">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
