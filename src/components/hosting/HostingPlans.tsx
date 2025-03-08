
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { useState } from "react";
import { PropertyRequestDialog } from "@/components/realestate/PropertyRequestDialog";
import { motion } from "framer-motion";

export const HostingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  
  const plans = [
    {
      name: "Standard GPU Hosting",
      description: "Perfect for individual miners and small AI operations",
      price: "From $99/month per GPU",
      features: [
        "4U Server Space",
        "1.5kW Power Allocation",
        "Dedicated Cooling",
        "Remote Management",
        "Basic Monitoring",
        "99.9% Uptime SLA",
        "$0.08 per kWh Power Rate"
      ]
    },
    {
      name: "Enterprise AI Cluster",
      description: "Designed for AI companies and machine learning workloads",
      price: "From $2,499/month",
      featured: true,
      features: [
        "Full Rack Available",
        "Up to 15kW Power",
        "Advanced Cooling Solutions",
        "24/7 Technical Support",
        "Performance Optimization",
        "99.99% Uptime SLA",
        "Dedicated Network",
        "$0.08 per kWh Power Rate"
      ]
    },
    {
      name: "Custom Mining Solution",
      description: "Tailored for large-scale mining operations",
      price: "Custom Pricing",
      features: [
        "Multiple Rack Options",
        "Megawatt+ Power Available",
        "Immersion Cooling Options",
        "On-site Technical Team",
        "Advanced Security",
        "Custom Power Contracts",
        "Expansion Options",
        "$0.08 per kWh Base Power Rate"
      ]
    }
  ];

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  const handleCloseDialog = () => {
    setSelectedPlan(null);
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/50 via-transparent to-[#0F172A]/50" />
      
      {/* Power rate highlight banner */}
      <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-[#F97316]/20 via-[#0EA5E9]/20 to-[#F97316]/20 h-12 flex items-center justify-center z-10">
        <motion.div 
          className="flex items-center gap-2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Zap className="h-5 w-5 text-[#0EA5E9]" />
          <span className="font-semibold">Industry-Leading Power Rate:</span>
          <span className="text-[#F97316] font-bold">$0.08 per kWh</span>
          <motion.div 
            className="ml-1 h-2 w-2 rounded-full bg-[#0EA5E9]"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-12">
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
            whileHover={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 1.5 }}
          >
            Flexible Hosting Plans
          </motion.h2>
          <motion.p 
            className="text-lg text-mine-silver"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Choose the hosting package that best fits your needs, or contact us for a customized solution.
          </motion.p>
          
          {/* Power Rate Value Proposition */}
          <motion.div 
            className="mt-4 p-3 bg-gradient-to-r from-[#0F172A] to-[#0F172A] border border-[#0EA5E9]/30 rounded-lg inline-block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Zap className="h-6 w-6 text-[#0EA5E9]" />
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 rgba(14, 165, 233, 0)", 
                      "0 0 8px rgba(14, 165, 233, 0.8)", 
                      "0 0 0 rgba(14, 165, 233, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <p className="font-medium text-[#0EA5E9]">Optimized for Mining Profitability</p>
                <p className="text-sm text-mine-silver">Our $0.08/kWh rate offers a competitive advantage in today's market</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              custom={index}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                boxShadow: plan.featured 
                  ? "0 25px 50px -12px rgba(249, 115, 22, 0.35)" 
                  : "0 20px 25px -5px rgba(15, 23, 42, 0.2)"
              }}
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
              className={`bg-[#0F172A] border rounded-xl overflow-hidden transition-all duration-300 relative ${
                plan.featured 
                  ? "border-[#F97316] ring-2 ring-[#F97316]/20 scale-105 z-10" 
                  : "border-[#1E293B] hover:border-[#1E293B]/80"
              }`}
            >
              {plan.featured && (
                <motion.div 
                  className="absolute top-0 inset-x-0 px-3 py-1 bg-[#F97316] text-white text-center text-sm font-medium"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Most Popular
                </motion.div>
              )}
              
              <div className={`p-8 ${plan.featured ? "pt-10" : ""}`}>
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2"
                  animate={hoveredPlan === index ? { 
                    color: plan.featured ? "#F97316" : "#0EA5E9"
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {plan.name}
                </motion.h3>
                <p className="text-mine-silver mb-6">{plan.description}</p>
                
                <motion.div 
                  className="mb-6"
                  animate={hoveredPlan === index ? { scale: 1.05 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <p className="text-lg font-semibold text-white">{plan.price}</p>
                </motion.div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <motion.li 
                      key={fIndex} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * fIndex, duration: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check className="h-5 w-5 text-[#F97316] mr-3 shrink-0 mt-0.5" />
                      </motion.div>
                      <span className="text-mine-silver">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className={`w-full ${
                      plan.featured 
                        ? "bg-[#F97316] hover:bg-[#F97316]/90 text-white" 
                        : "bg-transparent border border-[#1E293B] hover:bg-[#1E293B]/30 text-white"
                    }`}
                    onClick={() => handlePlanSelect(plan.name)}
                  >
                    Request Quote
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-mine-silver mb-6">
            Need a custom solution? Our hosting experts will work with you to design the perfect setup.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10"
              onClick={() => handlePlanSelect("Custom Hosting Solution")}
            >
              Contact for Custom Quote
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {selectedPlan && (
        <PropertyRequestDialog 
          isOpen={!!selectedPlan} 
          onClose={handleCloseDialog} 
          propertyTitle={`Hosting Plan: ${selectedPlan}`} 
        />
      )}
    </section>
  );
};
