
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, User, Mail, Lock, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// EmailJS configuration
// In a real app, these would be environment variables
const EMAILJS_SERVICE_ID = "service_minechain";
const EMAILJS_TEMPLATE_ID = "template_signup_notification";
const EMAILJS_USER_ID = "your_emailjs_public_key";
const ADMIN_EMAIL = "dev@minechain.ai";

export const LoginButton = () => {
  const [open, setOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
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

  const sendNotificationEmail = async (newUser: { username: string, email: string }) => {
    try {
      // Prepare email parameters
      const emailParams = {
        to_email: ADMIN_EMAIL,
        from_name: "MineChain Signup Bot",
        subject: "New MineChain Signup",
        message: `A new user has signed up for MineChain!
          
Username: ${newUser.username}
Email: ${newUser.email}
Time: ${new Date().toLocaleString()}
          
Best regards,
MineChain System`,
      };

      // Log that we're attempting to send an email
      console.log("Attempting to send notification email to:", ADMIN_EMAIL);

      // For demo purposes, we'll simulate a successful email send
      // In a real app, you would uncomment the following code:
      /*
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailParams,
        EMAILJS_USER_ID
      );
      console.log("Email notification sent:", response);
      */
      
      // Simulate successful email
      console.log("Email notification simulated:", emailParams);
      
      // Note: In production, you would typically handle this on your backend, not in client-side code
    } catch (error) {
      console.error("Error sending notification email:", error);
      // We don't show this error to the user as it's an internal notification
    }
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-mine-silver hover:text-white hover:bg-white/10">
          <LogIn className="h-4 w-4 mr-2" />
          <span>Login</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#0F172A] border border-[#1E293B] text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            {isSignUp ? "Create MineChain Account" : "Sign In to MineChain"}
          </DialogTitle>
          <DialogDescription className="text-center text-mine-silver">
            {isSignUp 
              ? "Join the MineChain community and start mining" 
              : "Access your mining dashboard, stats, and profile"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="space-y-4 pt-4">
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
              placeholder="Enter your username"
              autoComplete="username"
              disabled={isSubmitting}
            />
          </div>
          
          {isSignUp && (
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
          )}
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-white flex items-center">
              <Lock className="h-4 w-4 mr-2 text-[#F97316]" />
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-[#0A0F1D] border-[#1E293B] text-white"
              placeholder={isSignUp ? "Create a password" : "Enter your password"}
              autoComplete={isSignUp ? "new-password" : "current-password"}
              disabled={isSubmitting}
            />
          </div>
          
          {isSignUp && (
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
          )}
          
          {!isSignUp && (
            <div className="flex justify-end">
              <a href="#" className="text-[#F97316] text-sm hover:underline">
                Forgot password?
              </a>
            </div>
          )}
          
          <Button
            type="submit"
            className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              isSignUp ? "Creating Account..." : "Signing in..."
            ) : (
              isSignUp ? (
                <span className="flex items-center">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Create Account
                </span>
              ) : (
                <span className="flex items-center">
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </span>
              )
            )}
          </Button>
          
          {!isSignUp && (
            <>
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
            </>
          )}
          
          <div className="text-center text-sm text-mine-silver">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="text-[#F97316] hover:underline"
                >
                  Sign in
                </button>
              </>
            ) : (
              <>
                Not a member?{" "}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="text-[#F97316] hover:underline"
                >
                  Create an account
                </button>
              </>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
