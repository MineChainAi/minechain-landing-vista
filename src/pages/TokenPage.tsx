
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TokenHero } from "@/components/token/TokenHero";
import { TokenFeatures } from "@/components/token/TokenFeatures";
import { TokenEcosystem } from "@/components/token/TokenEcosystem";
import { TokenCTA } from "@/components/token/TokenCTA";
import { TokenSupply } from "@/components/token/TokenSupply";
import { TokenWhitepaper } from "@/components/token/TokenWhitepaper";

const TokenPage = () => {
  return (
    <>
      <Helmet>
        <title>$MINE Token | Premium Crypto Asset | MineChain</title>
        <meta name="description" content="$MINE is a luxury asset-backed cryptocurrency designed for discerning investors. Experience premium decentralized finance with MineChain." />
      </Helmet>
      <div className="min-h-screen bg-mine-dark text-white">
        <Navbar />
        <TokenHero />
        <TokenSupply />
        <TokenFeatures />
        <TokenWhitepaper />
        <TokenEcosystem />
        <TokenCTA />
        <Footer />
      </div>
    </>
  );
};

export default TokenPage;
