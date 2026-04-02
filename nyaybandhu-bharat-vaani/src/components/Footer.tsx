import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SITE_LINKS, LEGAL_LINKS, SOCIAL_LINKS } from '@/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-india-blue text-white">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-10 w-10 overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-white flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full animate-chakra-spin">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-india-blue">
                      <circle cx="12" cy="12" r="10" fill="none" stroke="#000080" strokeWidth="2" />
                      <path 
                        d="M12,2 L12,22 M2,12 L22,12 M4.93,4.93 L19.07,19.07 M4.93,19.07 L19.07,4.93" 
                        stroke="#000080" 
                        strokeWidth="1" 
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">NYAYBANDHU</h2>
                <p className="text-[10px] text-white/70">Department of Justice</p>
              </div>
            </div>
            <p className="text-sm text-white/80 mb-4">
              Nyaybandhu is an initiative by the Department of Justice to provide legal assistance and information to citizens of India.
            </p>
            <div className="flex space-x-3">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-india-saffron transition-colors"
                >
                  <span className="sr-only">{link.name}</span>
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    {link.name.charAt(0)}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Important Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Important Links</h3>
            <ul className="space-y-2 text-sm">
              {SITE_LINKS.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-white/80 hover:text-india-saffron transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal Websites */}
          <div>
            <h3 className="text-lg font-medium mb-4">Legal Websites</h3>
            <ul className="space-y-2 text-sm">
              {LEGAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-india-saffron transition-colors flex items-center"
                  >
                    <ExternalLink className="h-3 w-3 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Feedback */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact & Feedback</h3>
            <p className="text-sm text-white/80 mb-3">
              Department of Justice, Ministry of Law & Justice, 4th Floor, Jaisalmer House, 26, Mansingh Road, New Delhi-110011
            </p>
            <p className="text-sm text-white/80 mb-4">
              Email: feedback@nyaybandhu.gov.in<br />
              Phone: +91-11-23383045
            </p>
            <h4 className="text-base font-medium mb-2">Feedback</h4>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button variant="secondary">Send</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-white/70 text-sm">
          <p>© {new Date().getFullYear()} Department of Justice, Government of India. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link to="/terms" className="hover:text-india-saffron transition-colors">Terms</Link>
            <Link to="/privacy-policy" className="hover:text-india-saffron transition-colors">Privacy</Link>
            <Link to="/sitemap" className="hover:text-india-saffron transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Tricolor strip */}
      <div className="h-1.5 w-full tricolor-gradient"></div>
    </footer>
  );
};

export default Footer;
