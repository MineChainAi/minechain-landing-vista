
import { useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const ProfileButton = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    // In a real app, this would call a logout API
    // For demo, just remove the profile_exists flag
    localStorage.removeItem("minechain_profile_exists");
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    
    navigate("/");
  };

  const handleViewProfile = () => {
    navigate("/profile");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="relative text-mine-silver hover:text-white hover:bg-white/10"
        >
          <User className="h-4 w-4 mr-2" />
          <span>My Account</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-[#0F172A] border-[#1E293B] text-white"
      >
        <DropdownMenuItem 
          onClick={handleViewProfile}
          className="cursor-pointer hover:bg-[#1E293B]"
        >
          <User className="mr-2 h-4 w-4" />
          <span>View Profile</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-[#1E293B]" />
        <DropdownMenuItem 
          onClick={handleLogout}
          className="cursor-pointer text-red-500 hover:text-red-400 hover:bg-red-950"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
