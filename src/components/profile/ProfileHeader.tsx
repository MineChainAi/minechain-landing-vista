
import { Button } from "@/components/ui/button";
import { Edit, MapPin, Globe, Github, Twitter, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

interface UserData {
  id: string;
  username: string;
  name: string;
  bio: string;
  avatar: string;
  coverImage: string;
  joinedDate: string;
  location?: string;
  website?: string;
  social?: {
    twitter?: string;
    discord?: string;
    github?: string;
  };
  stats: {
    contributions: number;
    stakeAmount: string;
    miningRewards: string;
    validatorStatus: string;
  };
}

interface ProfileHeaderProps {
  userData: UserData;
  setActiveTab: (tab: string) => void;
}

export const ProfileHeader = ({ userData, setActiveTab }: ProfileHeaderProps) => {
  const handleEditProfile = () => {
    setActiveTab("settings");
  };

  return (
    <div className="relative">
      {/* Cover Image */}
      <div className="h-48 md:h-64 w-full bg-[#0A0F1D] relative overflow-hidden">
        {userData.coverImage ? (
          <img 
            src={userData.coverImage} 
            alt="Profile Cover" 
            className="w-full h-full object-cover opacity-70"
          />
        ) : (
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yMCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
        )}
        
        {/* Cover Image Edit Button */}
        <Button 
          size="sm" 
          variant="ghost" 
          className="absolute top-4 right-4 bg-black/30 text-white hover:bg-black/50"
          onClick={handleEditProfile}
        >
          <Edit className="h-4 w-4 mr-1" />
          Edit Cover
        </Button>
      </div>
      
      {/* Profile Info */}
      <div className="container mx-auto px-4">
        <div className="relative -mt-16 sm:-mt-20 mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          {/* Avatar and Name */}
          <div className="flex items-end">
            <div className="relative">
              <img 
                src={userData.avatar} 
                alt={userData.name} 
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg border-4 border-mine-dark object-cover"
              />
              <Button 
                size="sm" 
                variant="ghost" 
                className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0 bg-[#F97316] text-white hover:bg-[#F97316]/90"
                onClick={handleEditProfile}
              >
                <Edit className="h-3.5 w-3.5" />
              </Button>
            </div>
            
            <div className="ml-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">{userData.name}</h1>
              <p className="text-mine-silver text-sm">@{userData.username}</p>
              <p className="text-mine-silver text-xs">Joined {userData.joinedDate}</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2 mt-4 sm:mt-0">
            <Button variant="outline" size="sm" className="border-[#1E293B] text-mine-silver hover:text-white">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
            <Button 
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
              onClick={handleEditProfile}
            >
              <Edit className="h-4 w-4 mr-1" />
              Edit Profile
            </Button>
          </div>
        </div>
        
        {/* Bio and Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-2">
            <p className="text-mine-silver">{userData.bio}</p>
          </div>
          
          <div className="space-y-2">
            {userData.location && (
              <div className="flex items-center text-mine-silver">
                <MapPin className="h-4 w-4 mr-2 text-[#F97316]" />
                <span>{userData.location}</span>
              </div>
            )}
            
            {userData.website && (
              <div className="flex items-center text-mine-silver">
                <Globe className="h-4 w-4 mr-2 text-[#F97316]" />
                <a 
                  href={userData.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#F97316] transition-colors"
                >
                  {userData.website.replace(/^https?:\/\//, '')}
                </a>
              </div>
            )}
            
            {userData.social && (
              <div className="flex gap-2">
                {userData.social.twitter && (
                  <a 
                    href={`https://twitter.com/${userData.social.twitter.replace('@', '')}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#0F172A] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                
                {userData.social.github && (
                  <a 
                    href={`https://github.com/${userData.social.github}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#0F172A] text-white hover:bg-white/10 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
