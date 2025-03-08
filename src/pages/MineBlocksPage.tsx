
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MineBlocksHero } from "@/components/mineblocks/MineBlocksHero";
import { MineBlocksFeatures } from "@/components/mineblocks/MineBlocksFeatures";
import { MineBlocksStats } from "@/components/mineblocks/MineBlocksStats";
import { MineBlocksCTA } from "@/components/mineblocks/MineBlocksCTA";

const MineBlocksPage = () => {
  return (
    <>
      <Helmet>
        <title>MineChain Mining Pool | The OG Home for $MINE Miners | MineChain</title>
        <meta name="description" content="Join MineChain Mining Pool - the ultimate GPU-friendly KawPow PoW mining hub designed for true miners, AI pioneers, and blockchain builders." />
      </Helmet>
      <div className="min-h-screen bg-mine-dark text-white">
        <Navbar />
        <MineBlocksHero />
        <MineBlocksFeatures />
        <MineBlocksStats />
        <MineBlocksCTA />
        <Footer />
      </div>
    </>
  );
};

export default MineBlocksPage;
