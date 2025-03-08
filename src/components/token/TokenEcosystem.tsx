
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const TokenEcosystem = () => {
  const useCases = [
    {
      title: "GPU & AI Compute Marketplace",
      description: "Rent GPU power for AI workloads using $MINE tokens, enabling decentralized compute resources."
    },
    {
      title: "Mining Pool Rewards",
      description: "Earn $MINE by contributing GPU power to the MineChain mining network."
    },
    {
      title: "Governance & Voting",
      description: "Participate in protocol governance decisions by staking $MINE tokens."
    },
    {
      title: "Fee Reductions",
      description: "Get discounted hosting and transaction fees when paying with $MINE tokens."
    },
    {
      title: "Compute-as-a-Service",
      description: "Access on-demand AI compute resources by spending $MINE tokens."
    },
    {
      title: "NFT-Backed Mining Operations",
      description: "Own fractionalized mining hardware represented by NFTs, earning $MINE rewards."
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
    <section className="py-20 bg-gradient-to-b from-black/0 to-black/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-center mb-16"
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
              $MINE <motion.span 
                className="text-gradient-orange"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >Ecosystem</motion.span>
            </motion.h2>
            <motion.p 
              className="text-mine-silver text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Powering a complete ecosystem of decentralized compute resources,
              mining operations, and AI infrastructure.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index} 
                variants={item}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.15), 0 8px 10px -6px rgba(249, 115, 22, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="bg-black/30 border-[#F97316]/20 text-white h-full">
                  <CardContent className="p-6">
                    <motion.div 
                      className="h-10 w-10 rounded-full bg-[#F97316]/10 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.2, backgroundColor: "rgba(249, 115, 22, 0.2)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-[#F97316] text-xl font-bold">{index + 1}</span>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-mine-silver">{useCase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#F97316]/20 to-[#0EA5E9]/20 border border-white/10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            whileHover={{ 
              boxShadow: "0 0 30px rgba(249, 115, 22, 0.2)",
              backgroundImage: "linear-gradient(to right, rgba(249, 115, 22, 0.25), rgba(14, 165, 233, 0.25))"
            }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              $MINE Token Utility Roadmap
            </motion.h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                { quarter: "Q3 2025", title: "Mining Launch", desc: "Fair launch mining begins, token distribution starts" },
                { quarter: "Q1 2026", title: "Marketplace Launch", desc: "GPU marketplace with $MINE as payment currency" },
                { quarter: "Q3 2026", title: "DAO Governance", desc: "Full decentralized governance for protocol decisions" }
              ].map((phase, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className="bg-white/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(249, 115, 22, 0.2)",
                      boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-[#F97316] font-bold text-lg">{phase.quarter}</span>
                  </motion.div>
                  <h4 className="font-bold mb-2">{phase.title}</h4>
                  <p className="text-sm text-mine-silver">{phase.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
