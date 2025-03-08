
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import { PropertyRequestDialog } from "@/components/realestate/PropertyRequestDialog";

export const HostingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  const plans = [
    {
      name: "Standard GPU Hosting",
      description: "Perfect for individual miners and small AI operations",
      price: "From $99/month per GPU",
      features: [
        "4U Server Space",
        "1.5kW Power Allocation",
        "Dedicated Cooling",
        "Remote Management",
        "Basic Monitoring",
        "99.9% Uptime SLA"
      ]
    },
    {
      name: "Enterprise AI Cluster",
      description: "Designed for AI companies and machine learning workloads",
      price: "From $2,499/month",
      featured: true,
      features: [
        "Full Rack Available",
        "Up to 15kW Power",
        "Advanced Cooling Solutions",
        "24/7 Technical Support",
        "Performance Optimization",
        "99.99% Uptime SLA",
        "Dedicated Network"
      ]
    },
    {
      name: "Custom Mining Solution",
      description: "Tailored for large-scale mining operations",
      price: "Custom Pricing",
      features: [
        "Multiple Rack Options",
        "Megawatt+ Power Available",
        "Immersion Cooling Options",
        "On-site Technical Team",
        "Advanced Security",
        "Custom Power Contracts",
        "Expansion Options"
      ]
    }
  ];

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  const handleCloseDialog = () => {
    setSelectedPlan(null);
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/50 via-transparent to-[#0F172A]/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
            Flexible Hosting Plans
          </h2>
          <p className="text-lg text-mine-silver">
            Choose the hosting package that best fits your needs, or contact us for a customized solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-[#0F172A] border rounded-xl overflow-hidden transition-all duration-300 relative ${
                plan.featured 
                  ? "border-[#F97316] ring-2 ring-[#F97316]/20 scale-105 z-10" 
                  : "border-[#1E293B] hover:border-[#1E293B]/80"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 inset-x-0 px-3 py-1 bg-[#F97316] text-white text-center text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.featured ? "pt-10" : ""}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-mine-silver mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <p className="text-lg font-semibold text-white">{plan.price}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-[#F97316] mr-3 shrink-0 mt-0.5" />
                      <span className="text-mine-silver">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.featured 
                      ? "bg-[#F97316] hover:bg-[#F97316]/90 text-white" 
                      : "bg-transparent border border-[#1E293B] hover:bg-[#1E293B]/30 text-white"
                  }`}
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  Request Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-mine-silver mb-6">
            Need a custom solution? Our hosting experts will work with you to design the perfect setup.
          </p>
          <Button 
            variant="outline" 
            className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10"
            onClick={() => handlePlanSelect("Custom Hosting Solution")}
          >
            Contact for Custom Quote
          </Button>
        </div>
      </div>

      {selectedPlan && (
        <PropertyRequestDialog 
          isOpen={!!selectedPlan} 
          onClose={handleCloseDialog} 
          propertyTitle={`Hosting Plan: ${selectedPlan}`} 
        />
      )}
    </section>
  );
};
