
import { Cpu, Zap, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Code className="h-12 w-12 text-mine-blue" />,
    title: "AI Mining",
    description: "Run AI models while securing the network"
  },
  {
    icon: <Cpu className="h-12 w-12 text-mine-blue" />,
    title: "GPU Compute Power",
    description: "Leverage high-performance GPUs for rewards"
  },
  {
    icon: <Zap className="h-12 w-12 text-mine-blue" />,
    title: "Mining Rewards",
    description: "Earn crypto through AI workload participation"
  }
];

const steps = [
  {
    number: "01",
    title: "Connect Your GPU",
    description: "Plug into the MineChain network"
  },
  {
    number: "02",
    title: "Start Mining AI",
    description: "Contribute to AI models while earning rewards"
  },
  {
    number: "03",
    title: "Claim Rewards",
    description: "Get paid in crypto for AI workloads"
  }
];

export const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Features Section */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-lg hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className="mb-6 flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-mine-silver">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-transparent border-white/10 overflow-hidden group">
              <CardContent className="p-6">
                <div className="relative">
                  <span className="text-6xl font-bold text-mine-blue/20 absolute -top-4 -left-2">
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4 pt-4">{step.title}</h3>
                    <p className="text-mine-silver">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
