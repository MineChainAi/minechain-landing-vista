
import { useState } from "react";
import { getAllResources } from "./data/ResourcesData";
import { CategoryTabs } from "./CategoryTabs";
import { BeginnerNotice } from "./BeginnerNotice";
import { ResourcesList } from "./ResourcesList";
import { LearningPathways } from "./LearningPathways";

export const EducationResources = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const allResources = getAllResources();
  const filteredResources = activeTab === "all" 
    ? allResources 
    : allResources.filter(resource => resource.category === activeTab);

  return (
    <section className="py-20 bg-gradient-to-b from-black/0 to-black/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Educational <span className="text-gradient-orange">Resources</span>
          </h2>
          <p className="text-mine-silver text-lg mb-10">
            Access our library of documents, guides, code samples, and videos to support your learning journey.
          </p>
          
          <div className="mb-10">
            <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          
          <div className="flex justify-center mb-8">
            <BeginnerNotice />
          </div>
        </div>
        
        <ResourcesList resources={filteredResources} />
        
        <LearningPathways />
      </div>
    </section>
  );
};
