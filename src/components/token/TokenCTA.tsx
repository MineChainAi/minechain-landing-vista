
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export const TokenCTA = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
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
  
  const handleJoinPool = () => {
    toast({
      title: "Mining Pool Information",
      description: "You'll be redirected to our mining pool setup guide.",
      duration: 3000,
    });
    
    setTimeout(() => {
      window.open("https://github.com/MineChainAi/minetoken", "_blank");
    }, 1000);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-gradient-to-r from-[#F97316]/10 to-[#0EA5E9]/10 border border-[#1E293B] rounded-xl p-8 md:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ boxShadow: "0 0 30px rgba(249, 115, 22, 0.15)" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Own the Power. 
              <motion.span 
                className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] bg-clip-text text-transparent"
                initial={{ backgroundPosition: "0% 50%" }}
                whileHover={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 1.5 }}
              >
                {" Mine the Future."}
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-mine-silver mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Start mining $MINE today and be part of the next evolution in decentralized compute.
              Join the growing network of miners, AI researchers, and blockchain builders in the MineChain ecosystem.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  disabled={isLoading}
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                >
                  <motion.span 
                    className="relative z-10 flex items-center"
                    animate={isButtonHovered && !isLoading ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {isLoading ? "Connecting..." : "Start Mining $MINE"} 
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
                  className="border-[#F97316]/50 text-[#F97316] hover:bg-[#F97316]/10"
                  onClick={handleJoinPool}
                >
                  Join Mining Pool
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="mt-6 text-sm text-mine-silver"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Early miners receive higher rewards during the initial emission phase.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
