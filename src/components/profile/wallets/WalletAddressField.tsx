
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Check, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WalletAddressFieldProps {
  label: string;
  name: keyof WalletsData;
  value: string;
  placeholder: string;
  tooltip: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPrimary?: boolean;
}

// Import types from the new types file
import { WalletsData } from "../types/wallet.types";

export const WalletAddressField = ({ 
  label, 
  name, 
  value, 
  placeholder, 
  tooltip, 
  onChange,
  isPrimary 
}: WalletAddressFieldProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    if (!value) return;
    
    navigator.clipboard.writeText(value);
    setCopied(true);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
    
    toast({
      title: "Address Copied",
      description: `${label} wallet address copied to clipboard.`,
    });
  };

  return (
    <div className="space-y-2">
      <label className="text-white text-sm flex items-center gap-1">
        {label}
        <span className="relative group cursor-help">
          <Info className="h-3.5 w-3.5 text-mine-silver" />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {tooltip}
          </span>
        </span>
      </label>
      <div className="flex gap-2">
        <Input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`bg-[#0A0F1D] border-[#1E293B] text-white flex-1 ${isPrimary ? 'border-[#F97316] border-opacity-50' : ''}`}
        />
        {value && (
          <Button
            variant="outline"
            size="icon"
            className="border-[#1E293B] text-mine-silver"
            onClick={handleCopy}
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>
        )}
      </div>
    </div>
  );
};
