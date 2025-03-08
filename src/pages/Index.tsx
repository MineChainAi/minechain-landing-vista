
import { Helmet } from "react-helmet";
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
import { ZohoChat } from "@/components/chat/ZohoChat";
import { CommunityEngagement } from "@/components/CommunityEngagement";
import { RealEstateAIAgent } from "@/components/realestate/RealEstateAIAgent";
import { AIAgentChat } from "@/components/ai/AIAgentChat";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MineChain - Enterprise GPU, AI Computing & Blockchain Network</title>
        <meta name="description" content="Decentralized GPU marketplace for AI computing, blockchain mining, and enterprise solutions. Access next-gen computing power through our network of trusted validators." />
        <meta name="keywords" content="GPU marketplace, AI computing, blockchain, crypto mining, node validators, enterprise GPU, decentralized computing" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MineChain",
              "url": "https://minechain.ai",
              "logo": "https://minechain.ai/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png",
              "description": "Decentralized GPU marketplace for AI computing, blockchain mining, and enterprise solutions.",
              "sameAs": [
                "https://twitter.com/MineChainAI",
                "https://discord.gg/CmTXH8ejf4"
              ]
            }
          `}
        </script>
      </Helmet>
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
        <div id="community">
          <CommunityEngagement />
        </div>
        <CommunityUpdates />
        <div id="workspace">
          <CollaborativeWorkspace />
        </div>
        <NewsletterSignup />
        <Footer />
        <VideoCallButton />
        <ZohoChat />
        <RealEstateAIAgent />
        <AIAgentChat />
      </div>
    </>
  );
};

export default Index;
