
import { Card } from "@/components/ui/card";
import { Server, Cpu, Palette } from "lucide-react";
import { ThreeScene } from "./ThreeScene";

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
      icon: <Palette className="h-12 w-12 text-[#F97316]" />,
      title: "AI-Enhanced Web3 & NFTs",
      description: "GPU-accelerated AI art generation, smart contracts, and blockchain automation."
    }
  ];

  return (
    <section className="py-20 bg-mine-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] via-[#0F172A] to-black opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Next-Gen Mining Infrastructure
          </h2>
          <p className="text-mine-silver text-lg">
            Powered by Advanced NVIDIA GPUs and AI Technology
          </p>
        </div>

        <div className="mb-20 rounded-lg overflow-hidden shadow-2xl bg-black/30 backdrop-blur-sm">
          <ThreeScene />
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
