
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
}

export const ProfileSettings = ({ userData }: ProfileSettingsProps) => {
  const { toast } = useToast();
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to an API
    console.log("Updated profile data:", formData);
    
    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated.",
    });
  };

  return (
    <div className="bg-[#0F172A] border border-[#1E293B] rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Profile Settings</h2>
      
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
          <Button variant="outline" type="button" className="border-[#1E293B] text-mine-silver hover:text-white">
            Cancel
          </Button>
          <Button type="submit" className="bg-[#F97316] hover:bg-[#F97316]/90 text-white">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};
