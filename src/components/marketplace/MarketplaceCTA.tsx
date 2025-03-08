
import { ShoppingCart, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MarketplaceCTA = () => {
  const handleBrowseMarketplace = () => {
    const featuredListingsElement = document.getElementById('featured-listings');
    if (featuredListingsElement) {
      featuredListingsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0c1222] to-black border border-[#1E293B] rounded-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Buy or Sell Hardware on MineChain?
              </h2>
              <p className="text-mine-silver max-w-2xl mx-auto">
                Join the MineChain Marketplace to access exclusive hardware deals, trusted vendors,
                and a vibrant community of miners and AI developers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#F97316] to-[#F97316]/80 hover:from-[#F97316]/90 hover:to-[#F97316]/70 text-white"
                onClick={handleBrowseMarketplace}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Browse Marketplace
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10"
                onClick={() => window.open('https://discord.gg/CmTXH8ejf4', '_blank')}
              >
                <Server className="mr-2 h-5 w-5" />
                Become a Vendor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
