
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
            <div className="glass-card p-8 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-mine-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-2xl text-mine-silver relative z-10">XRP Integration Demo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
