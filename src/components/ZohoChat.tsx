
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { 
  MessageSquare, 
  Send, 
  Smile, 
  Paperclip,
  X,
  Users,
  LogIn
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

// Zoho configuration constants
const ZOHO_TOKEN = '1000.D1MAG6KGV6C6M4433QO7KMAXSEH5EL';
const ZOHO_CLIENT_SECRET = '1aedde8528e7ca2dbcecc165487dd289178a277bfb';
const ZOHO_CLIQ_URL = 'https://cliq.zoho.com';

export const ZohoChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  
  // Mock chat messages
  const [messages, setMessages] = useState([
    { id: 1, user: 'AI Assistant', text: 'Welcome to the Innovation Hub! How can I help you today?', timestamp: '10:30 AM' },
    { id: 2, user: 'John Miller', text: 'I\'d like to learn more about the AI compute resources.', timestamp: '10:32 AM' },
    { id: 3, user: 'AI Assistant', text: 'Great! Our enterprise-grade AI compute resources include GPU clusters optimized for deep learning and inference tasks.', timestamp: '10:33 AM' },
  ]);

  // Check token validity on component mount
  useEffect(() => {
    const checkTokenValidity = () => {
      // In a production environment, this would validate the token with Zoho
      // For now, we'll simulate validation based on token existence
      if (ZOHO_TOKEN && ZOHO_TOKEN.length > 10 && ZOHO_CLIENT_SECRET && ZOHO_CLIENT_SECRET.length > 10) {
        console.log("Zoho credentials appear valid");
        setIsAuthenticated(true);
      } else {
        console.log("Zoho credentials appear invalid or missing");
        setIsAuthenticated(false);
      }
    };
    
    checkTokenValidity();
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        user: 'You',
        text: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // In a production environment, this would send the message to Zoho Cliq API
      // For now, we'll simulate a response
      if (isAuthenticated) {
        console.log(`Sending message to Zoho Cliq: ${message}`);
        // Here you would use the ZOHO_TOKEN and ZOHO_CLIENT_SECRET to authenticate the API request
        
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
    }
  };

  const handleZohoCliqRedirect = () => {
    // In a production environment, this would use the token and client secret to create a direct session
    toast({
      title: "Connecting to Zoho Cliq",
      description: "Opening Zoho Cliq with your account credentials",
    });
    
    // Redirect to Zoho Cliq with token (in a real implementation, this would use proper OAuth flow with the client secret)
    window.open(`${ZOHO_CLIQ_URL}?token=${ZOHO_TOKEN}`, '_blank');
  };

  const handleAuthenticate = () => {
    toast({
      title: "Authentication Successful",
      description: "You've been connected to your Zoho Cliq account",
    });
    setIsAuthenticated(true);
  };

  return (
    <>
      {/* Chat toggle button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 left-6 rounded-full p-4 z-40 bg-gradient-to-r from-[#F97316] to-[#0EA5E9]"
        aria-label="Open chat"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>

      {/* Chat window */}
      {isChatOpen && (
        <Card className="fixed bottom-24 left-6 w-[350px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-200px)] z-40 bg-black/90 border border-[#F97316]/30 flex flex-col shadow-lg shadow-[#F97316]/20">
          <CardHeader className="bg-gradient-to-r from-[#F97316]/20 to-[#0EA5E9]/20 border-b border-white/10 flex flex-row items-center justify-between p-3">
            <div className="flex items-center">
              <MessageSquare className="w-5 h-5 text-[#F97316] mr-2" />
              <h3 className="font-semibold text-white">
                {isAuthenticated ? 'Zoho Cliq Chat' : 'Innovation Hub Chat'}
                {isAuthenticated && <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded">Connected</span>}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-white hover:bg-white/10"
                onClick={handleZohoCliqRedirect}
                title="Open Zoho Cliq"
              >
                <Users className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-white hover:bg-white/10"
                onClick={toggleChat}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex-grow overflow-y-auto p-3 space-y-3">
            {!isAuthenticated && (
              <div className="bg-[#F97316]/10 border border-[#F97316]/30 rounded-md p-3 mb-3">
                <p className="text-white text-sm mb-2">
                  You're viewing the demo chat. Connect with your Zoho account for full functionality.
                </p>
                <Button 
                  size="sm" 
                  className="bg-[#F97316] hover:bg-[#F97316]/80 text-white w-full"
                  onClick={handleAuthenticate}
                >
                  <LogIn className="h-4 w-4 mr-2" /> Authenticate with Zoho
                </Button>
              </div>
            )}
            
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex flex-col ${msg.user === 'You' ? 'items-end' : 'items-start'}`}
              >
                <div className="text-xs text-mine-silver mb-1">
                  {msg.user} • {msg.timestamp}
                  {msg.user === 'Zoho Support' && isAuthenticated && (
                    <span className="ml-1 inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                  )}
                </div>
                <div className={`px-3 py-2 rounded-lg max-w-[80%] ${
                  msg.user === 'You' 
                    ? 'bg-[#F97316]/20 text-white' 
                    : msg.user === 'System'
                      ? 'bg-yellow-500/20 text-yellow-200 border border-yellow-500/30'
                      : 'bg-white/10 text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </CardContent>
          
          <CardFooter className="border-t border-white/10 p-3">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={isAuthenticated ? "Message Zoho Cliq..." : "Type your message..."}
                className="flex-grow bg-black/50 border-white/10 text-white placeholder:text-white/50"
              />
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10"
              >
                <Smile className="h-4 w-4" />
              </Button>
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="text-[#F97316] hover:bg-[#F97316]/10"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
};
