
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Zap, Calendar, Building } from "lucide-react";

export const PropertyShowcase = () => {
  const properties = [
    {
      title: "Data Center Campus - Houston, TX",
      type: "Data Center",
      power: "25 MW",
      size: "150,000 sq ft",
      description: "Tier 3+ data center with renewable energy access, fiber connectivity, and expansion capabilities.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      title: "Industrial Power Site - Saratoga, NY",
      type: "Energy Infrastructure",
      power: "100 MW",
      size: "40 acres",
      description: "Former manufacturing facility with robust power infrastructure, situated near hydroelectric generation.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      title: "AI Compute Facility - Austin, TX",
      type: "HPC Campus",
      power: "15 MW",
      size: "80,000 sq ft",
      description: "Purpose-built for high-performance computing with liquid cooling and green energy contracts in place.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Featured Properties</h2>
          <p className="text-mine-silver">Exclusive industrial and energy infrastructure opportunities</p>
        </div>
        <Button variant="ghost" className="text-[#0EA5E9] hover:text-[#0EA5E9] hover:bg-[#0EA5E9]/10">
          View All Properties <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <div 
            key={index}
            className="bg-[#0F172A] border border-[#1E293B] rounded-lg overflow-hidden hover:border-[#0EA5E9]/30 transition-all duration-300"
          >
            {property.image && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">{property.title}</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center">
                  <Building className="h-4 w-4 text-[#0EA5E9] mr-2" />
                  <span className="text-mine-silver">{property.type}</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-4 w-4 text-[#F97316] mr-2" />
                  <span className="text-mine-silver">Power: {property.power}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-[#0EA5E9] mr-2" />
                  <span className="text-mine-silver">Size: {property.size}</span>
                </div>
              </div>
              
              <p className="text-mine-silver mb-4">{property.description}</p>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-mine-silver flex items-center">
                  <Calendar className="h-3 w-3 mr-1" /> Available Now
                </span>
                <Button size="sm" className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white">
                  Request Info
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
