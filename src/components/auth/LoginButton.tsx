
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoginFormComponent } from "./LoginForm";
import { SignUpFormComponent } from "./SignUpForm";
import { useAuthDialog } from "@/hooks/use-auth-dialog";

export const LoginButton = () => {
  const {
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
  } = useAuthDialog();

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

        {isSignUp ? (
          <SignUpFormComponent 
            formData={formData}
            isSubmitting={isSubmitting}
            handleChange={handleChange}
            handleSignUp={handleSignUp}
          />
        ) : (
          <LoginFormComponent 
            formData={formData}
            isSubmitting={isSubmitting}
            handleChange={handleChange}
            handleLogin={handleLogin}
            handleDemoLogin={handleDemoLogin}
          />
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
      </DialogContent>
    </Dialog>
  );
};
