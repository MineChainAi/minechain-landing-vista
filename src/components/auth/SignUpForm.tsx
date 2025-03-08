
import { User, Mail, Lock, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthFormData } from "@/hooks/use-auth-dialog";

interface SignUpFormProps {
  formData: AuthFormData;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignUp: (e: React.FormEvent) => void;
}

export const SignUpFormComponent = ({
  formData,
  isSubmitting,
  handleChange,
  handleSignUp
}: SignUpFormProps) => {
  return (
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
  );
};
