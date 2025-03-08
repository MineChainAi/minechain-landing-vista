
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Terminal, FileText, Calendar } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const MineBlocksCTA = () => {
  const [showComingSoonDialog, setShowComingSoonDialog] = useState(false);
  
  const handleStartMining = () => {
    setShowComingSoonDialog(true);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#F97316]/10 to-[#0EA5E9]/10 border border-[#1E293B] rounded-xl p-8 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              🚀 Get Started Today – Join the Most 
              <span className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] bg-clip-text text-transparent"> OG GPU Mining Pool</span> on KawPow 🚀
            </h2>
            
            <p className="text-lg text-mine-silver mb-10">
              Secure the blockchain, power AI, and earn $MINE the right way. 
              Whether you're a solo miner or operating a farm, MineChain's mining pool offers the best experience with industry-low fees.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
                onClick={handleStartMining}
              >
                Mine Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#F97316]/50 text-[#F97316] hover:bg-[#F97316]/10"
              >
                <Github className="mr-2 h-5 w-5" /> View Mining Scripts
              </Button>
            </div>
            
            <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
              <a href="#" className="inline-flex items-center text-mine-silver hover:text-white">
                <Terminal className="mr-2 h-5 w-5 text-[#F97316]" /> Mining Setup Guide
              </a>
              <a href="#" className="inline-flex items-center text-mine-silver hover:text-white">
                <FileText className="mr-2 h-5 w-5 text-[#F97316]" /> Mining FAQ
              </a>
            </div>
            
            <p className="mt-8 text-sm text-mine-silver">
              Join thousands of miners already earning with the most trusted, high-performance KawPow pool in crypto.
            </p>
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
