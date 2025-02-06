import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Integration } from "@/components/Integration";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-mine-dark">
      <Hero />
      <Features />
      <Integration />
      <Footer />
    </div>
  );
};

export default Index;