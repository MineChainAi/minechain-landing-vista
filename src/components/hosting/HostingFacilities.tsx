
import { Cpu, Zap, Server, Shield } from "lucide-react";

export const HostingFacilities = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] bg-clip-text text-transparent">
              State-of-the-Art Hosting Facilities
            </h2>
            
            <p className="text-lg text-mine-silver mb-8">
              Our purpose-built data centers are designed specifically for high-density GPU workloads 
              and mining operations, providing the optimal environment for your hardware to thrive.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F97316]/10 border border-[#F97316]/20 rounded-lg">
                  <Server className="h-6 w-6 text-[#F97316]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">99.99% Uptime Guarantee</h3>
                  <p className="text-mine-silver">
                    Redundant power systems, cooling, and network connectivity ensure 
                    your hardware stays online and productive.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F97316]/10 border border-[#F97316]/20 rounded-lg">
                  <Zap className="h-6 w-6 text-[#F97316]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Low-Cost Energy</h3>
                  <p className="text-mine-silver">
                    Strategically located in regions with some of the lowest electricity costs 
                    in North America, maximizing your profitability.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F97316]/10 border border-[#F97316]/20 rounded-lg">
                  <Cpu className="h-6 w-6 text-[#F97316]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Immersion Cooling Options</h3>
                  <p className="text-mine-silver">
                    Advanced cooling solutions including immersion cooling for maximum 
                    performance and hardware longevity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F97316]/10 border border-[#F97316]/20 rounded-lg">
                  <Shield className="h-6 w-6 text-[#F97316]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Enterprise-Grade Security</h3>
                  <p className="text-mine-silver">
                    24/7 physical security, surveillance systems, and controlled access 
                    to protect your valuable hardware investments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden border border-[#1E293B]">
              <img 
                src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="FPGA Mining Operation" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 p-6 bg-[#0F172A] border border-[#1E293B] rounded-xl">
              <div className="flex items-center justify-between gap-6 mb-4">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-white">99.99%</h4>
                  <p className="text-xs text-mine-silver">Uptime</p>
                </div>
                <div className="h-12 w-px bg-[#1E293B]" />
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-white">24/7</h4>
                  <p className="text-xs text-mine-silver">Support</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-6">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-white">50MW+</h4>
                  <p className="text-xs text-mine-silver">Capacity</p>
                </div>
                <div className="h-12 w-px bg-[#1E293B]" />
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-white">$0.04</h4>
                  <p className="text-xs text-mine-silver">per kWh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
