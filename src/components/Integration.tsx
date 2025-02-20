
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Integration = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powered by XRP Ledger
            </h2>
            <p className="text-mine-silver mb-8 text-lg">
              Experience lightning-fast transactions and seamless interoperability with the XRP Ledger integration. Build scalable applications with confidence using our enterprise-grade infrastructure.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                className="border-mine-blue text-mine-blue hover:bg-mine-blue hover:text-white"
                onClick={() => window.open('https://xrpl.org/', '_blank', 'noopener,noreferrer')}
              >
                Read Documentation
              </Button>
              <Button 
                className="bg-mine-blue hover:bg-mine-blue/90"
                onClick={() => window.open('https://ripple.com/developer-resources/', '_blank', 'noopener,noreferrer')}
              >
                Start Building <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <a 
              href="https://xrpl.org/docs/tutorials" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="glass-card p-8 rounded-lg aspect-video flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-mine-blue/20">
                <div className="absolute inset-0 bg-gradient-to-br from-mine-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 space-y-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-white via-mine-silver to-mine-blue bg-clip-text text-transparent">
                    XRP Integration Demo
                  </span>
                  <div className="flex items-center justify-center gap-2 text-mine-silver/80 group-hover:text-white transition-colors">
                    <span>Explore Tutorials</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
