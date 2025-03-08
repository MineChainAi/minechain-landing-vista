
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const EducationCTA = () => {
  const { toast } = useToast();
  const [isHovering, setIsHovering] = useState(false);
  
  const handleSubscribe = () => {
    toast({
      title: "Education Updates Subscription",
      description: "Thank you for subscribing to our educational content updates!",
      duration: 5000,
    });
  };
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#F97316]/10 to-[#0EA5E9]/10 border border-[#1E293B] rounded-xl p-8 md:p-16 hover:shadow-lg hover:shadow-[#F97316]/5 transition-all duration-500 animate-fade-in">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] rounded-full blur-xl opacity-40" />
                <GraduationCap className={`h-16 w-16 text-white relative z-10 transition-transform duration-500 ${isHovering ? 'rotate-12' : ''}`} />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Continue Your 
              <span className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] bg-clip-text text-transparent"> Learning Journey</span>
            </h2>
            
            <p className="text-lg text-mine-silver mb-10">
              Join our educational community and get access to new courses, guides, and resources as they're released.
              Stay at the forefront of AI, blockchain, and decentralized computing technology.
            </p>
            
            <Button 
              size="lg" 
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white relative group overflow-hidden"
              onClick={handleSubscribe}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span className="relative z-10 flex items-center">
                Subscribe to Education Updates <ArrowRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            
            <p className="mt-6 text-sm text-mine-silver">
              Join over 10,000 learners mastering blockchain and AI technology with MineChain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
