
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileTabs } from "@/components/profile/ProfileTabs";
import { ProfileStats } from "@/components/profile/ProfileStats";
import { ProfileSettings } from "@/components/profile/ProfileSettings";
import { ProfileCreation } from "@/components/profile/ProfileCreation";
import { ContributionHistory } from "@/components/profile/ContributionHistory";
import { MiningOverview } from "@/components/profile/MiningOverview";
import { TokenHoldings } from "@/components/profile/TokenHoldings";
import { WalletAddresses } from "@/components/profile/WalletAddresses";

// Default mock user data
const defaultUserData = {
  id: "user123",
  username: "blockchain_miner",
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
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
  },
  wallets: {
    mine: "",
    ethereum: "",
    bitcoin: "",
    donation: ""
  }
};

// LocalStorage key
const USER_PROFILE_KEY = "minechain_user_profile";
// LocalStorage key for profile existence
const PROFILE_EXISTS_KEY = "minechain_profile_exists";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [hasProfile, setHasProfile] = useState(() => {
    // Check if user has a profile
    return localStorage.getItem(PROFILE_EXISTS_KEY) === "true";
  });
  
  const [userData, setUserData] = useState(() => {
    // Load data from localStorage on initial render
    const savedProfile = localStorage.getItem(USER_PROFILE_KEY);
    return savedProfile ? JSON.parse(savedProfile) : defaultUserData;
  });
  
  // Save to localStorage whenever userData changes
  useEffect(() => {
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(userData));
    console.log("Profile data saved to localStorage");
  }, [userData]);
  
  const handleProfileUpdate = (updatedData: Partial<typeof userData>) => {
    setUserData(prevData => {
      const newData = {
        ...prevData,
        ...updatedData,
        social: {
          ...prevData.social,
          ...(updatedData.social || {})
        },
        wallets: {
          ...prevData.wallets,
          ...(updatedData.wallets || {})
        }
      };
      
      return newData;
    });
  };
  
  const handleProfileCreate = (profileData: typeof userData) => {
    // Save the new profile
    setUserData(profileData);
    // Set that user now has a profile
    setHasProfile(true);
    localStorage.setItem(PROFILE_EXISTS_KEY, "true");
  };
  
  // For demo purposes: Add a button to reset profile state
  const resetProfileState = () => {
    if (process.env.NODE_ENV === 'development') {
      localStorage.removeItem(PROFILE_EXISTS_KEY);
      setHasProfile(false);
      console.log("Profile state reset for testing purposes");
    }
  };
  
  return (
    <div className="min-h-screen bg-mine-dark">
      <Navbar />
      
      {hasProfile ? (
        // Show profile if user has one
        <div className="pt-16">
          <ProfileHeader userData={userData} setActiveTab={setActiveTab} />
          
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Sidebar - Profile Stats */}
              <div className="lg:col-span-3">
                <ProfileStats userData={userData} />
              </div>
              
              {/* Main Content Area */}
              <div className="lg:col-span-9">
                <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                
                {activeTab === "overview" && <MiningOverview />}
                {activeTab === "contributions" && <ContributionHistory />}
                {activeTab === "tokens" && <TokenHoldings />}
                {activeTab === "wallets" && (
                  <WalletAddresses 
                    wallets={userData.wallets} 
                    onWalletsUpdate={(wallets) => 
                      handleProfileUpdate({ wallets })
                    }
                  />
                )}
                {activeTab === "settings" && (
                  <ProfileSettings 
                    userData={userData} 
                    onProfileUpdate={handleProfileUpdate}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Show profile creation form if user doesn't have a profile
        <div className="pt-16">
          <ProfileCreation onProfileCreate={handleProfileCreate} />
        </div>
      )}
      
      {/* Development helper - only visible in development mode */}
      {process.env.NODE_ENV === 'development' && hasProfile && (
        <div className="fixed bottom-4 right-4 z-50">
          <button 
            onClick={resetProfileState}
            className="bg-red-600 text-white text-xs px-2 py-1 rounded opacity-50 hover:opacity-100"
          >
            Reset Profile (Dev Only)
          </button>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default UserProfile;
