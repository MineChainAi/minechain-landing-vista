
import { motion } from "framer-motion";
import { Zap, TrendingDown, LineChart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const HostingPowerRates = () => {
  return (
    <section className="py-20 relative z-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
      
      {/* Lightning bolt decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-40 w-[1px] bg-[#0EA5E9]"
            style={{
              left: `${15 + i * 30}%`,
              top: '-10%',
              opacity: 0.4,
            }}
            animate={{
              height: ['0%', '60%', '0%'],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 0.4,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 8 + i * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative"
            >
              <Zap className="h-8 w-8 text-[#F97316]" />
              <motion.div 
                className="absolute inset-0"
                animate={{ 
                  boxShadow: [
                    "0 0 0 rgba(249, 115, 22, 0)", 
                    "0 0 15px rgba(249, 115, 22, 0.8)", 
                    "0 0 0 rgba(249, 115, 22, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Industry-Leading <span className="text-[#F97316]">Power Rates</span>
            </h2>
          </div>
          
          <p className="text-lg text-mine-silver mb-6">
            Benefit from our competitive $0.08 per kWh electricity costs and maximize your mining profitability.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Main rate card */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-[#0F172A] to-[#141e33] border border-[#0EA5E9]/30">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/30">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Zap className="h-8 w-8 text-[#0EA5E9]" />
                        </motion.div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-mine-silver">Standard Power Rate</h3>
                        <motion.div 
                          className="flex items-baseline gap-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        >
                          <span className="text-4xl font-bold text-white">$0.08</span>
                          <span className="text-lg text-mine-silver">per kWh</span>
                        </motion.div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-mine-silver">Industry Average</span>
                          <span className="text-sm font-semibold text-white">$0.12 - $0.14 per kWh</span>
                        </div>
                        <Progress value={60} className="h-1.5 bg-white/10" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-mine-silver">Residential Average</span>
                          <span className="text-sm font-semibold text-white">$0.15 - $0.30+ per kWh</span>
                        </div>
                        <Progress value={27} className="h-1.5 bg-white/10" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-black/20 p-4 rounded-lg border border-white/5">
                    <h4 className="flex items-center gap-2 text-white font-medium mb-3">
                      <TrendingDown className="h-4 w-4 text-green-400" />
                      <span>Monthly Savings Calculator</span>
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-black/30 p-2 rounded border border-white/10">
                          <p className="text-xs text-mine-silver">1,000 kWh Usage</p>
                          <p className="font-semibold text-green-400">Save $40-$220/mo</p>
                        </div>
                        <div className="bg-black/30 p-2 rounded border border-white/10">
                          <p className="text-xs text-mine-silver">10,000 kWh Usage</p>
                          <p className="font-semibold text-green-400">Save $400-$2200/mo</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-mine-silver">
                        <Sparkles className="h-3 w-3 text-[#F97316]" />
                        <span>Compared to industry and residential rates</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Feature cards */}
          <FeatureCard 
            icon={<LineChart className="h-5 w-5 text-[#0EA5E9]" />}
            title="Stable Pricing"
            description="Long-term contracts with fixed electricity rates protect you from market fluctuations"
            delay={0.2}
          />
          
          <FeatureCard 
            icon={<TrendingDown className="h-5 w-5 text-[#0EA5E9]" />}
            title="Lower Operational Costs"
            description="Up to 60% reduction in power costs compared to typical residential mining setups"
            delay={0.3}
          />
          
          <FeatureCard 
            icon={<Sparkles className="h-5 w-5 text-[#0EA5E9]" />}
            title="Green Energy Options"
            description="Access to renewable energy sources for environmentally conscious operations"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-[#0F172A] border border-white/10 h-full">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="mt-1 p-2 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/30">
              {icon}
            </div>
            <div>
              <h3 className="font-medium text-white mb-2">{title}</h3>
              <p className="text-sm text-mine-silver">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
