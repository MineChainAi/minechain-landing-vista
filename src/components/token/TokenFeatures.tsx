
import { Card, CardContent } from "@/components/ui/card";
import { Coins, TrendingUp, Cpu, Server } from "lucide-react";
import { motion } from "framer-motion";

export const TokenFeatures = () => {
  const features = [
    {
      icon: <Coins className="w-10 h-10 text-[#F97316]" />,
      title: "Mining-Backed Tokenomics",
      description: "Every $MINE token is earned through real compute work, ensuring organic supply and demand fundamentals."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#F97316]" />,
      title: "Deflationary Model",
      description: "With a 3-year halving cycle, supply decreases over time, driving long-term value appreciation."
    },
    {
      icon: <Cpu className="w-10 h-10 text-[#F97316]" />,
      title: "Decentralized & Permissionless",
      description: "Anyone can mine and earn $MINE, ensuring true PoW decentralization and fair distribution."
    },
    {
      icon: <Server className="w-10 h-10 text-[#F97316]" />,
      title: "Compute Power Integration",
      description: "$MINE will be used for GPU leasing, AI compute transactions, and tokenized mining rewards."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Why <motion.span 
                className="text-gradient-orange"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >$MINE?</motion.span>
          </motion.h2>
          <motion.p 
            className="text-mine-silver text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            $MINE is designed as a utility token with real-world applications, 
            powering the entire MineChain ecosystem.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.15), 0 8px 10px -6px rgba(249, 115, 22, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="glass-card-hover p-2 h-full">
                <CardContent className="p-6">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >{feature.icon}</motion.div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-mine-silver">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
