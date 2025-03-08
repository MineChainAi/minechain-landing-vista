
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { sendNotificationEmail } from "@/utils/notificationService";

export interface AuthFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function useAuthDialog() {
  const [open, setOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<AuthFormData>({
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

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.username || !formData.email || !formData.password) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords Don't Match",
        description: "Please make sure your passwords match.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      // Create new user profile
      const newUserProfile = {
        id: `user_${Date.now()}`,
        username: formData.username,
        name: formData.username, // Default display name is username
        email: formData.email,
        bio: "New MineChain member. Mining enthusiast.",
        avatar: "/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png", // Default avatar
        coverImage: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070&auto=format&fit=crop",
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        location: "",
        website: "",
        social: {
          twitter: "",
          discord: "",
          github: ""
        },
        stats: {
          contributions: 0,
          stakeAmount: "0 MINE",
          miningRewards: "0 MINE",
          validatorStatus: "Inactive"
        }
      };

      // Save user profile to localStorage
      localStorage.setItem("minechain_user_profile", JSON.stringify(newUserProfile));
      localStorage.setItem("minechain_profile_exists", "true");

      // Send notification email to admin
      sendNotificationEmail({
        username: formData.username,
        email: formData.email
      });

      toast({
        title: "Account Created",
        description: "Welcome to MineChain! Your account has been created successfully.",
      });

      setOpen(false);
      navigate("/profile");
      setIsSubmitting(false);
    }, 1500);
  };

  const handleLogin = (e: React.FormEvent) => {
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

    // Simulate login process
    setTimeout(() => {
      // In a real app, this would validate credentials against a backend
      // For demo purposes, set the user as logged in
      localStorage.setItem("minechain_profile_exists", "true");
      
      toast({
        title: "Login Successful",
        description: "Welcome back to MineChain!",
      });
      
      setOpen(false);
      navigate("/profile");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleDemoLogin = () => {
    setIsSubmitting(true);
    
    // Set demo credentials
    setFormData({
      ...formData,
      username: "demo_user",
      password: "password"
    });
    
    // Simulate login process
    setTimeout(() => {
      // For demo purposes, set the user as logged in
      localStorage.setItem("minechain_profile_exists", "true");
      
      toast({
        title: "Demo Login",
        description: "Logged in with demo account. You can now access your profile.",
      });
      
      setOpen(false);
      navigate("/profile");
      setIsSubmitting(false);
    }, 1000);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    // Reset form data when switching modes
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return {
    open,
    setOpen,
    isSignUp,
    isSubmitting,
    formData,
    handleChange,
    handleSignUp,
    handleLogin,
    handleDemoLogin,
    toggleMode
  };
}
