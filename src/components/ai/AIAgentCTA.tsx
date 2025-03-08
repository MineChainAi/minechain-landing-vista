
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot } from "lucide-react";
import { useState } from "react";
import { PropertyRequestDialog } from "@/components/realestate/PropertyRequestDialog";
import { useToast } from "@/components/ui/use-toast";

export const AIAgentCTA = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();
  
  const handleStartProject = () => {
    setDialogOpen(true);
    toast({
      title: "AI Project Request",
      description: "Fill out the form to get started with your custom AI agent project!",
      duration: 5000,
    });
  };
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#F97316]/10 to-[#0EA5E9]/10 border border-[#1E293B] rounded-xl p-8 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] rounded-full blur-xl opacity-40" />
                <Bot className="h-16 w-16 text-white relative z-10" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Build 
              <span className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] bg-clip-text text-transparent"> the Future?</span>
            </h2>
            
            <p className="text-lg text-mine-silver mb-10">
              Get a custom AI agent designed, built, and hosted with MineChain today.
              Our team of AI engineers and infrastructure experts will work with you
              to create the perfect solution for your needs.
            </p>
            
            <Button 
              size="lg" 
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white relative group overflow-hidden"
              onClick={handleStartProject}
            >
              <span className="relative z-10 flex items-center">
                Start Your AI Project Today <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            
            <p className="mt-6 text-sm text-mine-silver">
              AI-Powered. Compute-Driven. MineChain Engineered.
            </p>
          </div>
        </div>
      </div>
      
      <PropertyRequestDialog 
        isOpen={dialogOpen} 
        onClose={() => setDialogOpen(false)} 
        propertyTitle="AI Agent Project Inquiry" 
      />
    </section>
  );
};
