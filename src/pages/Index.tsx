
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Enterprise } from "@/components/Enterprise";
import { GPUMarketplace } from "@/components/GPUMarketplace";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CryptoTicker } from "@/components/CryptoTicker";
import { CommunityUpdates } from "@/components/CommunityUpdates";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { VideoCallButton } from "@/components/VideoCallButton";
import { CollaborativeWorkspace } from "@/components/CollaborativeWorkspace";
import { ZohoChat } from "@/components/ZohoChat";
import { CommunityEngagement } from "@/components/CommunityEngagement";
import { XPostsSection } from "@/components/XPostsSection";

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
      <div id="workspace">
        <CollaborativeWorkspace />
      </div>
      <div id="community">
        <CommunityEngagement />
      </div>
      <CommunityUpdates />
      <XPostsSection />
      <NewsletterSignup />
      <Footer />
      <VideoCallButton />
      <ZohoChat />
    </div>
  );
};

export default Index;
