
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
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.552 114.932C89.3058 114.932 115 89.1867 115 57.466C115 25.7453 89.3058 0 57.552 0C25.7983 0 0.104004 25.7453 0.104004 57.466C0.104004 89.1867 25.7983 114.932 57.552 114.932Z" fill="#00BF7F"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M44.2197 58.9309V56.0009C44.2197 53.5409 46.2197 51.5409 48.6797 51.5409H66.4197C68.8797 51.5409 70.8797 53.5409 70.8797 56.0009V58.9309H44.2197Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M70.8797 58.9307V83.6507C70.8797 86.1107 68.8797 88.1107 66.4197 88.1107H48.6797C46.2197 88.1107 44.2197 86.1107 44.2197 83.6507V58.9307H70.8797ZM57.5497 75.3507C61.1897 75.3507 64.1097 72.4607 64.1097 68.8507C64.1097 65.2407 61.1897 62.3507 57.5497 62.3507C53.9097 62.3507 50.9897 65.2407 50.9897 68.8507C50.9897 72.4607 53.9097 75.3507 57.5497 75.3507Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M57.5499 31.541C48.2299 31.541 40.6899 39.081 40.6899 48.401V51.541H44.2199V48.401C44.2199 41.081 50.2299 35.071 57.5499 35.071C64.8699 35.071 70.8799 41.081 70.8799 48.401V51.541H74.4099V48.401C74.4099 39.081 66.8699 31.541 57.5499 31.541Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-white font-medium text-base">Tangem Hardware Wallet</h3>
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
          aria-label={tangemLinked ? "Tangem wallet connected" : "Link Tangem wallet"}
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
