
import { motion } from "framer-motion";

export const HeroBackground = () => {
  return (
    <>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-transparent" />
      
      {/* Background grid with subtle animation */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#F97316 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 100,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </>
  );
};
