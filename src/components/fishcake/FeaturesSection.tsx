
import React from "react";
import { FeatureCard } from "./FeatureCard";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Word Selection",
      description: "All words are carefully selected from blockchain and crypto terminology. Expand your vocabulary while having fun testing your knowledge.",
      delay: 0.3
    },
    {
      title: "Share Your Score",
      description: "Challenge your friends and colleagues to beat your score. Show off your blockchain expertise and climb the leaderboards of crypto knowledge.",
      delay: 0.4
    },
    {
      title: "Coming Soon",
      description: "Stay tuned for daily challenges, themed word packs, and more blockchain-related games on the Fishcake.ai platform. The future of Web3 gaming is here!",
      delay: 0.5
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {features.map((feature, index) => (
        <FeatureCard 
          key={index}
          title={feature.title}
          description={feature.description}
          delay={feature.delay}
        />
      ))}
    </div>
  );
};
