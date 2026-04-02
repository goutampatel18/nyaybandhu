import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { useChatbot } from '@/contexts/ChatbotContext';

const ChatbotHighlight: React.FC = () => {
  const { openChatbot } = useChatbot();

  return (
    <section className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-8">
            <h2 className="text-2xl font-bold text-india-blue mb-3">AI-Powered Legal Assistant</h2>
            <p className="text-muted-foreground mb-4">
              Get instant answers to your legal questions with our AI-powered Nyaybandhu Assistant. 
              Available 24/7 in multiple languages including Hindi, English, Sindhi, and Konkani.
            </p>
            <Button 
              className="bg-india-saffron hover:bg-india-saffron/90 text-white"
              onClick={openChatbot}
            >
              Try Nyaybandhu AI
            </Button>
          </div>
          <div className="md:w-1/2 bg-muted rounded-lg p-6 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-india-blue flex items-center justify-center text-white">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="bg-background rounded-lg p-3 shadow-sm max-w-[80%]">
                <p className="text-sm">
                  Namaste! I'm Nyaybandhu Assistant. I can help you with legal information, 
                  queries about the Constitution, IPC, RTI, and more in multiple languages.
                </p>
              </div>
            </div>
            
            <div className="flex justify-end mt-3">
              <div className="bg-india-blue rounded-lg p-3 shadow-sm max-w-[80%] text-white">
                <p className="text-sm">
                  Can you tell me about the Right to Information Act?
                </p>
              </div>
            </div>
            
            <div className="flex items-end justify-center mt-4">
              <span className="text-sm text-muted-foreground">Click the chat icon to start a conversation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotHighlight;
