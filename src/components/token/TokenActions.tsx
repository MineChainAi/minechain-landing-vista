
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const TokenActions = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showComingSoonDialog, setShowComingSoonDialog] = useState(false);
  
  const handleStartMining = () => {
    setShowComingSoonDialog(true);
  };
  
  const handleReadWhitepaper = () => {
    toast({
      title: "Whitepaper Access",
      description: "Opening the $MINE whitepaper documentation",
      duration: 3000,
    });
    
    setTimeout(() => {
      window.open("https://github.com/MineChainAi/minetoken", "_blank");
    }, 1000);
  };

  return (
    <>
      <motion.div 
        className="flex flex-col md:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.div 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            size="lg" 
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white relative group overflow-hidden"
            onClick={handleStartMining}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.span 
              className="relative z-10 flex items-center"
              animate={isHovered ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              Start Mining $MINE 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#F97316]/50 text-[#F97316] hover:bg-[#F97316]/10 transition-all duration-300"
            onClick={handleReadWhitepaper}
          >
            Read Whitepaper
          </Button>
        </motion.div>
      </motion.div>

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
    </>
  );
};
