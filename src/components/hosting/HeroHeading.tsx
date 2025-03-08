
import { motion } from "framer-motion";

export const HeroHeading = () => {
  return (
    <motion.h1 
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      GPU & AI Workstation 
      <motion.span 
        className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] bg-clip-text text-transparent"
        initial={{ backgroundPosition: "0% 50%" }}
        whileHover={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 1 }}
      > Hosting</motion.span>
    </motion.h1>
  );
};
