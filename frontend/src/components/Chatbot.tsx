import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Send, X, Mic } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useChatbot } from '@/contexts/ChatbotContext';

const Chatbot: React.FC = () => {
  const { toast } = useToast();
  const { isOpen, messages, isTyping, openChatbot, closeChatbot, sendMessage } = useChatbot();

  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Auto-resize textarea when input changes
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    sendMessage(input);
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleVoiceToggle = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast({
        title: "Voice recording started",
        description: "Speak freely. Your voice is being processed...",
        duration: 3000,
      });
      // Simulate voice recording - in real app would use Web Speech API
      setTimeout(() => {
        setInput((prev) => prev + " How do I file an RTI application?");
        setIsRecording(false);
        toast({
          title: "Voice recording completed",
          description: "Your message has been transcribed.",
          duration: 3000,
        });
      }, 2000);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="chatbot-container">
      {isOpen ? (
        <div className="chatbot-window animate-scale-in">
          <div className="chatbot-header">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              <h3>Nyaybandhu Assistant</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={closeChatbot} className="text-white hover:text-white/80">
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-message ${msg.sender} animate-fade-in`}>
                <div className="whitespace-pre-wrap">{msg.text}</div>
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-india-blue/10">
                    <span className="text-[10px] font-semibold text-india-blue block mb-1">SOURCES:</span>
                    <ul className="space-y-1">
                      {msg.sources.map((source, idx) => (
                        <li key={idx} className="text-[10px] text-muted-foreground flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-india-saffron"></span>
                          {source.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-message bot typing">
                <span className="typing-animation"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chatbot-input-container">
            <Textarea 
              ref={textareaRef}
              value={input}
              onChange={handleTextareaChange}
              onKeyDown={handleKeyPress}
              placeholder="Type any legal question freely..."
              className="chatbot-input"
              rows={1}
              style={{ minHeight: '40px', maxHeight: '120px', resize: 'none' }}
            />
            <div className="flex gap-2">
              <Button 
                size="icon" 
                variant={isRecording ? "destructive" : "outline"} 
                title="Voice input"
                onClick={handleVoiceToggle}
                className={isRecording ? "animate-pulse" : ""}
              >
                <Mic className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                onClick={handleSendMessage} 
                disabled={input.trim() === ''}
                className="bg-india-blue hover:bg-india-blue/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Button 
          onClick={openChatbot} 
          className="chatbot-toggle floating-pulse shadow-lg shadow-india-blue/20"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default Chatbot;
