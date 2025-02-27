
import { Card } from "@/components/ui/card";
import { Server, Cpu, Building } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Server className="h-12 w-12 text-[#F97316]" />,
      title: "Enterprise AI Compute Power",
      description: "Next-gen NVIDIA GPUs powering AI workloads, deep learning, and blockchain security."
    },
    {
      icon: <Cpu className="h-12 w-12 text-[#F97316]" />,
      title: "ProgPoW Hybrid Mining",
      description: "AI-integrated GPU mining with automated profit optimization and decentralized compute."
    },
    {
      icon: <Building className="h-12 w-12 text-[#F97316]" />,
      title: "MineChain's Industrial Data Center Acquisition & Disposition Platform",
      description: ""
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
            The Future of Decentralized AI & Web3
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card p-8 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-mine-silver">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
