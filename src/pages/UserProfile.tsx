
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileTabs } from "@/components/profile/ProfileTabs";
import { ProfileStats } from "@/components/profile/ProfileStats";
import { ProfileSettings } from "@/components/profile/ProfileSettings";
import { ContributionHistory } from "@/components/profile/ContributionHistory";
import { MiningOverview } from "@/components/profile/MiningOverview";

// Mock user data (in a real app, this would come from an API or auth context)
const mockUserData = {
  id: "user123",
  username: "blockchain_miner",
  name: "Alex Johnson",
  bio: "Blockchain enthusiast and GPU mining expert with 5 years of experience. Contributing to MineChain ecosystem since 2022.",
  avatar: "/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png",
  coverImage: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070&auto=format&fit=crop",
  joinedDate: "March 2022",
  location: "San Francisco, CA",
  website: "https://alexjohnson.dev",
  social: {
    twitter: "@alex_blockchain",
    discord: "alexj#1234",
    github: "alexjohnson-dev"
  },
  stats: {
    contributions: 47,
    stakeAmount: "12,500 MINE",
    miningRewards: "1,250 MINE",
    validatorStatus: "Active"
  }
};

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="min-h-screen bg-mine-dark">
      <Navbar />
      <div className="pt-16">
        <ProfileHeader userData={mockUserData} setActiveTab={setActiveTab} />
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar - Profile Stats */}
            <div className="lg:col-span-3">
              <ProfileStats userData={mockUserData} />
            </div>
            
            {/* Main Content Area */}
            <div className="lg:col-span-9">
              <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              
              {activeTab === "overview" && <MiningOverview />}
              {activeTab === "contributions" && <ContributionHistory />}
              {activeTab === "settings" && <ProfileSettings userData={mockUserData} />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
