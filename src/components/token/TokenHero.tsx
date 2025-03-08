
import { motion } from "framer-motion";
import { TokenDescription } from "./TokenDescription";
import { TokenActions } from "./TokenActions";
import { TokenStats } from "./TokenStats";
import { useEffect, useState } from "react";

export const TokenHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] z-0"
        style={{
          backgroundPosition: `${mousePosition.x / 50}px ${mousePosition.y / 50}px`
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-[#F97316]/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
            }}
          />
        ))}
      </div>
      
      {/* Glowing accent effects */}
      <motion.div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#F97316]/10 blur-[100px] z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#0EA5E9]/10 blur-[100px] z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMzJoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNiAwSDJ2LTRoMjh2NHptMC02SDJ2LTRoMjh2NHptMC02SDJ2LTRoMjh2NHptMC02SDJ2LTRoMjh2NHptMC02SDJ2LTRoMjh2NHptMC02SDJ2LTRoMjh2NHptMC02SDJ2LTRoMjh2NHptMC02SDJ2LTRoMjh2NHpNMzAgMzRIMnYtNGgyOHY0em0wLTZIMnYtNGgyOHY0em0wLTZIMnYtNGgyOHY0em0wLTZIMnYtNGgyOHY0em0wLTZIMlY2aDI4djR6bTYgMGgyMlY2SDM2djR6bTAgNmgyMnYtNEgzNnY0em0wIDZoMjJ2LTRIMzZ2NHptMCA2aDIydi00SDM2djR6bTAgNmgyMnYtNEgzNnY0em0wIDZoMjJ2LTRIMzZ2NHptMCA2aDIydi00SDM2djR6bTAgNmgyMnYtNEgzNnY0eiIvPjxwYXRoIGQ9Ik0yIDBoNTh2NjBIMnoiLz48L2c+PC9nPjwvc3ZnPg==')]  opacity-20 z-0">
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
          {/* Shiny reflective title card */}
          <motion.div 
            className="relative overflow-hidden rounded-xl p-1 mb-10 inline-block bg-gradient-to-r from-[#F97316]/80 via-[#FBBF24]/50 to-[#0EA5E9]/80"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="bg-black/80 rounded-lg p-6 backdrop-blur-sm">
              <img 
                src="/lovable-uploads/87ff58c1-cb4b-4253-b162-d4ab8ef1567a.png" 
                alt="MINE Token Logo" 
                className="w-32 h-32 mx-auto mb-4 object-cover rounded-lg" 
              />
              <p className="text-[#F97316] font-bold text-xl">$MINE Token</p>
            </div>
          </motion.div>
          
          <TokenDescription />
          <TokenActions />
          <TokenStats />
        </motion.div>
      </div>
    </section>
  );
};
