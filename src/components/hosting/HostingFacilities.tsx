
import { Cpu, Zap, Server, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const HostingFacilities = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const facilities = [
    {
      icon: <Server className="h-6 w-6 text-[#F97316]" />,
      title: "99.99% Uptime Guarantee",
      description: "Redundant power systems, cooling, and network connectivity ensure your hardware stays online and productive."
    },
    {
      icon: <Zap className="h-6 w-6 text-[#F97316]" />,
      title: "Low-Cost Energy",
      description: "Strategically located in regions with some of the lowest electricity costs in North America, maximizing your profitability."
    },
    {
      icon: <Cpu className="h-6 w-6 text-[#F97316]" />,
      title: "Immersion Cooling Options",
      description: "Advanced cooling solutions including immersion cooling for maximum performance and hardware longevity."
    },
    {
      icon: <Shield className="h-6 w-6 text-[#F97316]" />,
      title: "Enterprise-Grade Security",
      description: "24/7 physical security, surveillance systems, and controlled access to protect your valuable hardware investments."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              whileHover={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 1.5 }}
            >
              State-of-the-Art Hosting Facilities
            </motion.h2>
            
            <motion.p 
              className="text-lg text-mine-silver mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our purpose-built data centers are designed specifically for high-density GPU workloads 
              and mining operations, providing the optimal environment for your hardware to thrive.
            </motion.p>
            
            <div className="space-y-8">
              {facilities.map((facility, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                  onHoverStart={() => setActiveFeature(index)}
                  onHoverEnd={() => setActiveFeature(null)}
                >
                  <motion.div 
                    className="p-3 bg-[#F97316]/10 border border-[#F97316]/20 rounded-lg"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(249, 115, 22, 0.2)" }}
                    animate={activeFeature === index ? {
                      rotate: [0, 10, -10, 10, 0],
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut"
                      }
                    } : {}}
                  >
                    {facility.icon}
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-xl font-semibold text-white mb-2"
                      animate={activeFeature === index ? {
                        color: "#F97316"
                      } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {facility.title}
                    </motion.h3>
                    <motion.p 
                      className="text-mine-silver"
                      animate={activeFeature === index ? {
                        opacity: 1
                      } : {
                        opacity: 0.9
                      }}
                    >
                      {facility.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="relative rounded-xl overflow-hidden border border-[#1E293B]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img 
                src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern GPU Data Center" 
                className="w-full h-auto object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 p-6 bg-[#0F172A] border border-[#1E293B] rounded-xl shadow-xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 8px 10px -6px rgba(249, 115, 22, 0.1)",
                y: -5
              }}
            >
              <div className="flex items-center justify-between gap-6 mb-4">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.h4 
                    className="text-3xl font-bold text-white"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ color: "#F97316", opacity: 1 }}
                  >
                    99.99%
                  </motion.h4>
                  <p className="text-xs text-mine-silver">Uptime</p>
                </motion.div>
                <div className="h-12 w-px bg-[#1E293B]" />
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.h4 
                    className="text-3xl font-bold text-white"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ color: "#0EA5E9", opacity: 1 }}
                  >
                    24/7
                  </motion.h4>
                  <p className="text-xs text-mine-silver">Support</p>
                </motion.div>
              </div>
              <div className="flex items-center justify-between gap-6">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.h4 
                    className="text-3xl font-bold text-white"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ color: "#F97316", opacity: 1 }}
                  >
                    50MW+
                  </motion.h4>
                  <p className="text-xs text-mine-silver">Capacity</p>
                </motion.div>
                <div className="h-12 w-px bg-[#1E293B]" />
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.h4 
                    className="text-3xl font-bold text-white"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ color: "#0EA5E9", opacity: 1 }}
                  >
                    $0.04
                  </motion.h4>
                  <p className="text-xs text-mine-silver">per kWh</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
