
import { ShoppingCart, CreditCard, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const GPUMarketplace = () => {
  const gpuProducts = [
    {
      name: "NVIDIA H100",
      description: "Enterprise-grade AI & ML compute power",
      price: "Contact for Pricing",
      features: ["8-GPU Clusters", "80GB Memory", "4th Gen Tensor Cores"]
    },
    {
      name: "NVIDIA 4090",
      description: "High-performance GPU computing",
      price: "Contact for Pricing",
      features: ["24GB GDDR6X", "Ada Lovelace", "DLSS 3.0"]
    },
    {
      name: "NVIDIA 5090",
      description: "Next-gen AI acceleration",
      price: "Coming Soon",
      features: ["Next-Gen Architecture", "Enhanced RT Cores", "Advanced AI Features"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F97316]/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
            GPU Marketplace
          </h2>
          <p className="text-lg text-mine-silver">
            Access enterprise-grade GPU infrastructure for AI workloads and mining operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gpuProducts.map((product, index) => (
            <Card key={index} className="bg-black/50 border-white/10 border p-8 hover:scale-105 transition-transform duration-300 hover:border-[#F97316]/50 ring-1 ring-[#F97316]/30">
              <h3 className="text-2xl font-bold text-white mb-4">{product.name}</h3>
              <p className="text-mine-silver mb-4">{product.description}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-mine-silver flex items-center">
                    <div className="h-2 w-2 rounded-full bg-[#F97316] mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-[#F97316] font-semibold">{product.price}</span>
                <Button 
                  variant="outline"
                  className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10"
                  onClick={() => window.open('https://discord.gg/CmTXH8ejf4', '_blank')}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Inquire
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            variant="default"
            className="bg-[#F97316] hover:bg-[#F97316]/90"
            asChild
          >
            <Link to="/marketplace">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Browse Full Marketplace
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
