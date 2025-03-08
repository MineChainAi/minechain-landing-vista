
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Wallet, Copy, Check, Info, ExternalLink } from "lucide-react";

interface WalletsData {
  mine: string;
  ethereum: string;
  bitcoin: string;
  donation: string;
}

interface WalletAddressesProps {
  wallets: WalletsData;
  onWalletsUpdate: (wallets: WalletsData) => void;
}

export const WalletAddresses = ({ wallets, onWalletsUpdate }: WalletAddressesProps) => {
  const { toast } = useToast();
  const [walletData, setWalletData] = useState<WalletsData>(wallets);
  const [isSaving, setIsSaving] = useState(false);
  const [copiedStates, setCopiedStates] = useState({
    mine: false,
    ethereum: false,
    bitcoin: false,
    donation: false
  });

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
      onWalletsUpdate(walletData);
      setIsSaving(false);
      
      toast({
        title: "Wallet Addresses Updated",
        description: "Your wallet addresses have been saved successfully.",
      });
    }, 800);
  };

  const handleCopy = (type: keyof WalletsData) => {
    if (!walletData[type]) return;
    
    navigator.clipboard.writeText(walletData[type]);
    
    // Set the copied state for this wallet
    setCopiedStates(prev => ({
      ...prev,
      [type]: true
    }));
    
    // Reset after 2 seconds
    setTimeout(() => {
      setCopiedStates(prev => ({
        ...prev,
        [type]: false
      }));
    }, 2000);
    
    toast({
      title: "Address Copied",
      description: `${type.charAt(0).toUpperCase() + type.slice(1)} wallet address copied to clipboard.`,
    });
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
            <div className="p-4 rounded-lg border border-[#1E293B] bg-[#0A0F1D]">
              <h3 className="text-white font-medium mb-4">Your Receiving Addresses</h3>
              <p className="text-mine-silver text-sm mb-4">
                Add your blockchain wallet addresses below to receive payments, mining rewards, and tokens.
              </p>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-white text-sm flex items-center gap-1">
                    MineChain Address
                    <Info className="h-3.5 w-3.5 text-mine-silver cursor-help" title="Your primary MineChain wallet address" />
                  </label>
                  <div className="flex gap-2">
                    <Input
                      name="mine"
                      value={walletData.mine}
                      onChange={handleChange}
                      placeholder="Enter your MineChain wallet address"
                      className="bg-[#0A0F1D] border-[#1E293B] text-white flex-1"
                    />
                    {walletData.mine && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-[#1E293B] text-mine-silver"
                        onClick={() => handleCopy('mine')}
                      >
                        {copiedStates.mine ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white text-sm flex items-center gap-1">
                    Ethereum Address
                    <Info className="h-3.5 w-3.5 text-mine-silver cursor-help" title="Your Ethereum wallet address for ETH and ERC-20 tokens" />
                  </label>
                  <div className="flex gap-2">
                    <Input
                      name="ethereum"
                      value={walletData.ethereum}
                      onChange={handleChange}
                      placeholder="Enter your Ethereum wallet address"
                      className="bg-[#0A0F1D] border-[#1E293B] text-white flex-1"
                    />
                    {walletData.ethereum && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-[#1E293B] text-mine-silver"
                        onClick={() => handleCopy('ethereum')}
                      >
                        {copiedStates.ethereum ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white text-sm flex items-center gap-1">
                    Bitcoin Address
                    <Info className="h-3.5 w-3.5 text-mine-silver cursor-help" title="Your Bitcoin wallet address for BTC payments" />
                  </label>
                  <div className="flex gap-2">
                    <Input
                      name="bitcoin"
                      value={walletData.bitcoin}
                      onChange={handleChange}
                      placeholder="Enter your Bitcoin wallet address"
                      className="bg-[#0A0F1D] border-[#1E293B] text-white flex-1"
                    />
                    {walletData.bitcoin && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-[#1E293B] text-mine-silver"
                        onClick={() => handleCopy('bitcoin')}
                      >
                        {copiedStates.bitcoin ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-[#1E293B]">
                  <div className="space-y-2">
                    <label className="text-white text-sm flex items-center gap-1">
                      Donation Address
                      <Info className="h-3.5 w-3.5 text-mine-silver cursor-help" title="This address will be shown publicly for donations" />
                    </label>
                    <div className="flex gap-2">
                      <Input
                        name="donation"
                        value={walletData.donation}
                        onChange={handleChange}
                        placeholder="Enter a wallet address for receiving donations"
                        className="bg-[#0A0F1D] border-[#1E293B] text-white flex-1"
                      />
                      {walletData.donation && (
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-[#1E293B] text-mine-silver"
                          onClick={() => handleCopy('donation')}
                        >
                          {copiedStates.donation ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      )}
                    </div>
                    <p className="text-xs text-mine-silver">
                      This address will be displayed on your public profile for community donations.
                    </p>
                  </div>
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
            
            <div className="p-4 rounded-lg border border-[#1E293B] bg-[#0A0F1D]">
              <h3 className="text-white font-medium mb-2">Need a Wallet?</h3>
              <p className="text-mine-silver text-sm mb-4">
                If you don't have a blockchain wallet yet, here are some recommended options:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="https://metamask.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg border border-[#1E293B] hover:border-[#F97316] transition-colors group"
                >
                  <div className="mr-3 p-2 rounded-md bg-[#0F172A]">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" 
                      alt="Metamask" 
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">Metamask</p>
                    <p className="text-xs text-mine-silver flex items-center gap-1">
                      For Ethereum & ERC-20 tokens
                      <ExternalLink className="h-3 w-3 group-hover:text-[#F97316] transition-colors" />
                    </p>
                  </div>
                </a>
                
                <a 
                  href="https://trustwallet.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg border border-[#1E293B] hover:border-[#F97316] transition-colors group"
                >
                  <div className="mr-3 p-2 rounded-md bg-[#0F172A]">
                    <img 
                      src="https://trustwallet.com/assets/images/media/assets/trust_platform.svg" 
                      alt="Trust Wallet" 
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">Trust Wallet</p>
                    <p className="text-xs text-mine-silver flex items-center gap-1">
                      Multi-chain wallet
                      <ExternalLink className="h-3 w-3 group-hover:text-[#F97316] transition-colors" />
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
