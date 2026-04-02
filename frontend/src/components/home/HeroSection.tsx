import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useChatbot } from '@/contexts/ChatbotContext';

const HeroSection: React.FC = () => {
  const { openChatbot } = useChatbot();

  return (
    <section className="relative bg-gradient-to-r from-india-blue to-india-blue/90 text-white">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="ashoka-chakra" patternUnits="userSpaceOnUse" width="100" height="100">
              <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="2" />
              <path d="M50,20 L50,80 M20,50 L80,50 M29.3,29.3 L70.7,70.7 M29.3,70.7 L70.7,29.3" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ashoka-chakra)" />
        </svg>
      </div>

      <div className="container relative z-10 px-6 py-24 mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            NYAYBANDHU
            <span className="block text-india-saffron">Justice for All</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 text-white/80">
            Empowering citizens through legal awareness, resources, and support - upholding the 
            principles of justice as enshrined in the Constitution of India.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-india-saffron hover:bg-india-saffron/90 text-white" asChild>
              <Link to="/services">Access Legal Services</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-india-blue"
              onClick={openChatbot}
            >
              Consult Legal AI
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/2e769634-f83f-46b0-833e-82ac0b3e7446.png" 
                alt="Supreme Court of India" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-india-saffron rounded-full hidden md:flex items-center justify-center text-white font-bold text-sm p-2 text-center">
              24/7 Legal Support
            </div>
          </div>
        </div>
      </div>

      <div className="h-1.5 w-full tricolor-gradient"></div>
    </section>
  );
};

export default HeroSection;
