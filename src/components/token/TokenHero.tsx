
import { motion } from "framer-motion";
import { TokenDescription } from "./TokenDescription";
import { TokenActions } from "./TokenActions";
import { TokenStats } from "./TokenStats";
import { useEffect, useState } from "react";
import { Flame, Cpu, Pickaxe, Gem } from "lucide-react";

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
      {/* Industrial-themed background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#221F26] via-[#333333] to-[#222222] z-0"
        style={{
          backgroundPosition: `${mousePosition.x / 50}px ${mousePosition.y / 50}px`
        }}
      />
      
      {/* Mining machinery noise texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMzJoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNiAwSDJ2LTRoMjh2NHptMC02SDJ2LTRoMjh2NHptMC02SDJ2LTRoMjh2NHptMC02SDJ2LTRoMjh2NHptMC02SDJ2LTRoMjh2NHptMC02SDJ2LTRoMjh2NHptMC02SDJ2LTRoMjh2NHptMC02SDJ2LTRoMjh2NHpNMzAgMzRIMnYtNGgyOHY0em0wLTZIMnYtNGgyOHY0em0wLTZIMnYtNGgyOHY0em0wLTZIMnYtNGgyOHY0em0wLTZIMlY2aDI4djR6bTYgMGgyMlY2SDM2djR6bTAgNmgyMnYtNEgzNnY0em0wIDZoMjJ2LTRIMzZ2NHptMCA2aDIydi00SDM2djR6bTAgNmgyMnYtNEgzNnY0em0wIDZoMjJ2LTRIMzZ2NHptMCA2aDIydi00SDM2djR6bTAgNmgyMnYtNEgzNnY0eiIvPjxwYXRoIGQ9Ik0yIDBoNTh2NjBIMnoiLz48L2c+PC9nPjwvc3ZnPg==')]  opacity-40 z-0">
      </div>
      
      {/* Mining energy particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 30 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-[#F97316]/30"
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
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
            }}
          />
        ))}
      </div>
      
      {/* Industrial heat effects */}
      <motion.div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#F97316]/10 blur-[150px] z-0"
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
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#F5D04A]/10 blur-[120px] z-0"
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
      
      {/* Mining circuitry pattern */}
      <div className="absolute inset-0 bg-black opacity-30 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIEwgMCAxMCBNIDYwIDEwIEwgNjAgMCBMIDUwIDAgTSA1MCA2MCBMIDY2IDYwIEwgNjAgNTAgTSAwIDUwIEwgMCA2MCBMIDM1IDYwIiBzdHJva2U9IiNGOTczMTYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxwYXRoIGQ9Ik0gMzAgMzAgTCA0MCAzMCBMIDQwIDQwIEwgMzAgNDAiIHN0cm9rZT0iI0Y5NzMxNiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDgiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Industrial badge with token logo */}
          <motion.div 
            className="relative overflow-hidden rounded-xl p-1 mb-10 inline-block bg-gradient-to-r from-[#F97316]/80 via-[#F5D04A]/50 to-[#F97316]/80 shadow-[0_0_35px_rgba(249,115,22,0.4)]"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="bg-black/80 rounded-lg p-8 backdrop-blur-sm border border-[#F97316]/30">
              {/* Mining rig icons */}
              <div className="flex justify-center mb-4 space-x-6">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="text-[#F97316]"
                >
                  <Pickaxe size={28} className="opacity-80" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -15 }}
                  className="text-[#F5D04A]"
                >
                  <Cpu size={28} className="opacity-80" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="text-[#F97316]"
                >
                  <Flame size={28} className="opacity-80" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -15 }}
                  className="text-[#F5D04A]"
                >
                  <Gem size={28} className="opacity-80" />
                </motion.div>
              </div>
              
              {/* Main token logo with mining-themed overlay */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/2cb1aa6f-2ada-4cd8-b897-ede9ee87d8e3.png" 
                  alt="MINE Token Logo" 
                  className="w-40 h-40 mx-auto mb-4 object-contain rounded-lg relative z-10" 
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[#F97316]/30 to-transparent rounded-lg"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
              </div>
              
              {/* Token name with industrial embellishment */}
              <div className="relative">
                <p className="text-[#F9A826] font-bold text-xl tracking-wider relative z-10 flex items-center justify-center gap-2">
                  <span className="w-6 h-[2px] bg-gradient-to-r from-transparent to-[#F97316]"></span>
                  $MINE TOKEN
                  <span className="w-6 h-[2px] bg-gradient-to-l from-transparent to-[#F97316]"></span>
                </p>
                <motion.div 
                  className="absolute -inset-1 bg-[#F97316]/10 blur-sm rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
              </div>
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
