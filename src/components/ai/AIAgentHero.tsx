
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Sparkles } from "lucide-react";

export const AIAgentHero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up" style={{animationDelay: "0.1s"}}>
              <span className="bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
                Custom-Built AI
              </span>
              <br /> 
              Designed, Deployed & Powered
            </h1>
            
            <p className="text-lg md:text-xl text-mine-silver mb-8 max-w-xl animate-slide-up" style={{animationDelay: "0.3s"}}>
              We engineer, optimize, and host custom AI agents tailored to your business, 
              research, and automation needs. Our end-to-end AI infrastructure delivers scalable, 
              compute-driven solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: "0.5s"}}>
              <Button 
                size="lg" 
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-white group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#0EA5E9]/50 text-[#0EA5E9] hover:bg-[#0EA5E9]/10 group"
              >
                <span className="flex items-center">
                  Explore Solutions
                  <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse" />
                </span>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-scale-in" style={{animationDelay: "0.7s"}}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/20 via-[#0EA5E9]/20 to-[#F97316]/20 rounded-full blur-3xl opacity-30" />
            
            <div className="relative bg-black/40 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:shadow-lg hover:shadow-[#F97316]/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 bg-gradient-to-r from-[#F97316]/20 to-[#0EA5E9]/20 p-4 rounded-lg border border-white/10 flex items-center hover:border-white/20 transition-all duration-300">
                  <Brain className="h-12 w-12 text-[#F97316] mr-4 animate-pulse" />
                  <div>
                    <h3 className="text-white font-bold">AI Agent Hub</h3>
                    <p className="text-mine-silver text-sm">Custom AI solutions, powered by MineChain</p>
                  </div>
                </div>
                
                <div className="bg-black/60 p-4 rounded-lg border border-white/10 hover:border-[#0EA5E9]/30 transition-all duration-300 hover:bg-black/70">
                  <div className="text-sm font-bold text-[#0EA5E9]">GPUs Deployed</div>
                  <div className="text-2xl font-bold mt-2 group-hover:scale-110 transition-transform duration-300">550+</div>
                </div>
                
                <div className="bg-black/60 p-4 rounded-lg border border-white/10 hover:border-[#F97316]/30 transition-all duration-300 hover:bg-black/70">
                  <div className="text-sm font-bold text-[#F97316]">Custom Agents</div>
                  <div className="text-2xl font-bold mt-2">85+</div>
                </div>
                
                <div className="bg-black/60 p-4 rounded-lg border border-white/10 hover:border-[#0EA5E9]/30 transition-all duration-300 hover:bg-black/70">
                  <div className="text-sm font-bold text-[#0EA5E9]">Model Types</div>
                  <div className="text-2xl font-bold mt-2">12</div>
                </div>
                
                <div className="bg-black/60 p-4 rounded-lg border border-white/10 hover:border-[#F97316]/30 transition-all duration-300 hover:bg-black/70">
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
