import { ArrowRight, Cpu, Server, ChevronUp, Cloud, Shield, Database } from "lucide-react";
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
    <div className="relative min-h-[90vh] flex items-center justify-center bg-mine-dark">
      {/* AI Data Center Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced gradient overlay with animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] via-[#0F172A] to-black opacity-90 animate-gradient-y" />
        
        {/* Animated circuit board pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(90deg, #F97316 1px, transparent 1px),
              linear-gradient(0deg, #F97316 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
          }} />
        </div>
        
        {/* Enhanced glowing orbs with better animations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#F97316] rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-[#0EA5E9] rounded-full blur-3xl opacity-10 animate-pulse delay-700" />
          <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-[#F97316] rounded-full blur-3xl opacity-15 animate-pulse delay-1000" />
        </div>
        
        {/* Enhanced data flow lines with better animations */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#F97316] to-transparent left-1/4 animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#0EA5E9] to-transparent left-2/4 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#F97316] to-transparent left-3/4 animate-pulse" style={{ animationDuration: '3.5s' }} />
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Enhanced logo with diamond effect */}
          <div className="mb-8 relative group">
            <div className="absolute inset-0 animate-pulse opacity-50 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] blur-2xl group-hover:opacity-75 transition-opacity duration-300" />
            <img 
              src="/lovable-uploads/e50be236-f783-4a72-b2fa-46b0ded22aee.png" 
              alt="MineChain Logo" 
              className="w-32 h-32 mx-auto relative transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          
          {/* Enhanced main heading with line styling */}
          <h1 className="text-5xl md:text-7xl mb-4 text-white flex items-center justify-center gap-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#F97316] to-transparent animate-pulse" /> 
            <span 
              className="font-extrabold tracking-wide bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              MineChain
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-[#F97316] to-transparent animate-pulse" />
          </h1>
          
          {/* Enhanced headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent animate-fade-in">
            The Future of Decentralized Infrastructure & AI Compute
          </h2>
          
          {/* Enhanced subheadline */}
          <p className="text-lg md:text-xl text-mine-silver mb-8 max-w-2xl mx-auto animate-fade-in">
            Powering the next generation of Web3 applications and AI workloads through enterprise-grade infrastructure, Layer 1 blockchain technology, and integrated AI solutions.
            <span className="block mt-2 text-[#F97316] hover:scale-105 transition-transform duration-300">Infrastructure • Innovation • Intelligence</span>
          </p>
          
          {/* Enhanced feature badges with hover effects */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 rounded-full border border-[#F97316]/30 bg-black/20 text-[#F97316] text-sm hover:bg-[#F97316]/10 transition-colors duration-300 hover:scale-105 transform cursor-pointer">
              <Server className="inline-block w-4 h-4 mr-2" /> Enterprise AI Compute
            </span>
            <span className="px-4 py-2 rounded-full border border-[#0EA5E9]/30 bg-black/20 text-[#0EA5E9] text-sm hover:bg-[#0EA5E9]/10 transition-colors duration-300 hover:scale-105 transform cursor-pointer">
              <Shield className="inline-block w-4 h-4 mr-2" /> ProgPoW Layer 1
            </span>
            <span className="px-4 py-2 rounded-full border border-[#F97316]/30 bg-black/20 text-[#F97316] text-sm hover:bg-[#F97316]/10 transition-colors duration-300 hover:scale-105 transform cursor-pointer">
              <Cpu className="inline-block w-4 h-4 mr-2" /> AI Infrastructure
            </span>
            <span className="px-4 py-2 rounded-full border border-[#0EA5E9]/30 bg-black/20 text-[#0EA5E9] text-sm hover:bg-[#0EA5E9]/10 transition-colors duration-300 hover:scale-105 transform cursor-pointer">
              <Cloud className="inline-block w-4 h-4 mr-2" /> IaaS & BaaS
            </span>
            <span className="px-4 py-2 rounded-full border border-[#F97316]/30 bg-black/20 text-[#F97316] text-sm hover:bg-[#F97316]/10 transition-colors duration-300 hover:scale-105 transform cursor-pointer">
              <Database className="inline-block w-4 h-4 mr-2" /> Decentralized Storage
            </span>
          </div>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] hover:opacity-90 text-white transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://discord.gg/CmTXH8ejf4', '_blank')}
            >
              Join the Innovation Hub <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://discord.gg/CmTXH8ejf4', '_blank')}
            >
              Explore MineChain Solutions
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 p-4 rounded-full bg-[#F97316] text-white shadow-lg transition-all duration-300 hover:bg-[#0EA5E9] z-50",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  );
};
