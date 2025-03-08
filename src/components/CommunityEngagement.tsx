
import { useEffect, useState } from 'react';
import { Users, Globe, Award, Newspaper, MessageSquare, Link } from 'lucide-react';
import { CommunityStats } from './community/CommunityStats';
import { TrendingTopics } from './community/TrendingTopics';
import { UpcomingEvents } from './community/UpcomingEvents';
import { CommunityCallToAction } from './community/CommunityCallToAction';
import { Button } from './ui/button';
import { CommunityBlogSection } from './community/CommunityBlogSection';
import { CommunityForumHighlights } from './community/CommunityForumHighlights';

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
        
        {/* Community Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            variant="outline" 
            className="bg-black/40 border-[#F97316]/20 hover:border-[#F97316] text-white hover:bg-[#F97316]/10"
            onClick={() => window.open('https://discord.gg/CmTXH8ejf4', '_blank')}
          >
            <MessageSquare className="mr-2 h-4 w-4 text-[#F97316]" />
            Community Forum
          </Button>
          <Button 
            variant="outline" 
            className="bg-black/40 border-[#0EA5E9]/20 hover:border-[#0EA5E9] text-white hover:bg-[#0EA5E9]/10"
          >
            <Newspaper className="mr-2 h-4 w-4 text-[#0EA5E9]" />
            MineChain Blog
          </Button>
          <Button 
            variant="outline" 
            className="bg-black/40 border-[#F97316]/20 hover:border-[#F97316] text-white hover:bg-[#F97316]/10"
          >
            <Link className="mr-2 h-4 w-4 text-[#F97316]" />
            Resource Library
          </Button>
        </div>
        
        {/* Community Stats */}
        <CommunityStats stats={communityStats} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Trending Topics */}
          <TrendingTopics initialTopics={initialTopics} />
          
          {/* Upcoming Events - Now connected to CoinMarketCal API */}
          <UpcomingEvents />
        </div>

        {/* Blog Section and Forum Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <CommunityBlogSection />
          <CommunityForumHighlights />
        </div>
        
        {/* Join Community CTA */}
        <CommunityCallToAction />
      </div>
    </section>
  );
};
