
import { useState } from 'react';
import { Button } from './ui/button';
import { 
  MessageSquare, 
  Send, 
  Smile, 
  Paperclip,
  X,
  Users
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

export const ZohoChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  
  // Mock chat messages
  const [messages, setMessages] = useState([
    { id: 1, user: 'AI Assistant', text: 'Welcome to the Innovation Hub! How can I help you today?', timestamp: '10:30 AM' },
    { id: 2, user: 'John Miller', text: 'I\'d like to learn more about the AI compute resources.', timestamp: '10:32 AM' },
    { id: 3, user: 'AI Assistant', text: 'Great! Our enterprise-grade AI compute resources include GPU clusters optimized for deep learning and inference tasks.', timestamp: '10:33 AM' },
  ]);

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
      
      // Simulate a response (in a real app, this would come from the Zoho Cliq API)
      setTimeout(() => {
        const responseMessage = {
          id: messages.length + 2,
          user: 'AI Assistant',
          text: 'Thanks for your message! A team member will respond shortly. Would you like to schedule a video meeting to discuss this further?',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prevMessages => [...prevMessages, responseMessage]);
      }, 1000);
    }
  };

  const handleZohoCliqRedirect = () => {
    toast({
      title: "Connecting to Zoho Cliq",
      description: "Opening Zoho Cliq in a new window for full chat functionality",
    });
    window.open('https://cliq.zoho.com', '_blank');
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
              <h3 className="font-semibold text-white">Innovation Hub Chat</h3>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-white hover:bg-white/10"
                onClick={handleZohoCliqRedirect}
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
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex flex-col ${msg.user === 'You' ? 'items-end' : 'items-start'}`}
              >
                <div className="text-xs text-mine-silver mb-1">{msg.user} • {msg.timestamp}</div>
                <div className={`px-3 py-2 rounded-lg max-w-[80%] ${
                  msg.user === 'You' 
                    ? 'bg-[#F97316]/20 text-white' 
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
                placeholder="Type your message..."
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
