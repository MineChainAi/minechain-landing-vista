
import { Shield, Server, Key, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const NodeValidators = () => {
  const validatorFeatures = [
    {
      icon: <Shield className="h-12 w-12 text-[#F97316]" />,
      title: "Whitelisted Validators",
      description: "Secure network operation through carefully vetted node operators"
    },
    {
      icon: <Server className="h-12 w-12 text-[#F97316]" />,
      title: "High-Performance Nodes",
      description: "Enterprise-grade hardware requirements ensure optimal network performance"
    },
    {
      icon: <Key className="h-12 w-12 text-[#F97316]" />,
      title: "Secure Access",
      description: "Multi-signature validation and enhanced security protocols"
    },
    {
      icon: <Users className="h-12 w-12 text-[#F97316]" />,
      title: "Community Governance",
      description: "Decentralized decision-making for network upgrades and policies"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-black/30 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
            Node Validators
          </h2>
          <p className="text-lg text-mine-silver max-w-2xl mx-auto">
            Join our network of trusted validators securing the MineChain ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {validatorFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="mr-6">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-mine-silver">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
            onClick={() => window.open('https://discord.gg/CmTXH8ejf4', '_blank')}
          >
            Apply to Become a Validator
          </Button>
        </div>
      </div>
    </section>
  );
};
