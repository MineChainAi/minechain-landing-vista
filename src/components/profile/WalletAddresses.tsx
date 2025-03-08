
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import { TangemWalletConnector } from "./wallets/TangemWalletConnector";
import { WalletAddressForm } from "./wallets/WalletAddressForm";
import { WalletRecommendations } from "./wallets/WalletRecommendations";
import { WalletsData } from "./types/wallet.types";

interface WalletAddressesProps {
  wallets: WalletsData;
  onWalletsUpdate: (wallets: WalletsData) => void;
}

export const WalletAddresses = ({ wallets, onWalletsUpdate }: WalletAddressesProps) => {
  const [walletData, setWalletData] = useState<WalletsData>(wallets);

  const handleWalletsImport = (importedWallets: Partial<WalletsData>) => {
    const updatedWallets = {
      ...walletData,
      ...importedWallets
    };
    
    setWalletData(updatedWallets);
  };

  const handleSaveWallets = (updatedWallets: WalletsData) => {
    // Pass the updated wallets up to the parent component
    onWalletsUpdate(updatedWallets);
    // Also update the local state
    setWalletData(updatedWallets);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-[#0F172A] border-[#1E293B]">
        <CardHeader className="pb-3">
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <Wallet className="h-5 w-5 text-[#F97316]" />
            Wallet Addresses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Tangem Wallet Linking Section */}
            <TangemWalletConnector onWalletsImport={handleWalletsImport} />

            {/* Wallet Address Form */}
            <WalletAddressForm wallets={walletData} onSave={handleSaveWallets} />
            
            {/* Wallet Recommendations */}
            <WalletRecommendations />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
