
import { ArrowRight, Cpu, Server, ChevronUp, Shield, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-[#0F172A]">
      {/* Simplified background with solid colors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Solid color background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#0A0F1D]" />
        
        {/* Subtle pattern overlay for texture without the web3 feel */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yMCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo with square styling */}
          <div className="mb-8 flex justify-center">
            <div className="p-2 bg-[#F97316]/10 border border-[#F97316]/20 rounded-lg">
              <img 
                src="/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png"
                alt="MineChain AI Logo" 
                className="w-24 h-24 object-cover"
              />
            </div>
          </div>
          
          {/* Main heading with solid styling */}
          <h1 className="text-5xl md:text-7xl mb-4 font-extrabold text-white">
            <span className="bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
              MineChain
            </span>
          </h1>
          
          {/* Subheadline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Innovation Hub
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-mine-silver mb-8 max-w-2xl mx-auto">
            Fueling the next evolution of AI-driven compute power, decentralized infrastructure, and enterprise-grade data centers through Layer 1 blockchain technology, scalable GPU solutions, and investment-grade real estate.
            <span className="block mt-2 text-[#F97316]">Infrastructure • Innovation • Intelligence</span>
          </p>
          
          {/* Feature badges with solid styling */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] text-sm">
              <Server className="inline-block w-4 h-4 mr-2" /> Enterprise AI Compute
            </span>
            <span className="px-4 py-2 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 text-[#0EA5E9] text-sm">
              <Shield className="inline-block w-4 h-4 mr-2" /> Full Stack Miners
            </span>
            <span className="px-4 py-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] text-sm">
              <Cpu className="inline-block w-4 h-4 mr-2" /> Community Driven
            </span>
            <span className="px-4 py-2 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 text-[#0EA5E9] text-sm">
              <Video className="inline-block w-4 h-4 mr-2" /> Zoho Meeting Integration
            </span>
          </div>
          
          {/* CTA buttons with solid styling */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8"
              onClick={() => window.open('https://discord.gg/CmTXH8ejf4', '_blank')}
            >
              Join the Innovation Hub <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10"
              onClick={() => document.getElementById('workspace')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Collaboration Spaces
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 p-4 rounded-full bg-[#F97316] text-white shadow-lg transition-all duration-300 hover:bg-[#F97316]/90 z-50",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  );
};
