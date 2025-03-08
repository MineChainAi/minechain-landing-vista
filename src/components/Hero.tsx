
import { ArrowRight, Cpu, Server, ChevronUp, Shield, Video, Share2, Database, Hexagon, Lock, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Hero = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-[#0F172A] overflow-hidden">
      {/* Enhanced blockchain background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#0A0F1D]" />
        
        {/* Animated blockchain grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        {/* Blockchain nodes - floating hexagons */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.1,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [
                  `${Math.random() * 10 + 45}%`,
                  `${Math.random() * 10 + 55}%`,
                  `${Math.random() * 10 + 45}%`,
                ],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                x: `calc(${Math.random() * 100}% + ${mousePosition.x * 20}px)`,
                y: `calc(${Math.random() * 100}% + ${mousePosition.y * 20}px)`,
              }}
            >
              <Hexagon
                className={`text-${
                  i % 3 === 0 ? "[#F97316]" : i % 3 === 1 ? "[#0EA5E9]" : "[#8B5CF6]"
                }/10 h-12 w-12 md:h-16 md:w-16`}
              />
            </motion.div>
          ))}
        </div>
        
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
          {[...Array(30)].map((_, i) => (
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
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo with blockchain-inspired styling */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-3 bg-[#F97316]/10 border border-[#F97316]/20 rounded-full relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/20 via-[#8B5CF6]/20 to-[#0EA5E9]/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <motion.img 
                src="/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png"
                alt="MineChain AI Logo" 
                className="w-24 h-24 object-cover relative z-10"
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
          
          {/* Main heading with blockchain-inspired animation */}
          <motion.h1 
            className="text-5xl md:text-7xl mb-4 font-extrabold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-[#F97316] via-[#8B5CF6] to-[#0EA5E9] bg-clip-text text-transparent inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                ease: "linear" 
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              MineChain
            </motion.span>
          </motion.h1>
          
          {/* Subheadline with blockchain animation */}
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Blockchain <span className="text-[#8B5CF6]">Innovation</span> Hub
          </motion.h2>
          
          {/* Description with blockchain-focused language */}
          <motion.p 
            className="text-lg md:text-xl text-mine-silver mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Forging the next generation of decentralized AI compute power, blockchain-powered infrastructure, and web3 enterprise data centers through Layer 1 technology, GPU mining solutions, and tokenized real estate assets.
            <motion.span 
              className="block mt-2 text-[#F97316]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Decentralization • Consensus • Innovation
            </motion.span>
          </motion.p>
          
          {/* Blockchain feature badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.span 
              className="px-4 py-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] text-sm backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.2)" }}
            >
              <Server className="inline-block w-4 h-4 mr-2" /> Decentralized Compute
            </motion.span>
            <motion.span 
              className="px-4 py-2 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 text-[#0EA5E9] text-sm backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
            >
              <Lock className="inline-block w-4 h-4 mr-2" /> Layer 1 Blockchain
            </motion.span>
            <motion.span 
              className="px-4 py-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
            >
              <Cpu className="inline-block w-4 h-4 mr-2" /> GPU Mining Network
            </motion.span>
            <motion.span 
              className="px-4 py-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] text-sm backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.2)" }}
            >
              <Zap className="inline-block w-4 h-4 mr-2" /> $MINE Token
            </motion.span>
            <motion.span 
              className="px-4 py-2 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 text-[#0EA5E9] text-sm backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
            >
              <Database className="inline-block w-4 h-4 mr-2" /> Smart Contracts
            </motion.span>
            <motion.span 
              className="px-4 py-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
            >
              <Globe className="inline-block w-4 h-4 mr-2" /> Web3 Ecosystem
            </motion.span>
          </motion.div>
          
          {/* CTA buttons with blockchain styling */}
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
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-[#F97316] via-[#8B5CF6] to-[#0EA5E9] text-white shadow-lg transition-all duration-300 hover:from-[#0EA5E9] hover:via-[#8B5CF6] hover:to-[#F97316] z-50",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp className="h-6 w-6" />
      </motion.button>
    </div>
  );
};
