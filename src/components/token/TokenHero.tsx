
import { motion } from "framer-motion";
import { TokenDescription } from "./TokenDescription";
import { TokenActions } from "./TokenActions";
import { TokenStats } from "./TokenStats";

export const TokenHero = () => {
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
          <TokenDescription />
          <TokenActions />
          <TokenStats />
        </motion.div>
      </div>
    </section>
  );
};
