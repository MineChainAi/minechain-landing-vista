
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HostingHero } from "@/components/hosting/HostingHero";
import { HostingFeatures } from "@/components/hosting/HostingFeatures";
import { HostingPlans } from "@/components/hosting/HostingPlans";
import { HostingFacilities } from "@/components/hosting/HostingFacilities";
import { HostingCTA } from "@/components/hosting/HostingCTA";
import { HostingPowerRates } from "@/components/hosting/HostingPowerRates";

const HostingPage = () => {
  return (
    <>
      <Helmet>
        <title>GPU & AI Workstation Hosting | MineChain</title>
        <meta name="description" content="Host your AI workstation, mining rig, or custom GPU cluster in our state-of-the-art data center with industry-leading $0.08/kWh power rates." />
      </Helmet>
      <div className="min-h-screen bg-mine-dark text-white">
        <Navbar />
        <HostingHero />
        <HostingFeatures />
        <HostingPowerRates />
        <HostingFacilities />
        <HostingPlans />
        <HostingCTA />
        <Footer />
      </div>
    </>
  );
};

export default HostingPage;
