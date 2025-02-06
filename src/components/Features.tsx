import { Cpu, Database, Network } from "lucide-react";

const features = [
  {
    icon: <Cpu className="h-8 w-8 text-mine-blue" />,
    title: "Enterprise-Grade Data Centers",
    description: "State-of-the-art infrastructure ensuring maximum uptime and performance"
  },
  {
    icon: <Network className="h-8 w-8 text-mine-blue" />,
    title: "AI-Powered Infrastructure",
    description: "Advanced blockchain infrastructure optimized by artificial intelligence"
  },
  {
    icon: <Database className="h-8 w-8 text-mine-blue" />,
    title: "NFT Earn Rewards",
    description: "Generate rewards from your compute power contribution to the network"
  }
];

export const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 rounded-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-mine-silver">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};