
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Bot, Cpu, Shield, Zap, Network } from "lucide-react";
import { useState } from "react";

export const AIAgentFeatures = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: <Brain className="h-12 w-12 text-[#F97316]" />,
      title: "Build-to-Suit AI Agents",
      description: "Custom AI solutions built to your exact specifications, from trading bots to advanced language models."
    },
    {
      icon: <Cpu className="h-12 w-12 text-[#0EA5E9]" />,
      title: "Enterprise-Grade Hosting",
      description: "High-performance GPU hosting for AI workloads, ensuring low latency, high efficiency, and 99% uptime."
    },
    {
      icon: <Zap className="h-12 w-12 text-[#F97316]" />,
      title: "Optimized Performance",
      description: "Fine-tuned AI models that deliver maximum throughput with minimum resource consumption."
    },
    {
      icon: <Network className="h-12 w-12 text-[#0EA5E9]" />,
      title: "Seamless Integration",
      description: "Deploy your AI across Web3, DeFi, social media, customer service, and automation workflows."
    },
    {
      icon: <Shield className="h-12 w-12 text-[#F97316]" />,
      title: "Security & Privacy First",
      description: "Full control with on-prem AI hosting, encrypted model execution, and private deployment options."
    },
    {
      icon: <Bot className="h-12 w-12 text-[#0EA5E9]" />,
      title: "Continuous Improvement",
      description: "AI models that learn and adapt with ongoing optimization and performance enhancements."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black/0 to-black/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Custom <span className="text-gradient-orange">AI Agent</span> Solutions
          </h2>
          <p className="text-mine-silver text-lg">
            We don't just build AI—we design, deploy, and optimize custom AI agents
            that deliver real business value and technological advantage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`bg-black/30 border-white/10 transition-all duration-500 hover:border-[#F97316]/30 hover:shadow-lg hover:shadow-[#F97316]/5 ${
                index % 2 === 0 ? 'hover:translate-y-[-5px]' : 'hover:translate-y-[-5px]'
              } animate-fade-in`}
              style={{ animationDelay: `${0.1 * index}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-6">
                <div className={`mb-6 transition-transform duration-300 ${
                  hoveredCard === index ? 'scale-110' : ''
                }`}>{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-mine-silver">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
