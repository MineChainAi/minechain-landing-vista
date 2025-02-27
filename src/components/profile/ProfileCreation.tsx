
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserRoundPlus, MapPin, Globe, Github, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProfileCreationProps {
  onProfileCreate: (profileData: any) => void;
}

export const ProfileCreation = ({ onProfileCreate }: ProfileCreationProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    bio: "",
    location: "",
    website: "",
    twitter: "",
    github: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.username || !formData.name) {
      toast({
        title: "Required Fields Missing",
        description: "Username and name are required to create a profile.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    // In a real app, this would send the data to an API
    setTimeout(() => {
      // Create new profile data
      const newProfileData = {
        id: `user_${Date.now()}`,
        username: formData.username,
        name: formData.name,
        bio: formData.bio || "No bio yet.",
        avatar: "/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png", // Default avatar
        coverImage: "",
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        location: formData.location || undefined,
        website: formData.website || undefined,
        social: {
          twitter: formData.twitter || undefined,
          github: formData.github || undefined,
        },
        stats: {
          contributions: 0,
          stakeAmount: "0 MINE",
          miningRewards: "0 MINE",
          validatorStatus: "Inactive"
        }
      };
      
      onProfileCreate(newProfileData);
      
      toast({
        title: "Profile Created",
        description: "Your profile has been successfully created!",
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-300px)] flex items-center justify-center px-4">
      <div className="bg-[#0F172A] border border-[#1E293B] rounded-lg p-6 w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-[#0A0F1D] h-16 w-16 rounded-full mb-4">
            <UserRoundPlus className="h-8 w-8 text-[#F97316]" />
          </div>
          <h1 className="text-2xl font-bold text-white">Create Your Profile</h1>
          <p className="text-mine-silver mt-2">
            Set up your MineChain profile to showcase your contributions and mining activities
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="username" className="text-white">Username <span className="text-red-500">*</span></label>
              <Input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="your_username"
                className="bg-[#0A0F1D] border-[#1E293B] text-white"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="name" className="text-white">Display Name <span className="text-red-500">*</span></label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-[#0A0F1D] border-[#1E293B] text-white"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="bio" className="text-white">Bio</label>
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell the community about yourself"
              className="bg-[#0A0F1D] border-[#1E293B] text-white resize-none h-24"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="location" className="text-white flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-[#F97316]" /> Location
              </label>
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
              <label htmlFor="website" className="text-white flex items-center">
                <Globe className="h-4 w-4 mr-1 text-[#F97316]" /> Website
              </label>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="twitter" className="text-white flex items-center">
                <Twitter className="h-4 w-4 mr-1 text-[#0EA5E9]" /> Twitter
              </label>
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
              <label htmlFor="github" className="text-white flex items-center">
                <Github className="h-4 w-4 mr-1 text-white" /> GitHub
              </label>
              <Input
                id="github"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="username"
                className="bg-[#0A0F1D] border-[#1E293B] text-white"
              />
            </div>
          </div>
          
          <div className="flex justify-end pt-4">
            <Button 
              type="submit" 
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white min-w-32"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Profile"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
