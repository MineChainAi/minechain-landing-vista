
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TokenHero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="mr-2 h-2 w-2 rounded-full bg-[#F97316] animate-pulse"></span>
            <span className="text-sm font-medium text-white/80">Fair Launch Mining Token</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient-orange">$MINE Token</span> – The Backbone of Decentralized Compute
          </h1>
          
          <p className="text-xl md:text-2xl text-mine-silver mb-12 max-w-3xl mx-auto leading-relaxed">
            A <span className="text-white font-medium">real asset-backed</span> cryptocurrency designed to power 
            <span className="text-white font-medium"> AI workloads, decentralized mining, </span> 
            and compute infrastructure.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#F97316] hover:bg-[#F97316]/90 text-white">
              Start Mining $MINE <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#F97316]/50 text-[#F97316] hover:bg-[#F97316]/10">
              Read Whitepaper
            </Button>
          </div>
          
          <div className="mt-16 p-6 rounded-xl bg-black/30 border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4">
                <p className="text-sm text-mine-silver uppercase tracking-wider mb-2">Total Supply</p>
                <p className="text-3xl font-bold text-white">23,000,000</p>
                <p className="text-sm text-[#F97316]">Hard-Capped</p>
              </div>
              <div className="p-4">
                <p className="text-sm text-mine-silver uppercase tracking-wider mb-2">Consensus</p>
                <p className="text-3xl font-bold text-white">KawPow PoW</p>
                <p className="text-sm text-[#F97316]">GPU-Optimized Mining</p>
              </div>
              <div className="p-4">
                <p className="text-sm text-mine-silver uppercase tracking-wider mb-2">Halving</p>
                <p className="text-3xl font-bold text-white">Every 2 Years</p>
                <p className="text-sm text-[#F97316]">Deflationary Model</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
