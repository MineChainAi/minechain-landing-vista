
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, UserPlus, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

export const LoginForm = () => {
  const [activeTab, setActiveTab] = useState("login");
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

    // Simulate API call with Supabase integration
    setTimeout(() => {
      // Create new user profile
      const newUserProfile = {
        id: `user_${Date.now()}`,
        username: formData.username,
        name: formData.username, 
        email: formData.email,
        bio: "New MineChain member. Mining enthusiast.",
        avatar: "/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png", 
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

      // Save user profile to localStorage (in a real app, this would be saved to Supabase)
      localStorage.setItem("minechain_user_profile", JSON.stringify(newUserProfile));
      localStorage.setItem("minechain_profile_exists", "true");

      // Simulate Supabase integration
      console.log("User registered in Supabase:", formData.email);

      toast({
        title: "Account Created",
        description: "Welcome to MineChain! Your account has been created successfully.",
      });

      navigate("/profile");
      setIsSubmitting(false);
    }, 1500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.email || !formData.password) {
      toast({
        title: "Login Failed",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate Supabase authentication
    setTimeout(() => {
      console.log("Authenticating with Supabase:", formData.email);
      
      // In a real app, this would validate credentials against Supabase
      localStorage.setItem("minechain_profile_exists", "true");
      
      toast({
        title: "Login Successful",
        description: "Welcome back to MineChain!",
      });
      
      navigate("/profile");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleDemoLogin = () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      // For demo purposes, set the user as logged in
      localStorage.setItem("minechain_profile_exists", "true");
      
      toast({
        title: "Demo Login",
        description: "Logged in with demo account. You can now access your profile.",
      });
      
      navigate("/profile");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md bg-[#0F172A] border-[#1E293B] text-white">
      <CardHeader className="space-y-1">
        <div className="flex justify-center mb-2">
          <div className="relative">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[#F97316]/20 via-[#0EA5E9]/20 to-[#F97316]/20 blur-lg opacity-60"
              style={{ transform: 'scale(1.2)' }}
            />
            <img
              src="/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png"
              alt="MineChain Logo"
              className="w-12 h-12 relative z-10 object-cover rounded-full"
            />
          </div>
        </div>
        <CardTitle className="text-2xl text-center">MineChain Account</CardTitle>
        <CardDescription className="text-center text-mine-silver">
          Access your mining dashboard, profile, and rewards
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs 
          defaultValue="login" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 bg-[#0A0F1D]">
            <TabsTrigger 
              value="login"
              className="data-[state=active]:bg-[#1E293B] data-[state=active]:text-white"
            >
              Login
            </TabsTrigger>
            <TabsTrigger 
              value="register"
              className="data-[state=active]:bg-[#1E293B] data-[state=active]:text-white"
            >
              Register
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="mt-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-[#F97316]" />
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#0A0F1D] border-[#1E293B] text-white"
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-white flex items-center">
                    <Lock className="h-4 w-4 mr-2 text-[#F97316]" />
                    Password
                  </label>
                  <a href="#" className="text-[#F97316] text-xs hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-[#0A0F1D] border-[#1E293B] text-white"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={isSubmitting}
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : (
                  <span className="flex items-center">
                    <LogIn className="h-4 w-4 mr-2" />
                    Sign In
                  </span>
                )}
              </Button>
              
              <div className="relative flex items-center justify-center">
                <span className="bg-[#0F172A] px-2 text-xs text-mine-silver">
                  OR
                </span>
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-[#1E293B]"></span>
                </div>
              </div>
              
              <Button
                type="button"
                variant="outline"
                className="w-full border-[#1E293B] text-mine-silver hover:text-white hover:bg-[#1E293B]/30"
                onClick={handleDemoLogin}
                disabled={isSubmitting}
              >
                Try Demo Account
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="register" className="mt-4">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium text-white flex items-center">
                  <User className="h-4 w-4 mr-2 text-[#F97316]" />
                  Username
                </label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className="bg-[#0A0F1D] border-[#1E293B] text-white"
                  placeholder="Choose a username"
                  autoComplete="username"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="register-email" className="text-sm font-medium text-white flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-[#F97316]" />
                  Email
                </label>
                <Input
                  id="register-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#0A0F1D] border-[#1E293B] text-white"
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="register-password" className="text-sm font-medium text-white flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-[#F97316]" />
                  Password
                </label>
                <Input
                  id="register-password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-[#0A0F1D] border-[#1E293B] text-white"
                  placeholder="Create a password"
                  autoComplete="new-password"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-white flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-[#F97316]" />
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="bg-[#0A0F1D] border-[#1E293B] text-white"
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  disabled={isSubmitting}
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating Account..." : (
                  <span className="flex items-center">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Create Account
                  </span>
                )}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
