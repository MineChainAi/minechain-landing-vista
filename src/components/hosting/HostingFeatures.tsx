
import { Card } from "@/components/ui/card";
import { 
  Server, 
  Cpu, 
  Zap, 
  Shield, 
  Monitor, 
  Power 
} from "lucide-react";

export const HostingFeatures = () => {
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

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A]/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
            Why Host with MineChain?
          </h2>
          <p className="text-lg text-mine-silver">
            Our Tier 3+ data center is built to maximize efficiency and profitability for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-[#0F172A]/80 border border-[#1E293B] p-8 relative overflow-hidden group hover:border-[#F97316]/50 transition-all duration-300"
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#F97316]/5 rounded-full group-hover:bg-[#F97316]/10 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-mine-silver">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
