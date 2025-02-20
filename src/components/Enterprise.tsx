
import { Server, Cpu, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Enterprise = () => {
  const gpuSpecs = [
    {
      icon: <Server className="h-8 w-8 text-[#F97316]" />,
      title: "NVIDIA 5090s & 4090s",
      description: "Next-gen AI & deep learning compute acceleration"
    },
    {
      icon: <Cpu className="h-8 w-8 text-[#F97316]" />,
      title: "H100 Tensor Core GPUs",
      description: "Enterprise-grade AI infrastructure"
    },
    {
      icon: <Zap className="h-8 w-8 text-[#F97316]" />,
      title: "AI-Layered Compute",
      description: "Scalable LLM hosting & inference models"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F97316]/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span 
              className="bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              MINE<span className="font-extrabold">CHAIN</span>
            </span>
          </h2>
          <p className="text-lg text-mine-silver">
            MineChain is built on the most powerful AI infrastructure in Web3. Our high-performance fleet of cutting-edge GPUs powers AI workloads, deep learning, LLM fine-tuning, and blockchain security.
          </p>
        </div>

        {/* GPU Specs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {gpuSpecs.map((spec, index) => (
            <Card key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="mb-4">{spec.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{spec.title}</h3>
              <p className="text-mine-silver text-sm">{spec.description}</p>
            </Card>
          ))}
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">
              Designed for AI Workloads
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-mine-silver">
                <div className="h-2 w-2 rounded-full bg-[#F97316] mr-3" />
                Generative AI & Machine Learning
              </li>
              <li className="flex items-center text-mine-silver">
                <div className="h-2 w-2 rounded-full bg-[#F97316] mr-3" />
                Secure Blockchain Nodes
              </li>
              <li className="flex items-center text-mine-silver">
                <div className="h-2 w-2 rounded-full bg-[#F97316] mr-3" />
                LLM Fine-tuning & Model Hosting
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">
              Enterprise AI Infrastructure
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-mine-silver">
                <div className="h-2 w-2 rounded-full bg-[#0EA5E9] mr-3" />
                AI Training & Model Inference
              </li>
              <li className="flex items-center text-mine-silver">
                <div className="h-2 w-2 rounded-full bg-[#0EA5E9] mr-3" />
                GPU-Accelerated Web3 Applications
              </li>
              <li className="flex items-center text-mine-silver">
                <div className="h-2 w-2 rounded-full bg-[#0EA5E9] mr-3" />
                Decentralized AI Compute Network
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
