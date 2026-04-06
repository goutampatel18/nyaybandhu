import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { NavItem } from '@/types';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  aboutUsItems: NavItem[];
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, navItems, aboutUsItems }) => {
  const location = useLocation();
  const primaryNavItems = navItems.filter((item) => item.path !== "/");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6 shadow-lg animate-slide-in-right"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
            <div className="relative h-8 w-8 overflow-hidden">
              <img
                src="/lovable-uploads/5df34b66-aa05-484b-b692-7a97b7508ea3.png"
                alt="Indian Emblem"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-lg font-bold">NYAYBANDHU</span>
          </Link>

          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <nav className="mt-6">
          <Link
            to="/"
            className={`block py-2 text-base ${location.pathname === '/' ? 'font-medium text-india-blue' : ''}`}
            onClick={onClose}
          >
            Home
          </Link>

          {/* About Us submenu */}
          <div className="py-2">
            <div className="text-base font-medium text-india-blue">About Us</div>
            <div className="pl-4 mt-1 border-l-2 border-india-blue/20 space-y-1">
              {aboutUsItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-1.5 text-sm hover:text-india-blue transition-colors ${
                    location.pathname === item.path ? 'text-india-blue font-medium' : ''
                  }`}
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {primaryNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block py-2 text-base hover:text-india-blue transition-colors ${
                location.pathname === item.path ? 'font-medium text-india-blue' : ''
              }`}
              onClick={onClose}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
