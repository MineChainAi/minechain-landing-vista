
import React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FishcakeHero } from "@/components/fishcake/FishcakeHero";
import { GameSection } from "@/components/fishcake/GameSection";
import { FeaturesSection } from "@/components/fishcake/FeaturesSection";
import { FooterNote } from "@/components/fishcake/FooterNote";
import { BackgroundElements } from "@/components/fishcake/BackgroundElements";

const FishcakePage = () => {
  return (
    <>
      <Helmet>
        <title>Fishcake - MineChain</title>
        <meta name="description" content="Play PoWrdle, a blockchain word game on MineChain's Fishcake platform." />
      </Helmet>
      <div className="min-h-screen bg-mine-dark overflow-hidden">
        <Navbar />
        
        <section className="pt-24 pb-16 relative overflow-hidden">
          <BackgroundElements />
          
          <div className="container mx-auto px-4 relative z-10">
            <FishcakeHero />
            <GameSection />
            <FeaturesSection />
            <FooterNote />
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default FishcakePage;
