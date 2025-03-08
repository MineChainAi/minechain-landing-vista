
import { motion } from "framer-motion";
import { ShoppingCart, Server, Chip, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MarketplaceHero = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-black" />
      <div className="absolute inset-0 bg-[url('/lovable-uploads/dec93b9a-f787-4d4b-b9e9-0c04150797af.png')] bg-cover opacity-10" />
      
      {/* Animated circuit lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-[#F97316]/30"
            style={{
              left: 0,
              top: `${15 + i * 15}%`,
              width: '100%',
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              backgroundImage: [
                'linear-gradient(90deg, transparent 0%, #F97316 50%, transparent 100%)',
                'linear-gradient(90deg, transparent 10%, #F97316 60%, transparent 100%)',
                'linear-gradient(90deg, transparent 0%, #F97316 50%, transparent 100%)',
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0EA5E9]/20 to-[#F97316]/20 px-4 py-1.5 rounded-full border border-[#F97316]/30 mb-6"
          >
            <ShoppingCart className="h-4 w-4 text-[#F97316]" />
            <span className="text-sm font-medium">The Premier Hardware Hub for Miners & AI Builders</span>
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F97316] to-[#0EA5E9]"
          >
            MineChain Marketplace
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-mine-silver mb-8"
          >
            Buy, sell, and trade high-performance computing equipment for mining,
            AI development, and blockchain applications from trusted vendors and community members.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#F97316] to-[#F97316]/80 hover:from-[#F97316]/90 hover:to-[#F97316]/70 text-white"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Browse Hardware
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10"
            >
              <Server className="mr-2 h-5 w-5" />
              Sell Equipment
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Hardware icons floating animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Chip, Server, Zap].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-[#F97316]/20"
            style={{
              right: `${10 + i * 25}%`,
              top: `${20 + i * 20}%`,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Icon className="h-16 w-16" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
