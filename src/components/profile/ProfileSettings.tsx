
import { useState, useRef, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Camera, RefreshCw } from "lucide-react";

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

interface ProfileSettingsProps {
  userData: UserData;
  onProfileUpdate?: (updatedData: Partial<UserData>) => void;
}

// Default user data for reset functionality
const defaultUserData = {
  id: "user123",
  username: "blockchain_miner",
  name: "Alex Johnson",
  bio: "Blockchain enthusiast and GPU mining expert with 5 years of experience. Contributing to MineChain ecosystem since 2022.",
  avatar: "/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png",
  location: "San Francisco, CA",
  website: "https://alexjohnson.dev",
  social: {
    twitter: "@alex_blockchain",
    discord: "alexj#1234",
    github: "alexjohnson-dev"
  }
};

export const ProfileSettings = ({ userData, onProfileUpdate }: ProfileSettingsProps) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: userData.name,
    username: userData.username,
    bio: userData.bio,
    location: userData.location || "",
    website: userData.website || "",
    twitter: userData.social?.twitter || "",
    discord: userData.social?.discord || "",
    github: userData.social?.github || ""
  });

  const [avatarPreview, setAvatarPreview] = useState<string>(userData.avatar);
  const [isSaving, setIsSaving] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you would upload this file to a server
      // For now, we'll just create a local preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      // Show a success toast
      toast({
        title: "Profile Picture Updated",
        description: "Your new profile picture has been uploaded.",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate an API call with a timeout
    setTimeout(() => {
      // In a real app, this would send the data to an API
      console.log("Updated profile data:", formData);
      
      // Prepare the updated user data
      const updatedUserData: Partial<UserData> = {
        name: formData.name,
        username: formData.username,
        bio: formData.bio,
        avatar: avatarPreview,
        location: formData.location,
        website: formData.website,
        social: {
          twitter: formData.twitter,
          discord: formData.discord,
          github: formData.github
        }
      };
      
      // Update userData using the callback
      if (onProfileUpdate) {
        onProfileUpdate(updatedUserData);
      }
      
      setIsSaving(false);
      
      toast({
        title: "Profile Updated",
        description: "Your profile information has been successfully updated and saved to local storage.",
      });
    }, 800);
  };

  const handleCancel = () => {
    // Reset form to original values
    setFormData({
      name: userData.name,
      username: userData.username,
      bio: userData.bio,
      location: userData.location || "",
      website: userData.website || "",
      twitter: userData.social?.twitter || "",
      discord: userData.social?.discord || "",
      github: userData.social?.github || ""
    });
    
    setAvatarPreview(userData.avatar);
    
    toast({
      title: "Changes Discarded",
      description: "Your changes have been discarded.",
    });
  };

  const handleResetProfile = () => {
    setIsResetting(true);
    
    // Simulate an API call with a timeout
    setTimeout(() => {
      if (onProfileUpdate) {
        onProfileUpdate(defaultUserData);
      }
      
      // Update local form state
      setFormData({
        name: defaultUserData.name,
        username: defaultUserData.username,
        bio: defaultUserData.bio,
        location: defaultUserData.location || "",
        website: defaultUserData.website || "",
        twitter: defaultUserData.social?.twitter || "",
        discord: defaultUserData.social?.discord || "",
        github: defaultUserData.social?.github || ""
      });
      
      setAvatarPreview(defaultUserData.avatar);
      setIsResetting(false);
      
      toast({
        title: "Profile Reset",
        description: "Your profile has been reset to default values.",
      });
    }, 800);
  };

  return (
    <div className="bg-[#0F172A] border border-[#1E293B] rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Profile Settings</h2>
        <Button 
          variant="outline" 
          size="sm"
          className="border-red-800 text-red-500 hover:bg-red-950 hover:text-red-400"
          onClick={handleResetProfile}
          disabled={isResetting}
        >
          {isResetting ? "Resetting..." : (
            <>
              <RefreshCw className="h-4 w-4 mr-1" />
              Reset Profile
            </>
          )}
        </Button>
      </div>
      
      {/* Profile Picture Upload */}
      <div className="mb-8 flex flex-col items-center">
        <div className="relative mb-4">
          <div 
            className="w-32 h-32 rounded-lg overflow-hidden border-4 border-[#1E293B] cursor-pointer"
            onClick={handleAvatarClick}
          >
            <img 
              src={avatarPreview} 
              alt="Profile Avatar" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <Camera className="h-8 w-8 text-white" />
            </div>
          </div>
          <input 
            type="file" 
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <p className="text-sm text-mine-silver">Click to upload a new profile picture</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-white">Display Name</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#0A0F1D] border-[#1E293B] text-white"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="username" className="text-white">Username</label>
            <Input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="bg-[#0A0F1D] border-[#1E293B] text-white"
            />
            <p className="text-xs text-mine-silver">This will be shown as @{formData.username}</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="bio" className="text-white">Bio</label>
          <Textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            className="bg-[#0A0F1D] border-[#1E293B] text-white resize-none"
          />
          <p className="text-xs text-mine-silver">Tell the community about yourself, your experience and interests</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="location" className="text-white">Location</label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, Country"
              className="bg-[#0A0F1D] border-[#1E293B] text-white"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="website" className="text-white">Website</label>
            <Input
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://example.com"
              className="bg-[#0A0F1D] border-[#1E293B] text-white"
            />
          </div>
        </div>
        
        <div className="border-t border-[#1E293B] pt-6">
          <h3 className="text-lg font-medium text-white mb-4">Social Profiles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="twitter" className="text-white">Twitter</label>
              <Input
                id="twitter"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                placeholder="@username"
                className="bg-[#0A0F1D] border-[#1E293B] text-white"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="github" className="text-white">GitHub</label>
              <Input
                id="github"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="username"
                className="bg-[#0A0F1D] border-[#1E293B] text-white"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="discord" className="text-white">Discord</label>
              <Input
                id="discord"
                name="discord"
                value={formData.discord}
                onChange={handleChange}
                placeholder="username#1234"
                className="bg-[#0A0F1D] border-[#1E293B] text-white"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-3 pt-4">
          <Button 
            variant="outline" 
            type="button" 
            className="border-[#1E293B] text-mine-silver hover:text-white"
            onClick={handleCancel}
            disabled={isSaving}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  );
};
