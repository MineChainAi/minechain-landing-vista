
import { Mail, Lock, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthFormData } from "@/hooks/use-auth-dialog";

interface LoginFormProps {
  formData: AuthFormData;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: React.FormEvent) => void;
  handleDemoLogin: () => void;
}

export const LoginFormComponent = ({
  formData,
  isSubmitting,
  handleChange,
  handleLogin,
  handleDemoLogin
}: LoginFormProps) => {
  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="username" className="text-sm font-medium text-white flex items-center">
          <Mail className="h-4 w-4 mr-2 text-[#F97316]" />
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
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-sm font-medium text-white flex items-center">
            <Lock className="h-4 w-4 mr-2 text-[#F97316]" />
            Password
          </label>
          <a href="#" className="text-[#F97316] text-sm hover:underline">
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
  );
};
