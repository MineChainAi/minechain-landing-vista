import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center hero-gradient">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mine-blue/10 via-transparent to-transparent animate-gradient-y" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/e50be236-f783-4a72-b2fa-46b0ded22aee.png" 
              alt="MineChain Logo" 
              className="w-32 h-32 mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-mine-silver bg-clip-text text-transparent">
            Empowering the Future with Compute Power
          </h1>
          <p className="text-lg md:text-xl text-mine-silver mb-8 max-w-2xl mx-auto">
            A Layer 1 Proof-of-Work blockchain powering AI, Web3 applications, and decentralized compute services
          </p>
          <Button size="lg" className="bg-mine-blue hover:bg-mine-blue/90 text-white">
            Join the Network <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};