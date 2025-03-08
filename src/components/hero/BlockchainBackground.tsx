
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const BlockchainBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#0A0F1D]" />
      
      {/* Animated blockchain grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Blockchain connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {/* Horizontal connections */}
        <motion.path
          d="M0,100 Q300,200 600,100 T1200,100"
          stroke="#F97316"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M300,0 Q450,450 600,600 T1000,300"
          stroke="#0EA5E9"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        
        {/* Vertical connections */}
        <motion.path
          d="M100,0 Q200,400 100,800"
          stroke="#8B5CF6"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
        
        {/* Diagonal connections */}
        <motion.path
          d="M0,0 Q400,400 800,800"
          stroke="#F97316"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
      </svg>
      
      {/* Digital data particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute h-1 w-1 rounded-full bg-${
              i % 3 === 0 ? "[#F97316]" : i % 3 === 1 ? "[#0EA5E9]" : "[#8B5CF6]"
            }`}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};
