
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TokenHero } from "@/components/token/TokenHero";
import { TokenFeatures } from "@/components/token/TokenFeatures";
import { TokenEcosystem } from "@/components/token/TokenEcosystem";
import { TokenCTA } from "@/components/token/TokenCTA";
import { TokenSupply } from "@/components/token/TokenSupply";

const TokenPage = () => {
  return (
    <>
      <Helmet>
        <title>$MINE Token | The Backbone of Decentralized Compute | MineChain</title>
        <meta name="description" content="$MINE is a real asset-backed cryptocurrency designed to power AI workloads, decentralized mining, and compute infrastructure. Built on KawPow PoW." />
      </Helmet>
      <div className="min-h-screen bg-mine-dark text-white">
        <Navbar />
        <TokenHero />
        <TokenSupply />
        <TokenFeatures />
        <TokenEcosystem />
        <TokenCTA />
        <Footer />
      </div>
    </>
  );
};

export default TokenPage;
