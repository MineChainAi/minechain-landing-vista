
import { ArrowRight, Cpu, Server, ChevronUp, Shield, Video, Share2, Database, Hexagon } from "lucide-react";
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
      {/* Enhanced background with more web3 elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#0A0F1D]" />
        
        {/* Animated grid overlay - web3 style */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        {/* Floating hexagons */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
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
                  i % 2 === 0 ? "[#F97316]" : "[#0EA5E9]"
                }/10 h-12 w-12 md:h-20 md:w-20`}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Connection lines - simulating blockchain connections */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
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
        </svg>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo with enhanced styling */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-2 bg-[#F97316]/10 border border-[#F97316]/20 rounded-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/20 to-[#0EA5E9]/20 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <motion.img 
                src="/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png"
                alt="MineChain AI Logo" 
                className="w-24 h-24 object-cover relative z-10"
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
          
          {/* Main heading with enhanced animation */}
          <motion.h1 
            className="text-5xl md:text-7xl mb-4 font-extrabold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent inline-block"
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
          
          {/* Subheadline with animation */}
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Innovation Hub
          </motion.h2>
          
          {/* Description with animation */}
          <motion.p 
            className="text-lg md:text-xl text-mine-silver mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Fueling the next evolution of AI-driven compute power, decentralized infrastructure, and enterprise-grade data centers through Layer 1 blockchain technology, scalable GPU solutions, and investment-grade real estate.
            <motion.span 
              className="block mt-2 text-[#F97316]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Infrastructure • Innovation • Intelligence
            </motion.span>
          </motion.p>
          
          {/* Feature badges with enhanced styling */}
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
              <Server className="inline-block w-4 h-4 mr-2" /> Enterprise AI Compute
            </motion.span>
            <motion.span 
              className="px-4 py-2 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 text-[#0EA5E9] text-sm backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
            >
              <Shield className="inline-block w-4 h-4 mr-2" /> Full Stack Miners
            </motion.span>
            <motion.span 
              className="px-4 py-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] text-sm backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.2)" }}
            >
              <Cpu className="inline-block w-4 h-4 mr-2" /> Community Driven
            </motion.span>
            <motion.span 
              className="px-4 py-2 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 text-[#0EA5E9] text-sm backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
            >
              <Video className="inline-block w-4 h-4 mr-2" /> Zoho Meeting Integration
            </motion.span>
            <motion.span 
              className="px-4 py-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] text-sm backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.2)" }}
            >
              <Database className="inline-block w-4 h-4 mr-2" /> Blockchain Powered
            </motion.span>
            <motion.span 
              className="px-4 py-2 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 text-[#0EA5E9] text-sm backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
            >
              <Share2 className="inline-block w-4 h-4 mr-2" /> Decentralized Network
            </motion.span>
          </motion.div>
          
          {/* CTA buttons with enhanced web3 styling */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#F97316] to-[#F97316]/80 hover:from-[#F97316]/90 hover:to-[#F97316]/70 text-white px-8 relative overflow-hidden group"
                onClick={() => window.open('https://discord.gg/CmTXH8ejf4', '_blank')}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#F97316] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                <span className="relative z-10 flex items-center">
                  Join the Innovation Hub <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                variant="outline"
                className="border border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10 backdrop-blur-sm"
                onClick={() => document.getElementById('workspace')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">Explore Collaboration Spaces</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-[#F97316] to-[#0EA5E9] text-white shadow-lg transition-all duration-300 hover:from-[#0EA5E9] hover:to-[#F97316] z-50",
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
