import { Cpu, Database, Network, Shield, Zap, Code } from "lucide-react";

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
  },
  {
    icon: <Shield className="h-8 w-8 text-mine-blue" />,
    title: "Enhanced Security",
    description: "Military-grade encryption and security protocols protecting your assets"
  },
  {
    icon: <Zap className="h-8 w-8 text-mine-blue" />,
    title: "Lightning Fast",
    description: "High-performance network with minimal latency and maximum throughput"
  },
  {
    icon: <Code className="h-8 w-8 text-mine-blue" />,
    title: "Developer Friendly",
    description: "Comprehensive SDK and API documentation for seamless integration"
  }
];

export const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Powering the Future of Compute
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-lg hover:scale-105 transition-transform duration-300"
            >
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