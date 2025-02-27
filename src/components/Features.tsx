
import { Card } from "@/components/ui/card";
import { Server, Cpu } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Server className="h-12 w-12 text-mine-indigo" />,
      title: "Enterprise AI Compute Power",
      description: "Next-gen NVIDIA GPUs powering AI workloads, deep learning, and blockchain security."
    },
    {
      icon: <Cpu className="h-12 w-12 text-mine-indigo" />,
      title: "Full Stack Mining",
      description: "AI-integrated GPU mining with automated profit optimization and decentralized compute."
    },
    {
      icon: <img 
        src="/lovable-uploads/e8b433b3-ecad-4abd-8fbe-442359af2b39.png" 
        alt="MineChain AI" 
        className="h-12 w-12 object-cover rounded-full"
      />,
      title: "MineChain's Industrial Data Center Acquisition & Disposition Platform",
      description: ""
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient-blue">
            Powering the Next Era of AI, Compute Power, and Investment-Grade Real Estate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card-hover p-8 rounded-lg transition-transform duration-300 hover:scale-105 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-mine-indigo transition-colors duration-300">{feature.title}</h3>
              <p className="text-mine-silver">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
