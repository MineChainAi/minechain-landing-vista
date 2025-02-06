import { Button } from "@/components/ui/button";

export const Integration = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powered by XRP Ledger
            </h2>
            <p className="text-mine-silver mb-8">
              Experience lightning-fast transactions and seamless interoperability with the XRP Ledger integration.
            </p>
            <Button variant="outline" className="border-mine-blue text-mine-blue hover:bg-mine-blue hover:text-white">
              Learn More
            </Button>
          </div>
          <div className="flex-1">
            <div className="glass-card p-8 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-2xl text-mine-silver">XRP Integration Demo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};