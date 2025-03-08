
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export const TokenHero = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleStartMining = () => {
    setIsLoading(true);
    toast({
      title: "Mining Activation Initiated",
      description: "Connecting to MineChain network. You'll be mining $MINE soon!",
      duration: 5000,
    });
    
    // Simulate connection process
    setTimeout(() => {
      setIsLoading(false);
      window.open("https://github.com/MineChainAi/minetoken", "_blank");
    }, 2000);
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
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-30 z-0">
        <motion.div 
          className="w-full h-full"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="mr-2 h-2 w-2 rounded-full bg-[#F97316] animate-pulse"></span>
            <span className="text-sm font-medium text-white/80">Fair Launch Mining Token</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-gradient-orange">$MINE Token</span> – The Backbone of Decentralized Compute
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-mine-silver mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A <span className="text-white font-medium">real asset-backed</span> cryptocurrency designed to power 
            <span className="text-white font-medium"> AI workloads, decentralized mining, </span> 
            and compute infrastructure.
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white relative group overflow-hidden"
              onClick={handleStartMining}
              disabled={isLoading}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.span 
                className="relative z-10 flex items-center"
                animate={isHovered && !isLoading ? { x: [0, 5, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                {isLoading ? "Connecting..." : "Start Mining $MINE"} 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#F97316]/50 text-[#F97316] hover:bg-[#F97316]/10 transition-all duration-300"
              onClick={handleReadWhitepaper}
              whileHover={{ scale: 1.03 }}
              as={motion.button}
            >
              Read Whitepaper
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16 p-6 rounded-xl bg-black/30 border border-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ boxShadow: "0 0 25px rgba(249, 115, 22, 0.2)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <p className="text-sm text-mine-silver uppercase tracking-wider mb-2">Total Supply</p>
                <motion.p 
                  className="text-3xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.8 }}
                >
                  23,000,000
                </motion.p>
                <p className="text-sm text-[#F97316]">Hard-Capped</p>
              </motion.div>
              <motion.div 
                className="p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <p className="text-sm text-mine-silver uppercase tracking-wider mb-2">Consensus</p>
                <motion.p 
                  className="text-3xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  KawPow PoW
                </motion.p>
                <p className="text-sm text-[#F97316]">GPU-Optimized Mining</p>
              </motion.div>
              <motion.div 
                className="p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <p className="text-sm text-mine-silver uppercase tracking-wider mb-2">Halving</p>
                <motion.p 
                  className="text-3xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                >
                  Every 2 Years
                </motion.p>
                <p className="text-sm text-[#F97316]">Deflationary Model</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
