
import { motion } from "framer-motion";
import { Cpu, Server, Zap, Database, Network, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const MarketplaceCategories = () => {
  const categories = [
    {
      title: "GPUs & AI Workstations",
      description: "High-performance 4090s, H100s, Radeon VIIs, and mining-optimized rigs",
      icon: <Cpu className="h-6 w-6 text-[#0EA5E9]" />,
      color: "#0EA5E9"
    },
    {
      title: "ASICs & Mining Rigs",
      description: "Bitcoin, Ravencoin, and Litecoin miners from trusted vendors",
      icon: <Server className="h-6 w-6 text-[#F97316]" />,
      color: "#F97316"
    },
    {
      title: "Cooling & Power Solutions",
      description: "Enterprise immersion cooling systems, PSUs, and airflow management",
      icon: <Zap className="h-6 w-6 text-[#10B981]" />,
      color: "#10B981"
    },
    {
      title: "Community Listings",
      description: "Buy and sell used hardware with verified ratings & transaction history",
      icon: <Network className="h-6 w-6 text-[#8B5CF6]" />,
      color: "#8B5CF6"
    },
    {
      title: "Bulk Hardware Orders",
      description: "Access to volume discounts and group buys from top-tier suppliers",
      icon: <Database className="h-6 w-6 text-[#EC4899]" />,
      color: "#EC4899"
    },
    {
      title: "MineChain Hardware Drops",
      description: "Early access to limited-run AI workstations and custom GPU mining setups",
      icon: <CreditCard className="h-6 w-6 text-[#EAB308]" />,
      color: "#EAB308"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0F172A] opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-mine-silver">
            What's in the Marketplace?
          </h2>
          <p className="text-lg text-mine-silver">
            Browse our comprehensive selection of high-performance hardware for mining,
            AI development, and computational tasks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="bg-black/40 border border-white/10 hover:border-[#F97316]/50 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: `${category.color}20`, borderColor: `${category.color}40` }}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2">{category.title}</h3>
                      <p className="text-mine-silver">{category.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
