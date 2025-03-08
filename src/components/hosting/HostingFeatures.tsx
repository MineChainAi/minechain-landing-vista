
import { Card } from "@/components/ui/card";
import { 
  Server, 
  Cpu, 
  Zap, 
  Shield, 
  Monitor, 
  Power 
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const HostingFeatures = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Server className="h-10 w-10 text-[#F97316]" />,
      title: "High-Performance GPU Hosting",
      description: "Secure your AI workstation, mining rig, or custom GPU cluster in our state-of-the-art data center, optimized for maximum uptime and performance."
    },
    {
      icon: <Power className="h-10 w-10 text-[#F97316]" />,
      title: "Power & Cooling Infrastructure",
      description: "Our facility is engineered for energy efficiency, leveraging low-cost, high-output power solutions with advanced cooling to keep your hardware running at peak performance."
    },
    {
      icon: <Shield className="h-10 w-10 text-[#F97316]" />,
      title: "Secure & Managed Environment",
      description: "Full remote access, real-time monitoring, and 24/7 technical support to ensure your hardware is always online and operating at optimal efficiency."
    },
    {
      icon: <Cpu className="h-10 w-10 text-[#F97316]" />,
      title: "Flexible Hosting Plans",
      description: "Scale your AI compute or mining operation with customized hosting packages designed for individual operators, enterprises, and institutions."
    },
    {
      icon: <Zap className="h-10 w-10 text-[#F97316]" />,
      title: "Strategic Energy Site Location",
      description: "Our facility is strategically positioned in a low-cost energy zone, ensuring cost-effective power solutions for GPU-heavy AI applications and crypto mining."
    },
    {
      icon: <Monitor className="h-10 w-10 text-[#F97316]" />,
      title: "Performance Monitoring",
      description: "Advanced monitoring systems with real-time alerts and dashboards to track your hardware's performance, temperature, and energy consumption."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A]/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent"
            initial={{ backgroundPosition: "0% 50%" }}
            whileInView={{ backgroundPosition: "100% 50%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            Why Host with MineChain?
          </motion.h2>
          <motion.p 
            className="text-lg text-mine-silver"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Tier 3+ data center is built to maximize efficiency and profitability for our clients.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 8px 10px -6px rgba(249, 115, 22, 0.1)" 
              }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
            >
              <Card 
                className="bg-[#0F172A]/80 border border-[#1E293B] p-8 relative overflow-hidden group hover:border-[#F97316]/50 transition-all duration-300"
              >
                <motion.div 
                  className="absolute -right-20 -top-20 w-40 h-40 bg-[#F97316]/5 rounded-full group-hover:bg-[#F97316]/10"
                  animate={hoveredFeature === index ? { 
                    scale: 1.5, 
                    opacity: 0.2,
                    backgroundColor: "rgba(249, 115, 22, 0.15)"
                  } : {}}
                  transition={{ duration: 0.8 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={hoveredFeature === index ? { 
                      y: [0, -5, 0],
                      transition: { 
                        y: { repeat: Infinity, duration: 1, repeatType: "mirror" } 
                      }
                    } : {}}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-white mb-4"
                    animate={hoveredFeature === index ? { color: "#F97316" } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-mine-silver"
                    initial={{ opacity: 0.9 }}
                    animate={hoveredFeature === index ? { opacity: 1 } : { opacity: 0.9 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
