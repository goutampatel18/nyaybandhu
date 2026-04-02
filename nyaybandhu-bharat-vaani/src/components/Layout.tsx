
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 indian-pattern">
        {children}
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Layout;
