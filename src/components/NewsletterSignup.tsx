
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, Rocket } from "lucide-react";
import { useToast } from "./ui/use-toast";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Open email client with subscription request
    window.location.href = `mailto:dev@minechain.ai?subject=Newsletter Subscription Request&body=Please add ${email} to the MineChain newsletter.`;
    
    // Show toast notification
    toast({
      title: "Thank you for subscribing!",
      description: "Your subscription request has been sent to our team.",
    });
    
    // Show the prominent thank you message
    setShowThankYouMessage(true);
    
    // Reset email field
    setEmail("");
    
    // Hide the thank you message after 5 seconds
    setTimeout(() => {
      setShowThankYouMessage(false);
    }, 5000);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-mine-dark to-black relative">
      {showThankYouMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-gradient-to-r from-[#F97316]/20 via-black/80 to-[#0EA5E9]/20 border border-white/10 p-8 rounded-xl shadow-2xl max-w-md w-full text-center animate-in slide-in-from-bottom">
            <div className="flex justify-center mb-4">
              <Rocket className="h-20 w-20 text-[#F97316] animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
              To The Moon! 🚀
            </h3>
            <p className="text-white mb-6">
              Thank you for subscribing to the MineChain newsletter. We're excited to keep you updated on our journey to revolutionize the blockchain space!
            </p>
            <Button 
              className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] hover:opacity-90"
              onClick={() => setShowThankYouMessage(false)}
            >
              Continue Exploring
            </Button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
            Stay Updated
          </h2>
          <p className="text-mine-silver mb-8">
            Subscribe to our newsletter for the latest updates on MineChain's development, mining rewards, and AI innovations.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-black/50 border-white/10 text-white placeholder:text-mine-silver"
            />
            <Button type="submit" className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] hover:opacity-90">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
