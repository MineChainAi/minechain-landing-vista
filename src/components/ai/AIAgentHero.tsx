
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain } from "lucide-react";
import { motion } from "framer-motion";

export const AIAgentHero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
                Custom-Built AI
              </span>
              <br /> 
              Designed, Deployed & Powered
            </h1>
            
            <p className="text-lg md:text-xl text-mine-silver mb-8 max-w-xl">
              We engineer, optimize, and host custom AI agents tailored to your business, 
              research, and automation needs. Our end-to-end AI infrastructure delivers scalable, 
              compute-driven solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#0EA5E9]/50 text-[#0EA5E9] hover:bg-[#0EA5E9]/10"
              >
                Explore Solutions
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/20 via-[#0EA5E9]/20 to-[#F97316]/20 rounded-full blur-3xl opacity-30" />
            
            <div className="relative bg-black/40 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 bg-gradient-to-r from-[#F97316]/20 to-[#0EA5E9]/20 p-4 rounded-lg border border-white/10 flex items-center">
                  <Brain className="h-12 w-12 text-[#F97316] mr-4" />
                  <div>
                    <h3 className="text-white font-bold">AI Agent Hub</h3>
                    <p className="text-mine-silver text-sm">Custom AI solutions, powered by MineChain</p>
                  </div>
                </div>
                
                <div className="bg-black/60 p-4 rounded-lg border border-white/10">
                  <div className="text-sm font-bold text-[#0EA5E9]">GPUs Deployed</div>
                  <div className="text-2xl font-bold mt-2">550+</div>
                </div>
                
                <div className="bg-black/60 p-4 rounded-lg border border-white/10">
                  <div className="text-sm font-bold text-[#F97316]">Custom Agents</div>
                  <div className="text-2xl font-bold mt-2">85+</div>
                </div>
                
                <div className="bg-black/60 p-4 rounded-lg border border-white/10">
                  <div className="text-sm font-bold text-[#0EA5E9]">Model Types</div>
                  <div className="text-2xl font-bold mt-2">12</div>
                </div>
                
                <div className="bg-black/60 p-4 rounded-lg border border-white/10">
                  <div className="text-sm font-bold text-[#F97316]">SLA Uptime</div>
                  <div className="text-2xl font-bold mt-2">99.9%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
