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
import { getStorageItem, setStorageItem, removeStorageItem, STORAGE_KEYS } from "@/utils/storage/vercelKVStorage";

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
    ravencoin: "",
    usdc: "",
    donation: ""
  }
};

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [hasProfile, setHasProfile] = useState(false);
  const [userData, setUserData] = useState(defaultUserData);
  const [isLoading, setIsLoading] = useState(true);
  
  // Load data from storage on initial render
  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        // Check if user has a profile
        const profileExists = await getStorageItem<boolean>(STORAGE_KEYS.PROFILE_EXISTS, false);
        setHasProfile(profileExists || false);
        
        if (profileExists) {
          // Load profile data
          const savedProfile = await getStorageItem(STORAGE_KEYS.USER_PROFILE, defaultUserData);
          setUserData(savedProfile || defaultUserData);
        }
      } catch (error) {
        console.error("Error loading user profile:", error);
        // Fallback to default values
        setHasProfile(false);
        setUserData(defaultUserData);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadUserProfile();
  }, []);
  
  // Save to storage whenever userData changes
  useEffect(() => {
    const saveUserProfile = async () => {
      if (!isLoading) {
        await setStorageItem(STORAGE_KEYS.USER_PROFILE, userData);
        console.log("Profile data saved to storage");
      }
    };
    
    saveUserProfile();
  }, [userData, isLoading]);
  
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
  
  const handleProfileCreate = async (profileData: typeof userData) => {
    // Save the new profile
    setUserData(profileData);
    // Set that user now has a profile
    setHasProfile(true);
    await setStorageItem(STORAGE_KEYS.PROFILE_EXISTS, true);
  };
  
  // For demo purposes: Add a button to reset profile state
  const resetProfileState = async () => {
    if (process.env.NODE_ENV === 'development') {
      await removeStorageItem(STORAGE_KEYS.PROFILE_EXISTS);
      setHasProfile(false);
      console.log("Profile state reset for testing purposes");
    }
  };
  
  // Show loading state while fetching data
  if (isLoading) {
    return (
      <div className="min-h-screen bg-mine-dark">
        <Navbar />
        <div className="pt-16 flex items-center justify-center h-[80vh]">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-t-[#F97316] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-mine-silver">Loading profile...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-mine-dark">
      <Navbar />
      
      {hasProfile ? (
        <div className="pt-16">
          <ProfileHeader userData={userData} setActiveTab={setActiveTab} />
          
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <ProfileStats userData={userData} />
              </div>
              
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
        <div className="pt-16">
          <ProfileCreation onProfileCreate={handleProfileCreate} />
        </div>
      )}
      
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
