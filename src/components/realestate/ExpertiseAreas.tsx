
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Cpu, Zap, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const ExpertiseAreas = () => {
  const expertise = [
    {
      title: "Acquisition & Disposition",
      description: "Strategic purchasing and sales of industrial properties, including data centers, power-intensive sites, and blockchain infrastructure hubs.",
      icon: <Building className="h-6 w-6 text-[#F97316]" />,
      color: "from-[#F97316]/20 to-transparent",
      border: "border-[#F97316]/30",
    },
    {
      title: "Energy Site Selection",
      description: "Identifying and securing optimal locations with low-cost power, sustainable energy sources, and grid stability for AI, mining, and high-performance computing operations.",
      icon: <Zap className="h-6 w-6 text-[#0EA5E9]" />,
      color: "from-[#0EA5E9]/20 to-transparent",
      border: "border-[#0EA5E9]/30",
    },
    {
      title: "Data Center & Industrial Development",
      description: "Expertise in building and optimizing Tier 3+ data centers, integrating AI workloads, blockchain computing, and mining operations with scalable infrastructure.",
      icon: <Cpu className="h-6 w-6 text-[#F97316]" />,
      color: "from-[#F97316]/20 to-transparent",
      border: "border-[#F97316]/30",
    },
    {
      title: "Investment-Grade Real Estate",
      description: "Navigating complex zoning laws, utility agreements, and site entitlements to ensure long-term viability and high-yield investment opportunities.",
      icon: <DollarSign className="h-6 w-6 text-[#0EA5E9]" />,
      color: "from-[#0EA5E9]/20 to-transparent",
      border: "border-[#0EA5E9]/30",
    }
  ];

  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Our Expertise</h2>
          <p className="text-mine-silver">We own, develop, and operate energy-backed infrastructure</p>
        </div>
        <Button variant="ghost" className="text-[#F97316] hover:text-[#F97316] hover:bg-[#F97316]/10">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertise.map((item, index) => (
          <Card key={index} className="bg-[#0F172A] border-[#1E293B] hover:border-[#F97316]/30 transition-all duration-300 overflow-hidden group">
            <div className={`h-1 w-full bg-gradient-to-r ${item.color}`}></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg bg-[#0F172A] ${item.border}`}>
                  {item.icon}
                </div>
              </div>
              <CardTitle className="text-white mt-2">{item.title}</CardTitle>
              <CardDescription className="text-mine-silver">
                {item.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
