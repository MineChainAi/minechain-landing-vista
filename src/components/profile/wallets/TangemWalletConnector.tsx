
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link, Check } from "lucide-react";
import { WalletsData } from "../types/wallet.types";

interface TangemWalletConnectorProps {
  onWalletsImport: (wallets: Partial<WalletsData>) => void;
}

export const TangemWalletConnector = ({ onWalletsImport }: TangemWalletConnectorProps) => {
  const { toast } = useToast();
  const [isLinking, setIsLinking] = useState(false);
  const [tangemLinked, setTangemLinked] = useState(false);

  const handleLinkTangem = () => {
    setIsLinking(true);
    
    // Simulate connecting to Tangem wallet
    setTimeout(() => {
      // This is simulated - in a real app, you'd use Tangem SDK to get these values
      const tangemAddresses = {
        ethereum: "0x7a95fA73230a9F49b3F548aaB68fa7dA7f0c054c",
        bitcoin: "bc1q0l9zaqu5v6ygdpruq2jvaqk66u0u3f7pvaxqny",
        ravencoin: "RKXB6bHXL6a5TMuUEFaRxrHpSXS71xjYVf",
        usdc: "0x7a95fA73230a9F49b3F548aaB68fa7dA7f0c054c"
      };
      
      onWalletsImport(tangemAddresses);
      setIsLinking(false);
      setTangemLinked(true);
      
      toast({
        title: "Tangem Wallet Linked",
        description: "Your Tangem wallet has been successfully linked to your MineChain profile.",
      });
    }, 2000);
  };

  return (
    <div className="p-4 rounded-lg border border-[#1E293B] bg-[#0A0F1D] mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 mb-3 sm:mb-0">
          <div className="p-2 rounded-md bg-[#0F172A] border border-[#1E293B]">
            <img 
              src="https://tangem.com/media/favicon/favicon.svg" 
              alt="Tangem Wallet" 
              className="w-8 h-8"
            />
          </div>
          <div>
            <h3 className="text-white font-medium">Tangem Hardware Wallet</h3>
            <p className="text-xs text-mine-silver mt-1 max-w-md">
              {tangemLinked 
                ? "Your Tangem wallet is connected. All relevant addresses have been imported." 
                : "Connect your Tangem hardware wallet to auto-fill your blockchain addresses"}
            </p>
          </div>
        </div>
        
        <Button
          onClick={handleLinkTangem}
          className={`${tangemLinked 
            ? "bg-green-600 hover:bg-green-700" 
            : "bg-[#F97316] hover:bg-[#F97316]/90"} text-white transition-colors`}
          disabled={isLinking || tangemLinked}
        >
          {isLinking ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Connecting...
            </span>
          ) : (
            <span className="flex items-center">
              {tangemLinked ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Connected
                </>
              ) : (
                <>
                  <Link className="h-4 w-4 mr-2" />
                  Link Tangem Wallet
                </>
              )}
            </span>
          )}
        </Button>
      </div>
      
      {tangemLinked && (
        <div className="mt-4 pt-3 border-t border-[#1E293B]">
          <p className="text-xs text-green-400 flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5" />
            Tangem wallet addresses have been successfully imported to the fields below
          </p>
        </div>
      )}
    </div>
  );
};
