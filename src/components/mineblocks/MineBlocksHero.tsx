
import { Button } from "@/components/ui/button";
import { ArrowRight, Pickaxe, Calendar } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const MineBlocksHero = () => {
  const [showComingSoonDialog, setShowComingSoonDialog] = useState(false);
  
  const handleStartMining = () => {
    setShowComingSoonDialog(true);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-0"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F97316]/20 to-[#0EA5E9]/20 rounded-full px-6 py-2 mb-6 border border-white/10">
            <Pickaxe className="h-5 w-5 text-[#F97316]" />
            <span className="text-sm font-medium text-white">MineChain Mining Pool</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F97316]">
            The OG Home for $MINE Miners
          </h1>
          
          <p className="text-xl text-mine-silver mb-10 max-w-3xl mx-auto">
            Mine Smarter. Earn More. Stay Decentralized. Join the ultimate GPU-friendly KawPow PoW mining hub designed for true miners, AI pioneers, and blockchain builders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
              onClick={handleStartMining}
            >
              Start Mining Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#F97316]/50 text-[#F97316] hover:bg-[#F97316]/10"
            >
              View Mining Stats
            </Button>
          </div>
          
          <div className="mt-12 py-4 px-6 bg-black/30 rounded-lg border border-white/10 inline-block">
            <code className="text-[#F97316]">stratum+tcp://minechainpool.com:3333</code>
          </div>
        </div>
      </div>

      <Dialog open={showComingSoonDialog} onOpenChange={setShowComingSoonDialog}>
        <DialogContent className="bg-mine-dark border-[#F97316]/20 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Calendar className="h-6 w-6 text-[#F97316]" /> 
              Coming Soon - Q3 Release
            </DialogTitle>
            <DialogDescription className="text-mine-silver mt-2">
              The $MINE mining functionality is scheduled for release in Q3. Join our community to stay updated and be the first to start mining when it launches!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <Button 
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
              onClick={() => setShowComingSoonDialog(false)}
            >
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
