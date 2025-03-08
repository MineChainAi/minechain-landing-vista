
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoginFormComponent } from "@/components/auth/LoginForm";
import { useToast } from "@/hooks/use-toast";
import { setStorageItem, STORAGE_KEYS } from "@/utils/storage/vercelKVStorage";
import { sendNotificationEmail } from "@/utils/notificationService";

const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.username || !formData.password) {
      toast({
        title: "Login Failed",
        description: "Please enter both username and password.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate login process
      // In a real app, this would validate credentials against a backend
      // For demo purposes, set the user as logged in
      await setStorageItem(STORAGE_KEYS.PROFILE_EXISTS, true);
      
      toast({
        title: "Login Successful",
        description: "Welcome back to MineChain!",
      });
      
      navigate("/profile");
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login Failed",
        description: "There was an error during login. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleDemoLogin = async () => {
    setIsSubmitting(true);
    
    try {
      // Set demo credentials
      setFormData({
        ...formData,
        username: "demo_user",
        password: "password"
      });
      
      // Set user as logged in
      await setStorageItem(STORAGE_KEYS.PROFILE_EXISTS, true);
      
      // Create a demo profile if it doesn't exist
      const demoProfile = {
        id: "demo123",
        username: "demo_user",
        name: "Demo User",
        email: "demo@example.com",
        bio: "This is a demo user account for testing the MineChain platform.",
        avatar: "/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png",
        coverImage: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070&auto=format&fit=crop",
        joinedDate: "June 2023",
        location: "Demo City, USA",
        website: "https://demo.example.com",
        social: {
          twitter: "@demo_user",
          discord: "demo#1234",
          github: "demo-user"
        },
        stats: {
          contributions: 15,
          stakeAmount: "5,000 MINE",
          miningRewards: "500 MINE",
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
      
      await setStorageItem(STORAGE_KEYS.USER_PROFILE, demoProfile);
      
      // Send notification email (optional for demo)
      try {
        sendNotificationEmail({
          username: "Demo User",
          email: "demo@example.com"
        });
      } catch (emailError) {
        console.error("Error sending notification:", emailError);
        // Continue login process even if email fails
      }
      
      toast({
        title: "Demo Login",
        description: "Logged in with demo account. You can now access your profile.",
      });
      
      navigate("/profile");
    } catch (error) {
      console.error("Demo login error:", error);
      toast({
        title: "Demo Login Failed",
        description: "There was an error during demo login. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-mine-dark flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-24">
        <LoginFormComponent 
          formData={formData}
          isSubmitting={isSubmitting}
          handleChange={handleChange}
          handleLogin={handleLogin}
          handleDemoLogin={handleDemoLogin}
        />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
