
import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ChatButton } from './ChatButton';
import { ChatHeader } from './ChatHeader';
import { MessageInput } from './MessageInput';
import { MessageList, ChatMessage } from './MessageList';
import { useAuthService } from './AuthService';

export const ZohoChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authService = useAuthService();
  
  // Mock chat messages
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, user: 'AI Assistant', text: 'Welcome to the Innovation Hub! How can I help you today?', timestamp: '10:30 AM' },
    { id: 2, user: 'John Miller', text: 'I\'d like to learn more about the AI compute resources.', timestamp: '10:32 AM' },
    { id: 3, user: 'AI Assistant', text: 'Great! Our enterprise-grade AI compute resources include GPU clusters optimized for deep learning and inference tasks.', timestamp: '10:33 AM' },
  ]);

  // Check token validity on component mount
  useEffect(() => {
    const isValid = authService.checkTokenValidity();
    setIsAuthenticated(isValid);
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = (message: string) => {
    const newMessage = {
      id: messages.length + 1,
      user: 'You',
      text: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    
    // In a production environment, this would send the message to Zoho Cliq API
    // For now, we'll simulate a response
    if (isAuthenticated) {
      console.log(`Sending message to Zoho Cliq: ${message}`);
      
      setTimeout(() => {
        const responseMessage = {
          id: messages.length + 2,
          user: 'Zoho Support',
          text: 'Thank you for your message. Your query has been received and a team member will respond shortly. Would you like to schedule a video meeting to discuss this further?',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prevMessages => [...prevMessages, responseMessage]);
      }, 1000);
    } else {
      // Handle unauthenticated state
      setTimeout(() => {
        const responseMessage = {
          id: messages.length + 2,
          user: 'System',
          text: 'You appear to be disconnected from Zoho Cliq. Please authenticate to enable full chat functionality.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prevMessages => [...prevMessages, responseMessage]);
      }, 500);
    }
  };

  const handleAuthenticate = () => {
    const isAuthSuccessful = authService.authenticateUser();
    setIsAuthenticated(isAuthSuccessful);
  };

  return (
    <>
      {/* Chat toggle button */}
      <ChatButton onClick={toggleChat} />

      {/* Chat window */}
      {isChatOpen && (
        <Card className="fixed bottom-24 left-6 w-[350px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-200px)] z-40 bg-black/90 border border-[#F97316]/30 flex flex-col shadow-lg shadow-[#F97316]/20">
          <CardHeader className="p-0">
            <ChatHeader 
              isAuthenticated={isAuthenticated} 
              onToggleChat={toggleChat} 
              onRedirectToZoho={authService.redirectToZohoCliq}
            />
          </CardHeader>
          
          <CardContent className="flex-grow p-0 overflow-hidden">
            <MessageList 
              messages={messages} 
              isAuthenticated={isAuthenticated} 
              onAuthenticate={handleAuthenticate}
            />
          </CardContent>
          
          <CardFooter className="border-t border-white/10 p-3">
            <MessageInput 
              isAuthenticated={isAuthenticated} 
              onSendMessage={handleSendMessage}
            />
          </CardFooter>
        </Card>
      )}
    </>
  );
};
