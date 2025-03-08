
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  Send, 
  X,
  Bot,
  Home,
  MapPin,
  Search
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

export const RealEstateAIAgent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  
  // Sample predefined responses for demo purposes
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      user: 'AI Agent', 
      text: 'Welcome to MineChain Real Estate Hub! I can help you find the perfect industrial or energy site for your needs. How can I assist you today?', 
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }
  ]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    
    if (!isChatOpen) {
      toast({
        title: "Real Estate AI Assistant",
        description: "Ask me about industrial properties, power infrastructure, or site selection!",
      });
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim()) {
      // Add user message
      const newMessage = {
        id: messages.length + 1,
        user: 'You',
        text: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate AI response based on keywords
      setTimeout(() => {
        let responseText = "I'll need to consult with our real estate experts on that. Can you provide more details about your requirements?";
        
        // Simple keyword-based responses
        if (message.toLowerCase().includes('data center')) {
          responseText = "We have several premium data center locations available with Tier 3+ infrastructure, ranging from 15MW to 100MW capacity. Would you like me to share details on specific properties?";
        } else if (message.toLowerCase().includes('power') || message.toLowerCase().includes('energy')) {
          responseText = "MineChain specializes in sites with exceptional power advantages. We currently have properties with access to renewable energy, hydroelectric power, and grid stability features. What power capacity are you looking for?";
        } else if (message.toLowerCase().includes('location') || message.toLowerCase().includes('where')) {
          responseText = "We have premium industrial sites across North America, with particular expertise in Texas, New York, and Wyoming markets. These locations offer favorable regulation and power infrastructure. Do any of these regions interest you?";
        } else if (message.toLowerCase().includes('cost') || message.toLowerCase().includes('price')) {
          responseText = "Investment opportunities vary based on location, power capacity, and infrastructure needs. Our properties range from $5M to $50M+. Would you like to speak with one of our investment specialists about your budget requirements?";
        }
        
        const aiResponse = {
          id: messages.length + 2,
          user: 'AI Agent',
          text: responseText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        setMessages(prevMessages => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 rounded-full p-4 z-40 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Chat with our AI agent"
      >
        <div className="relative">
          <Bot className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
      </Button>

      {/* Chat window */}
      {isChatOpen && (
        <Card className="fixed bottom-24 right-6 w-[350px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-200px)] z-40 bg-black/90 border border-[#F97316]/30 flex flex-col shadow-lg shadow-[#F97316]/20 animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-[#F97316]/20 to-[#0EA5E9]/20 border-b border-white/10 flex flex-row items-center justify-between p-3">
            <div className="flex items-center">
              <Bot className="w-5 h-5 text-[#F97316] mr-2" />
              <h3 className="font-semibold text-white">Real Estate Assistant</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-white hover:bg-white/10"
              onClick={toggleChat}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-grow overflow-y-auto p-3 space-y-3">
            <div className="bg-[#F97316]/10 border border-[#F97316]/30 rounded-md p-3 mb-3">
              <p className="text-white text-sm mb-2">
                I can help you with:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center text-mine-silver">
                  <Home className="h-3 w-3 mr-1 text-[#0EA5E9]" /> Data Centers
                </div>
                <div className="flex items-center text-mine-silver">
                  <MapPin className="h-3 w-3 mr-1 text-[#F97316]" /> Site Selection
                </div>
                <div className="flex items-center text-mine-silver">
                  <Search className="h-3 w-3 mr-1 text-[#0EA5E9]" /> Power Infrastructure
                </div>
                <div className="flex items-center text-mine-silver">
                  <MessageSquare className="h-3 w-3 mr-1 text-[#F97316]" /> Investment Advice
                </div>
              </div>
            </div>
            
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex flex-col ${msg.user === 'You' ? 'items-end' : 'items-start'}`}
              >
                <div className="text-xs text-mine-silver mb-1">
                  {msg.user} • {msg.timestamp}
                </div>
                <div className={`px-3 py-2 rounded-lg max-w-[80%] ${
                  msg.user === 'You' 
                    ? 'bg-[#F97316]/20 text-white' 
                    : 'bg-[#0EA5E9]/20 text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </CardContent>
          
          <CardFooter className="border-t border-white/10 p-3">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about properties, locations, power..."
                className="flex-grow bg-black/50 border-white/10 text-white placeholder:text-white/50"
              />
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

