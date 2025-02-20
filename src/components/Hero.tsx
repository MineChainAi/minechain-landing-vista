
import { ArrowRight, Cpu, Zap, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-mine-dark">
      {/* AI Data Center Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] via-[#0F172A] to-black opacity-90" />
        
        {/* Circuit board pattern */}
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
        
        {/* Glowing orbs (representing AI nodes) */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#F97316] rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-[#0EA5E9] rounded-full blur-3xl opacity-10 animate-pulse delay-700" />
          <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-[#F97316] rounded-full blur-3xl opacity-15 animate-pulse delay-1000" />
        </div>
        
        {/* Data flow lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#F97316] to-transparent left-1/4 animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#0EA5E9] to-transparent left-2/4 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#F97316] to-transparent left-3/4 animate-pulse" style={{ animationDuration: '3.5s' }} />
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo with diamond effect */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 animate-pulse opacity-50 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] blur-2xl" />
            <img 
              src="/lovable-uploads/e50be236-f783-4a72-b2fa-46b0ded22aee.png" 
              alt="MineChain Logo" 
              className="w-32 h-32 mx-auto relative"
            />
          </div>
          
          {/* Main heading with circular dots styling */}
          <h1 className="text-7xl md:text-9xl mb-4 text-white flex items-center justify-center gap-6">
            <div className="w-6 h-6 rounded-full bg-[#F97316] shadow-lg shadow-[#F97316]/50" /> 
            <span 
              className="font-extrabold tracking-wide bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              MineChain
            </span>
            <div className="w-6 h-6 rounded-full bg-[#F97316] shadow-lg shadow-[#F97316]/50" />
          </h1>
          
          {/* Updated headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
            Where Enterprise AI Compute Meets Blockchain & Digital Creativity
          </h2>
          
          {/* Updated subheadline */}
          <p className="text-lg md:text-xl text-mine-silver mb-8 max-w-2xl mx-auto">
            Pioneering AI-integrated GPU mining, decentralized AI compute, and NFT-powered rewards—backed by next-gen NVIDIA AI GPUs.
            <span className="block mt-2 text-[#F97316]">Built by the Caballerz. Powered by Innovation. Owned by the OGs.</span>
          </p>
          
          {/* Updated feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 rounded-full border border-[#F97316]/30 bg-black/20 text-[#F97316] text-sm">
              <Server className="inline-block w-4 h-4 mr-2" /> Enterprise AI Compute
            </span>
            <span className="px-4 py-2 rounded-full border border-[#0EA5E9]/30 bg-black/20 text-[#0EA5E9] text-sm">
              ProgPoW Hybrid Mining
            </span>
            <span className="px-4 py-2 rounded-full border border-[#F97316]/30 bg-black/20 text-[#F97316] text-sm">
              <Cpu className="inline-block w-4 h-4 mr-2" /> AI-Enhanced Web3
            </span>
            <span className="px-4 py-2 rounded-full border border-[#0EA5E9]/30 bg-black/20 text-[#0EA5E9] text-sm">
              <Zap className="inline-block w-4 h-4 mr-2" /> NFT-Backed Rewards
            </span>
          </div>
          
          {/* CTA buttons with luxury styling */}
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] hover:opacity-90 text-white"
              onClick={() => window.open('https://discord.gg/A2UGvjaV', '_blank')}
            >
              Join the OG Miners on Discord <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white"
            >
              Get Started with MineChain
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
