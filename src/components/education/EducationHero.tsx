
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Lightbulb, GraduationCap } from "lucide-react";
import { useState } from "react";

export const EducationHero = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center gap-2 mb-4 animate-fade-in">
              <GraduationCap className="h-6 w-6 text-[#F97316]" />
              <span className="text-mine-silver font-medium">MineChain Education Hub</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up" style={{animationDelay: "0.1s"}}>
              <span className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] bg-clip-text text-transparent">
                Learn, Build, Innovate
              </span>
              <br /> 
              Your AI & Blockchain Journey
            </h1>
            
            <p className="text-lg md:text-xl text-mine-silver mb-8 max-w-xl animate-slide-up" style={{animationDelay: "0.3s"}}>
              Discover comprehensive resources on AI development, blockchain technology,
              decentralized compute infrastructure, and mining optimization. From beginner
              to advanced levels, expand your knowledge with MineChain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: "0.5s"}}>
              <Button 
                size="lg" 
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-white group relative overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10 flex items-center">
                  Start Learning <ArrowRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#0EA5E9]/50 text-[#0EA5E9] hover:bg-[#0EA5E9]/10 group"
              >
                <BookOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Browse Resources
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-scale-in" style={{animationDelay: "0.7s"}}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/20 via-[#0EA5E9]/20 to-[#F97316]/20 rounded-full blur-3xl opacity-30" />
            
            <div className="relative bg-black/40 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:shadow-lg hover:shadow-[#F97316]/10">
              <div className="absolute -top-8 -right-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#F97316] rounded-full blur-xl opacity-20 animate-pulse"></div>
                  <Lightbulb className="h-16 w-16 text-[#F97316] relative z-10" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-white">Education Paths</h3>
              
              <div className="space-y-4">
                <div className="bg-black/60 p-4 rounded-lg border border-white/10 hover:border-[#F97316]/30 transition-all duration-300 hover:bg-black/70 flex items-center">
                  <div className="bg-[#F97316]/20 p-2 rounded-lg mr-4">
                    <GraduationCap className="h-6 w-6 text-[#F97316]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">AI Development Fundamentals</h4>
                    <p className="text-sm text-mine-silver">From ML basics to advanced neural networks</p>
                  </div>
                </div>
                
                <div className="bg-black/60 p-4 rounded-lg border border-white/10 hover:border-[#0EA5E9]/30 transition-all duration-300 hover:bg-black/70 flex items-center">
                  <div className="bg-[#0EA5E9]/20 p-2 rounded-lg mr-4">
                    <BookOpen className="h-6 w-6 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Blockchain & Mining</h4>
                    <p className="text-sm text-mine-silver">Consensus mechanisms, tokenomics & mining</p>
                  </div>
                </div>
                
                <div className="bg-black/60 p-4 rounded-lg border border-white/10 hover:border-[#F97316]/30 transition-all duration-300 hover:bg-black/70 flex items-center">
                  <div className="bg-[#F97316]/20 p-2 rounded-lg mr-4">
                    <Lightbulb className="h-6 w-6 text-[#F97316]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Web3 Infrastructure</h4>
                    <p className="text-sm text-mine-silver">Building decentralized compute networks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
