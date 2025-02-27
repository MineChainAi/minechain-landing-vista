
import { useEffect, useState } from 'react';
import { Users, Globe, Award } from 'lucide-react';
import { CommunityStats } from './community/CommunityStats';
import { TrendingTopics } from './community/TrendingTopics';
import { UpcomingEvents } from './community/UpcomingEvents';
import { CommunityCallToAction } from './community/CommunityCallToAction';

export const CommunityEngagement = () => {
  // Mock engagement data
  const communityStats = [
    { label: 'Active Members', value: '1,245', icon: <Users className="h-5 w-5 text-[#0EA5E9]" />, change: '+12%' },
    { label: 'Projects', value: '87', icon: <Award className="h-5 w-5 text-[#F97316]" />, change: '+5%' },
    { label: 'Global Reach', value: '32 countries', icon: <Globe className="h-5 w-5 text-[#0EA5E9]" />, change: '+3' }
  ];
  
  // State for trending topics
  const [initialTopics] = useState([
    { id: 1, title: 'AI Model Optimization for GPU Clusters', likes: 89, comments: 34 },
    { id: 2, title: 'Decentralized Infrastructure Scaling', likes: 76, comments: 29 },
    { id: 3, title: 'Embedding Quantum Computing in Blockchain', likes: 63, comments: 42 }
  ]);
  
  const upcomingEvents = [
    { id: 1, title: 'AI Compute Architecture Workshop', date: 'June 15, 2025', participants: 78 },
    { id: 2, title: 'Blockchain Innovation Roundtable', date: 'June 22, 2025', participants: 45 },
    { id: 3, title: 'Dev Caballerz Community Meetup', date: 'June 30, 2025', participants: 120 }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-mine-dark to-black/80">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0EA5E9] via-white to-[#F97316] bg-clip-text text-transparent">
            Community Engagement Hub
          </h2>
          <p className="text-mine-silver max-w-2xl mx-auto">
            Connect, collaborate, and grow with our global community of innovators, developers, and AI enthusiasts.
          </p>
        </div>
        
        {/* Community Stats */}
        <CommunityStats stats={communityStats} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Trending Topics */}
          <TrendingTopics initialTopics={initialTopics} />
          
          {/* Upcoming Events */}
          <UpcomingEvents events={upcomingEvents} />
        </div>
        
        {/* Join Community CTA */}
        <CommunityCallToAction />
      </div>
    </section>
  );
};
