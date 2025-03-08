
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { MarketplaceCategories } from "@/components/marketplace/MarketplaceCategories";
import { FeaturedListings } from "@/components/marketplace/FeaturedListings";
import { MarketplacePerks } from "@/components/marketplace/MarketplacePerks";
import { MarketplaceCTA } from "@/components/marketplace/MarketplaceCTA";
import { CryptoPayments } from "@/components/marketplace/CryptoPayments";

const MarketplacePage = () => {
  return (
    <>
      <Helmet>
        <title>Hardware Marketplace for Miners & AI Builders | MineChain</title>
        <meta 
          name="description" 
          content="Buy, sell, and trade high-performance computing hardware like GPUs, ASICs, AI workstations, and mining rigs from trusted vendors and community members."
        />
      </Helmet>
      <div className="min-h-screen bg-mine-dark text-white">
        <Navbar />
        <MarketplaceHero />
        <MarketplaceCategories />
        <FeaturedListings />
        <CryptoPayments />
        <MarketplacePerks />
        <MarketplaceCTA />
        <Footer />
      </div>
    </>
  );
};

export default MarketplacePage;
