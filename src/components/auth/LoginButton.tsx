
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, User } from "lucide-react";
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

export const LoginButton = () => {
  const [open, setOpen] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);

    // Simulate login process
    setTimeout(() => {
      if (username && password) {
        // In a real app, this would validate credentials against a backend
        // For demo purposes, set the user as logged in
        localStorage.setItem("minechain_profile_exists", "true");
        
        toast({
          title: "Login Successful",
          description: "Welcome back to MineChain!",
        });
        
        setOpen(false);
        navigate("/profile");
      } else {
        toast({
          title: "Login Failed",
          description: "Please enter both username and password.",
          variant: "destructive",
        });
      }
      setIsLoggingIn(false);
    }, 1000);
  };

  const handleDemoLogin = () => {
    setIsLoggingIn(true);
    
    // Set demo credentials
    setUsername("demo_user");
    setPassword("password");
    
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
      setIsLoggingIn(false);
    }, 1000);
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
          <DialogTitle className="text-xl font-bold text-center">Sign In to MineChain</DialogTitle>
          <DialogDescription className="text-center text-mine-silver">
            Access your mining dashboard, stats, and profile
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleLogin} className="space-y-4 pt-4">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium text-white">
              Username
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-[#0A0F1D] border-[#1E293B] text-white"
              placeholder="Enter your username"
              autoComplete="username"
              disabled={isLoggingIn}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-white">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#0A0F1D] border-[#1E293B] text-white"
              placeholder="Enter your password"
              autoComplete="current-password"
              disabled={isLoggingIn}
            />
          </div>
          
          <div className="flex justify-end">
            <a href="#" className="text-[#F97316] text-sm hover:underline">
              Forgot password?
            </a>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Signing in..." : "Sign In"}
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
            disabled={isLoggingIn}
          >
            Try Demo Account
          </Button>
          
          <div className="text-center text-sm text-mine-silver">
            Not a member?{" "}
            <a href="#" className="text-[#F97316] hover:underline">
              Create an account
            </a>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
