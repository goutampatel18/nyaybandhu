import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import ChatbotHighlight from '@/components/home/ChatbotHighlight';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import LatestUpdatesSection from '@/components/home/LatestUpdatesSection';
import FeaturesSection from '@/components/home/FeaturesSection';

const Index: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ChatbotHighlight />
      <ServicesSection />
      <AboutSection />
      <LatestUpdatesSection />
      <FeaturesSection />
    </Layout>
  );
};

export default Index;
