
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroCallToAction = () => {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row justify-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-[#F97316] via-[#8B5CF6] to-[#0EA5E9] hover:from-[#0EA5E9] hover:via-[#8B5CF6] hover:to-[#F97316] text-white px-8 relative overflow-hidden group"
          onClick={() => window.open('https://discord.gg/CmTXH8ejf4', '_blank')}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#F97316] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
          <span className="relative z-10 flex items-center">
            Join the Blockchain Network <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </Button>
      </motion.div>
      
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Button 
          size="lg" 
          variant="outline"
          className="border border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10 backdrop-blur-sm"
          onClick={() => document.getElementById('workspace')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="relative z-10">Explore Web3 Ecosystem</span>
        </Button>
      </motion.div>
    </motion.div>
  );
};
