
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { RealEstateHero } from "@/components/realestate/RealEstateHero";
import { ExpertiseAreas } from "@/components/realestate/ExpertiseAreas";
import { PropertyShowcase } from "@/components/realestate/PropertyShowcase";
import { ClientTestimonials } from "@/components/realestate/ClientTestimonials";
import { ContactSection } from "@/components/realestate/ContactSection";
import { RealEstateAIAgent } from "@/components/realestate/RealEstateAIAgent";

const RealEstateHub = () => {
  return (
    <div className="min-h-screen bg-mine-dark">
      <Navbar />
      <div className="pt-16">
        <RealEstateHero />
        <div className="container mx-auto px-4 py-16">
          <ExpertiseAreas />
          <PropertyShowcase />
          <ClientTestimonials />
          <ContactSection />
        </div>
        <NewsletterSignup />
      </div>
      <RealEstateAIAgent />
      <Footer />
    </div>
  );
};

export default RealEstateHub;
