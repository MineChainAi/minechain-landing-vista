
import { Building, MapPin } from "lucide-react";

export const RealEstateHero = () => {
  return (
    <div className="relative bg-[#0A0F1D] py-20">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yMCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-6">
          <div className="p-3 bg-[#F97316]/10 border border-[#F97316]/20 rounded-lg">
            <Building className="h-10 w-10 text-[#F97316]" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Real Estate<span className="text-[#F97316]">Mine</span>
        </h1>
        
        <p className="text-lg text-mine-silver max-w-2xl mx-auto text-center mb-8">
          At MineChain, we bring 30+ years of industrial real estate experience, closing over $10 billion in transactions with high-net-worth clients, institutional investors, and forward-thinking developers.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          <div className="bg-[#0F172A] border border-[#F97316]/20 rounded-lg p-4 flex items-center gap-3 flex-1 min-w-[250px]">
            <div className="p-2 rounded-full bg-[#F97316]/10">
              <Building className="h-6 w-6 text-[#F97316]" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Acquisition & Disposition</h3>
              <p className="text-sm text-mine-silver">Strategic purchasing and sales of industrial properties</p>
            </div>
          </div>
          
          <div className="bg-[#0F172A] border border-[#0EA5E9]/20 rounded-lg p-4 flex items-center gap-3 flex-1 min-w-[250px]">
            <div className="p-2 rounded-full bg-[#0EA5E9]/10">
              <MapPin className="h-6 w-6 text-[#0EA5E9]" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Energy Site Selection</h3>
              <p className="text-sm text-mine-silver">Low-cost power, sustainable energy sources, and grid stability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
