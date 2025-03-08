
import { Card } from "@/components/ui/card";
import { Server, Cpu } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Server className="h-12 w-12 text-[#F97316]" aria-hidden="true" />,
      title: "Enterprise AI Compute Power",
      description: "Next-gen NVIDIA GPUs powering AI workloads, deep learning, and blockchain security."
    },
    {
      icon: <Cpu className="h-12 w-12 text-[#F97316]" aria-hidden="true" />,
      title: "Full Stack Mining",
      description: "AI-integrated GPU mining with automated profit optimization and decentralized compute."
    },
    {
      icon: <img 
        src="/lovable-uploads/e8b433b3-ecad-4abd-8fbe-442359af2b39.png" 
        alt="MineChain Industrial Data Centers - Blockchain Infrastructure" 
        className="h-12 w-12 object-cover rounded-full"
        width="48"
        height="48"
        loading="lazy"
      />,
      title: "MineChain's Industrial Data Center Acquisition & Disposition Platform",
      description: "Strategic real estate portfolio for blockchain and AI computing infrastructure."
    }
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-b from-transparent to-black/30"
      id="features-section"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            id="features-heading"
            className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent"
          >
            Powering the Next Era of AI, Compute Power, and Investment-Grade Real Estate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-black/50 border-white/10 border p-8 rounded-lg transition-transform duration-300 hover:scale-105 group hover:border-[#F97316]/50 ring-1 ring-[#F97316]/30"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 
                className="text-2xl font-bold mb-4 text-white group-hover:text-[#F97316] transition-colors duration-300"
                itemProp="name"
              >
                {feature.title}
              </h3>
              <p className="text-mine-silver" itemProp="description">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
