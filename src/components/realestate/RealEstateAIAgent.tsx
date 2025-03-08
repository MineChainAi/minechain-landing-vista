
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  Send, 
  X,
  Bot,
  Home,
  MapPin,
  Search,
  Brain,
  MoveRight,
  Cpu
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

export const RealEstateAIAgent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    
    if (!isChatOpen) {
      toast({
        title: "Real Estate AI Assistant",
        description: "Ask me about industrial properties, power infrastructure, or site selection!",
      });
    }
  };

  const redirectToChat = (chatType: string) => {
    // Close current chat
    setIsChatOpen(false);
    
    // Simulate clicking on the appropriate chat button
    setTimeout(() => {
      let chatElement;
      
      if (chatType === 'ai') {
        // Find and click AI Agent chat button
        chatElement = document.querySelector('[aria-label="Chat with our AI assistant"]');
        toast({
          title: "Switching to AI Agent Chat",
          description: "Redirecting you to our AI expertise assistant",
        });
      } else if (chatType === 'zoho') {
        // Find and click Zoho chat button
        chatElement = document.querySelector('[aria-label="Open chat"]');
        toast({
          title: "Switching to Innovation Hub Chat",
          description: "Redirecting you to our customer support team",
        });
      }
      
      if (chatElement && chatElement instanceof HTMLElement) {
        chatElement.click();
      }
    }, 300);
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
        } else if (message.toLowerCase().includes('ai') || message.toLowerCase().includes('intelligence')) {
          responseText = "For questions about our AI solutions and custom AI agents, I recommend speaking with our AI specialist. Would you like me to connect you?";
          responseText += " <ai-redirect>";
        } else if (message.toLowerCase().includes('support') || message.toLowerCase().includes('help')) {
          responseText = "For technical support or general inquiries about MineChain services, our customer success team is ready to help. Would you like me to connect you with them?";
          responseText += " <zoho-redirect>";
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
        className="fixed bottom-24 right-6 rounded-full p-4 z-40 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Chat with our real estate AI agent"
      >
        <div className="relative">
          <Home className="w-6 h-6 text-white" />
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
              <Home className="w-5 h-5 text-[#F97316] mr-2" />
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
            
            <div className="flex flex-wrap gap-2 mb-3">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => redirectToChat('ai')}
                className="flex items-center gap-1 border-[#0EA5E9]/30 hover:bg-[#0EA5E9]/10 text-xs py-1 h-auto"
              >
                <Brain className="h-3 w-3 text-[#0EA5E9]" />
                <span>AI Solutions</span>
                <MoveRight className="h-3 w-3" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => redirectToChat('zoho')}
                className="flex items-center gap-1 border-[#F97316]/30 hover:bg-[#F97316]/10 text-xs py-1 h-auto"
              >
                <MessageSquare className="h-3 w-3 text-[#F97316]" />
                <span>Support</span>
                <MoveRight className="h-3 w-3" />
              </Button>
            </div>
            
            {messages.map((msg) => {
              // Check if the message contains redirect tags and render appropriate buttons
              const hasAiRedirect = msg.text.includes('<ai-redirect>');
              const hasZohoRedirect = msg.text.includes('<zoho-redirect>');
              
              // Clean the message text for display
              const cleanText = msg.text
                .replace('<ai-redirect>', '')
                .replace('<zoho-redirect>', '');
              
              return (
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
                    {cleanText}
                    
                    {/* Render redirect buttons if needed */}
                    {(hasAiRedirect || hasZohoRedirect) && (
                      <div className="mt-2 flex gap-2">
                        {hasAiRedirect && (
                          <Button 
                            size="sm" 
                            className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/80 text-white text-xs py-1 h-auto flex items-center gap-1"
                            onClick={() => redirectToChat('ai')}
                          >
                            <Brain className="h-3 w-3" />
                            <span>Connect with AI Specialist</span>
                          </Button>
                        )}
                        
                        {hasZohoRedirect && (
                          <Button 
                            size="sm" 
                            className="bg-[#F97316] hover:bg-[#F97316]/80 text-white text-xs py-1 h-auto flex items-center gap-1"
                            onClick={() => redirectToChat('zoho')}
                          >
                            <MessageSquare className="h-3 w-3" />
                            <span>Connect with Support</span>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
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
