
import { motion } from "framer-motion";

export const HeroDescription = () => {
  return (
    <motion.p 
      className="text-lg md:text-xl text-mine-silver mb-10 max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      We don't just mine—we host, power, and optimize high-performance compute infrastructure 
      for AI workloads, deep learning models, and blockchain mining operations.
    </motion.p>
  );
};
