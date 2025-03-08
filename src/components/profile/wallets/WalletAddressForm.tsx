
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { WalletAddressField } from "./WalletAddressField";
import { WalletsData, CopiedStates } from "../types/wallet.types";

interface WalletAddressFormProps {
  wallets: WalletsData;
  onSave: (wallets: WalletsData) => void;
}

export const WalletAddressForm = ({ wallets, onSave }: WalletAddressFormProps) => {
  const { toast } = useToast();
  const [walletData, setWalletData] = useState<WalletsData>(wallets);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWalletData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      onSave(walletData);
      setIsSaving(false);
      
      toast({
        title: "Wallet Addresses Updated",
        description: "Your wallet addresses have been saved successfully.",
      });
    }, 800);
  };

  return (
    <div className="p-4 rounded-lg border border-[#1E293B] bg-[#0A0F1D]">
      <h3 className="text-white font-medium mb-4">Your Receiving Addresses</h3>
      <p className="text-mine-silver text-sm mb-4">
        Add your blockchain wallet addresses below to receive payments, mining rewards, and tokens.
      </p>
      
      <div className="space-y-4">
        <WalletAddressField
          label="MineChain Address"
          name="mine"
          value={walletData.mine}
          onChange={handleChange}
          placeholder="Enter your MineChain wallet address"
          tooltip="Your primary MineChain wallet address"
          isPrimary
        />
        
        <WalletAddressField
          label="Ethereum Address"
          name="ethereum"
          value={walletData.ethereum}
          onChange={handleChange}
          placeholder="Enter your Ethereum wallet address"
          tooltip="Your Ethereum wallet address for ETH and ERC-20 tokens"
        />
        
        <WalletAddressField
          label="Bitcoin Address"
          name="bitcoin"
          value={walletData.bitcoin}
          onChange={handleChange}
          placeholder="Enter your Bitcoin wallet address"
          tooltip="Your Bitcoin wallet address for BTC payments"
        />

        <WalletAddressField
          label="Ravencoin Address"
          name="ravencoin"
          value={walletData.ravencoin}
          onChange={handleChange}
          placeholder="Enter your Ravencoin wallet address"
          tooltip="Your Ravencoin (RVN) wallet address"
        />

        <WalletAddressField
          label="USDC Address"
          name="usdc"
          value={walletData.usdc}
          onChange={handleChange}
          placeholder="Enter your USDC wallet address"
          tooltip="Your USDC stablecoin wallet address"
        />
        
        <div className="pt-4 border-t border-[#1E293B]">
          <WalletAddressField
            label="Donation Address"
            name="donation"
            value={walletData.donation}
            onChange={handleChange}
            placeholder="Enter a wallet address for receiving donations"
            tooltip="This address will be shown publicly for donations"
          />
          <p className="text-xs text-mine-silver mt-2">
            This address will be displayed on your public profile for community donations.
          </p>
        </div>
        
        <div className="flex justify-end mt-6">
          <Button
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Wallet Addresses"}
          </Button>
        </div>
      </div>
    </div>
  );
};
