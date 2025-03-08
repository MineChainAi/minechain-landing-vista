
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Send, 
  X,
  Bot,
  Cpu,
  Code,
  Server
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

export const AIAgentChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Sample predefined responses for demo purposes
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      user: 'AI Assistant', 
      text: 'Welcome to MineChain AI Agents! I can help you learn about our custom AI solutions. How can I assist you today?', 
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }
  ]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    
    if (!isChatOpen) {
      toast({
        title: "AI Assistant",
        description: "Ask me about custom AI agents, hosting options, or integration capabilities!",
      });
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

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
        let responseText = "I'd be happy to tell you more about our AI agent capabilities. Is there a specific aspect you're interested in learning about?";
        
        // Simple keyword-based responses
        if (message.toLowerCase().includes('custom') || message.toLowerCase().includes('build')) {
          responseText = "Our build-to-suit AI agents are completely customized to your requirements. We can develop trading bots, language models, automation tools, and more. Our team works closely with you to understand your goals and design an AI solution that delivers measurable results.";
        } else if (message.toLowerCase().includes('hosting') || message.toLowerCase().includes('infrastructure')) {
          responseText = "MineChain provides enterprise-grade hosting for AI workloads on high-performance GPUs including NVIDIA A100s, H100s, and RTX 4090s. Our infrastructure ensures low latency, high efficiency, and 99% uptime for your AI agents.";
        } else if (message.toLowerCase().includes('integration') || message.toLowerCase().includes('deploy')) {
          responseText = "We can integrate your AI agents with a wide range of platforms and services, including Web3 applications, DeFi protocols, CRM systems, social media, and more. Our seamless integration ensures your AI works where you need it most.";
        } else if (message.toLowerCase().includes('security') || message.toLowerCase().includes('privacy')) {
          responseText = "Security and privacy are top priorities at MineChain. We offer on-premises AI hosting, encrypted model execution, and private AI deployment options for sensitive workloads. Your data and models remain under your control at all times.";
        } else if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
          responseText = "Our AI agent solutions are custom-priced based on your specific requirements, including model complexity, compute needs, and integration scope. We'd be happy to provide a personalized quote after understanding your project details.";
        }
        
        const aiResponse = {
          id: messages.length + 2,
          user: 'AI Assistant',
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
        aria-label="Chat with our AI assistant"
      >
        <div className="relative">
          <Brain className="w-6 h-6 text-white" />
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
              <Brain className="w-5 h-5 text-[#F97316] mr-2" />
              <h3 className="font-semibold text-white">AI Agent Assistant</h3>
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
                  <Bot className="h-3 w-3 mr-1 text-[#0EA5E9]" /> Custom AI Agents
                </div>
                <div className="flex items-center text-mine-silver">
                  <Server className="h-3 w-3 mr-1 text-[#F97316]" /> Hosting Solutions
                </div>
                <div className="flex items-center text-mine-silver">
                  <Cpu className="h-3 w-3 mr-1 text-[#0EA5E9]" /> GPU Infrastructure
                </div>
                <div className="flex items-center text-mine-silver">
                  <Code className="h-3 w-3 mr-1 text-[#F97316]" /> AI Integration
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
            <div ref={messagesEndRef} />
          </CardContent>
          
          <CardFooter className="border-t border-white/10 p-3">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about AI agents, hosting, integration..."
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
