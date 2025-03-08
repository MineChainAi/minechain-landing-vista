
import { motion } from "framer-motion";
import { ShoppingCart, Server, Cpu, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { PaymentProcessor } from "./PaymentProcessor";

export const FeaturedListings = () => {
  const [selectedProduct, setSelectedProduct] = useState<{
    id: number;
    name: string;
    price: string;
  } | null>(null);

  const featuredProducts = [
    {
      id: 1,
      name: "NVIDIA H100 GPU",
      category: "gpus",
      price: "$35,000",
      description: "Enterprise-grade AI & ML compute power with 80GB HBM3 memory",
      image: "/lovable-uploads/e50be236-f783-4a72-b2fa-46b0ded22aee.png",
      seller: "MineChain Official",
      verified: true,
      hot: true
    },
    {
      id: 2,
      name: "NVIDIA RTX 4090 24GB",
      category: "gpus",
      price: "$1,999",
      description: "High-performance GPU for mining and AI workloads",
      image: "/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png",
      seller: "TechVault",
      verified: true,
      hot: false
    },
    {
      id: 3,
      name: "Antminer S19 XP",
      category: "asics",
      price: "$5,200",
      description: "Bitcoin ASIC miner with 140 TH/s hashrate, 3010W power consumption",
      image: "/lovable-uploads/b524ff52-9a17-4d6c-98ee-e490e1212d68.png",
      seller: "MiningDepot",
      verified: true,
      hot: true
    },
    {
      id: 4,
      name: "Custom 8-GPU Mining Rig",
      category: "rigs",
      price: "$12,500",
      description: "Complete mining rig with 8x RTX 3080, 1800W PSU, and mining OS preinstalled",
      image: "/lovable-uploads/87ff58c1-cb4b-4253-b162-d4ab8ef1567a.png",
      seller: "CryptoBuilds",
      verified: true,
      hot: false
    },
    {
      id: 5,
      name: "3000W Mining PSU",
      category: "cooling",
      price: "$899",
      description: "Server-grade power supply with 94% efficiency, designed for 24/7 operation",
      image: "/lovable-uploads/e8b433b3-ecad-4abd-8fbe-442359af2b39.png",
      seller: "PowerMaxx",
      verified: false,
      hot: false
    },
    {
      id: 6,
      name: "AI Developer Workstation",
      category: "workstations",
      price: "$8,499",
      description: "Complete AI development system with 2x RTX 4090, 64GB RAM, and 2TB NVMe",
      image: "/lovable-uploads/2cb1aa6f-2ada-4cd8-b897-ede9ee87d8e3.png",
      seller: "MineChain Official",
      verified: true,
      hot: true
    }
  ];

  const handleViewDeal = (productId: number) => {
    const product = featuredProducts.find(p => p.id === productId);
    if (product) {
      setSelectedProduct({
        id: product.id,
        name: product.name,
        price: product.price
      });
    }
  };

  return (
    <section id="featured-listings" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0F172A] opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Featured Hardware <span className="text-[#F97316]">Listings</span>
          </h2>
          <p className="text-lg text-mine-silver mb-8">
            Explore top-rated hardware from verified vendors and community members
          </p>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-3 sm:grid-cols-6 bg-black/40 p-1 mb-8">
              <TabsTrigger value="all" className="text-xs sm:text-sm">All</TabsTrigger>
              <TabsTrigger value="gpus" className="text-xs sm:text-sm">GPUs</TabsTrigger>
              <TabsTrigger value="asics" className="text-xs sm:text-sm">ASICs</TabsTrigger>
              <TabsTrigger value="rigs" className="text-xs sm:text-sm">Mining Rigs</TabsTrigger>
              <TabsTrigger value="cooling" className="text-xs sm:text-sm">Power/Cooling</TabsTrigger>
              <TabsTrigger value="workstations" className="text-xs sm:text-sm">Workstations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onViewDeal={() => handleViewDeal(product.id)} 
                  />
                ))}
              </div>
            </TabsContent>
            
            {["gpus", "asics", "rigs", "cooling", "workstations"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredProducts
                    .filter((product) => product.category === category)
                    .map((product) => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        onViewDeal={() => handleViewDeal(product.id)} 
                      />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {selectedProduct && (
        <PaymentProcessor
          productId={selectedProduct.id}
          productName={selectedProduct.name}
          price={selectedProduct.price}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  seller: string;
  verified: boolean;
  hot: boolean;
}

interface ProductCardProps {
  product: Product;
  onViewDeal: () => void;
}

const ProductCard = ({ product, onViewDeal }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="bg-black/40 border border-white/10 overflow-hidden">
        <div className="relative h-48 overflow-hidden bg-gray-900">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center transform transition-transform duration-300 hover:scale-110"
          />
          
          <div className="absolute top-2 left-2 flex gap-2">
            {product.verified && (
              <Badge className="bg-[#0EA5E9]">Verified Seller</Badge>
            )}
            {product.hot && (
              <Badge className="bg-[#F97316]">Hot Deal</Badge>
            )}
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-white text-lg">{product.name}</h3>
            <span className="text-[#F97316] font-bold">{product.price}</span>
          </div>
          
          <p className="text-mine-silver mb-4 text-sm h-10">{product.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-mine-silver">Seller: {product.seller}</span>
            <Button 
              variant="outline"
              className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10"
              onClick={onViewDeal}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              View Deal
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
