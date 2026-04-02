import type { NavItem, ExternalLink } from '@/types';

// ========================
// Header Navigation
// ========================

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Resources', path: '/resources' },
  { name: 'Library', path: '/library' },
  { name: 'Case Histories', path: '/cases' },
  { name: 'News', path: '/news' },
  { name: 'Acts & Rules', path: '/acts-rules' },
  { name: 'Circulars', path: '/circulars' },
  { name: 'Contact Us', path: '/contact' },
];

export const ABOUT_US_ITEMS: NavItem[] = [
  { name: 'About Us', path: '/about' },
  { name: 'Department', path: '/about/department' },
  { name: 'History', path: '/about/history' },
  { name: 'Vision and Mission', path: '/about/vision' },
  { name: 'Functions of Department', path: '/about/functions' },
  { name: 'Organization Chart', path: '/about/organization' },
  { name: 'Administrative Setup', path: '/about/admin' },
  { name: "Who's Who", path: '/about/whos-who' },
  { name: 'Monthly Achievements', path: '/about/achievements' },
  { name: "Citizens' Charter", path: '/about/charter' },
];

// ========================
// Footer Navigation
// ========================

export const SITE_LINKS: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Resources', path: '/resources' },
  { name: 'Library', path: '/library' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Acts & Rules', path: '/acts-rules' },
  { name: 'Circulars', path: '/circulars' },
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Accessibility', path: '/accessibility' },
  { name: 'Sitemap', path: '/sitemap' },
];

export const LEGAL_LINKS: ExternalLink[] = [
  { name: 'Supreme Court of India', url: 'https://main.sci.gov.in/' },
  { name: 'Ministry of Law and Justice', url: 'https://lawmin.gov.in/' },
  { name: 'National Legal Services Authority', url: 'https://nalsa.gov.in/' },
  { name: 'e-Courts', url: 'https://ecourts.gov.in/' },
  { name: 'Indian Kanoon', url: 'https://indiankanoon.org/' },
  { name: 'Legal Information Institute of India', url: 'https://www.liiofindia.org/' },
];

export const SOCIAL_LINKS: ExternalLink[] = [
  { name: 'Twitter', url: 'https://twitter.com/' },
  { name: 'Facebook', url: 'https://facebook.com/' },
  { name: 'LinkedIn', url: 'https://linkedin.com/' },
  { name: 'YouTube', url: 'https://youtube.com/' },
];
