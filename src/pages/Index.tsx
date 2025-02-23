
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Enterprise } from "@/components/Enterprise";
import { GPUMarketplace } from "@/components/GPUMarketplace";
import { MiningRewards } from "@/components/MiningRewards";
import { NodeValidators } from "@/components/NodeValidators";
import { Roadmap } from "@/components/Roadmap";
import { Integration } from "@/components/Integration";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CryptoTicker } from "@/components/CryptoTicker";
import { CommunityUpdates } from "@/components/CommunityUpdates";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { VideoCallButton } from "@/components/VideoCallButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-mine-dark">
      <Navbar />
      <CryptoTicker />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="marketplace">
        <GPUMarketplace />
      </div>
      <div id="rewards">
        <MiningRewards />
      </div>
      <div id="enterprise">
        <Enterprise />
      </div>
      <div id="validators">
        <NodeValidators />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="integration">
        <Integration />
      </div>
      <CommunityUpdates />
      <NewsletterSignup />
      <Footer />
      <VideoCallButton />
    </div>
  );
};

export default Index;
