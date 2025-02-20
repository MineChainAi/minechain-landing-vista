
import { ArrowRight, Diamond, Cpu, Zap, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-mine-dark">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F97316]/10 via-transparent to-transparent animate-gradient-y" />
      </div>
      
      {/* Diagonal stripes overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-diagonal-stripes" />
      </div>
      
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
          
          {/* Main heading with luxury styling */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white flex items-center justify-center gap-4">
            <Diamond className="h-8 w-8 text-[#F97316]" /> 
            MineChain
            <Diamond className="h-8 w-8 text-[#F97316]" />
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
