
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Enterprise } from "@/components/Enterprise";
import { Integration } from "@/components/Integration";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-mine-dark">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="enterprise">
        <Enterprise />
      </div>
      <div id="integration">
        <Integration />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
