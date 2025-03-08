
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AIAgentHero } from "@/components/ai/AIAgentHero";
import { AIAgentFeatures } from "@/components/ai/AIAgentFeatures";
import { AIAgentStack } from "@/components/ai/AIAgentStack";
import { AIAgentIntegration } from "@/components/ai/AIAgentIntegration";
import { AIAgentCTA } from "@/components/ai/AIAgentCTA";
import { AIAgentChat } from "@/components/ai/AIAgentChat";

const AIAgentPage = () => {
  return (
    <>
      <Helmet>
        <title>Custom AI Agents | Design, Deploy, Host | MineChain</title>
        <meta name="description" content="MineChain designs, builds, and hosts custom AI agents for business, research, and automation. High-performance GPU infrastructure for your AI solutions." />
      </Helmet>
      <div className="min-h-screen bg-mine-dark text-white">
        <Navbar />
        <AIAgentHero />
        <AIAgentFeatures />
        <AIAgentStack />
        <AIAgentIntegration />
        <AIAgentCTA />
        <AIAgentChat />
        <Footer />
      </div>
    </>
  );
};

export default AIAgentPage;
