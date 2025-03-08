
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EducationHero } from "@/components/education/EducationHero";
import { EducationCourses } from "@/components/education/EducationCourses";
import { EducationResources } from "@/components/education/EducationResources";
import { EducationGuides } from "@/components/education/EducationGuides";
import { EducationCTA } from "@/components/education/EducationCTA";

const EducationHub = () => {
  return (
    <>
      <Helmet>
        <title>AI & Blockchain Education Hub | Learn & Grow | MineChain</title>
        <meta name="description" content="Explore MineChain's educational resources on AI, blockchain, decentralized compute, and mining. Learn from beginner to advanced levels." />
      </Helmet>
      <div className="min-h-screen bg-mine-dark text-white">
        <Navbar />
        <EducationHero />
        <EducationCourses />
        <EducationResources />
        <EducationGuides />
        <EducationCTA />
        <Footer />
      </div>
    </>
  );
};

export default EducationHub;
