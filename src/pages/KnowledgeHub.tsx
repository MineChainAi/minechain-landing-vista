
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LearningPathways } from "@/components/knowledge/LearningPathways";
import { ResourceLibrary } from "@/components/knowledge/ResourceLibrary";
import { CommunityGuides } from "@/components/knowledge/CommunityGuides";
import { FAQSection } from "@/components/knowledge/FAQSection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { HubHero } from "@/components/knowledge/HubHero";

const KnowledgeHub = () => {
  return (
    <div className="min-h-screen bg-mine-dark">
      <Navbar />
      <div className="pt-16">
        <HubHero />
        <div className="container mx-auto px-4 py-16">
          <LearningPathways />
          <ResourceLibrary />
          <CommunityGuides />
          <FAQSection />
        </div>
        <NewsletterSignup />
      </div>
      <Footer />
    </div>
  );
};

export default KnowledgeHub;
