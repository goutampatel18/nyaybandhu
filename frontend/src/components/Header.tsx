import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAV_ITEMS, ABOUT_US_ITEMS } from '@/constants';
import MobileNav from '@/components/layout/MobileNav';
import SearchBar from '@/components/layout/SearchBar';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const primaryNavItems = NAV_ITEMS.filter((item) => item.path !== "/");

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      {/* Top bar with India flag colors */}
      <div className="h-1.5 w-full tricolor-gradient"></div>
      
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center mr-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 overflow-hidden">
              <img 
                src="/lovable-uploads/5df34b66-aa05-484b-b692-7a97b7508ea3.png" 
                alt="Indian Emblem"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-india-blue">NYAYBANDHU</h1>
              <p className="text-[10px] text-muted-foreground">Department of Justice</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2 justify-between flex-1">
          <div className="flex items-center space-x-1">
            <Link
              to="/"
              className={`nav-link text-sm ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            
            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`nav-link text-sm flex items-center ${location.pathname.startsWith('/about') ? 'active font-medium text-india-blue' : ''}`}>
                  About Us <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60 bg-white shadow-lg border border-india-blue/10">
                {ABOUT_US_ITEMS.map((item) => (
                  <DropdownMenuItem key={item.name} asChild className="focus:bg-india-blue/5">
                    <Link to={item.path} className={`w-full px-4 py-2 hover:bg-india-blue/5 ${location.pathname === item.path ? 'text-india-blue font-medium' : ''}`}>
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Other navigation items */}
            {primaryNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link text-sm ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:bg-india-blue/10"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            <SearchBar isOpen={isSearchOpen} />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} className="hover:bg-india-blue/10">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:bg-india-blue/10">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>

          <MobileNav
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            navItems={primaryNavItems}
            aboutUsItems={ABOUT_US_ITEMS}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
