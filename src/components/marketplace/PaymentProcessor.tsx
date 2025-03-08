
import React, { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from 'sonner';

interface PaymentProcessorProps {
  productId: number;
  productName: string;
  price: string;
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentProcessor = ({ 
  productId, 
  productName, 
  price, 
  isOpen, 
  onClose 
}: PaymentProcessorProps) => {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  
  const initiateCoinbaseCheckout = async () => {
    try {
      setPaymentStatus('processing');
      
      // In a real implementation, this would make an API call to your backend
      // which would then create a Coinbase Commerce checkout session
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, we'll simulate a successful payment
      setPaymentStatus('success');
      toast.success("Payment processed successfully!");
      
      // In production, this would open the Coinbase Commerce checkout page in a new window
      // window.open(checkoutUrl, '_blank');
      
      // After successful payment, you would typically:
      // 1. Update order status in your database
      // 2. Send confirmation emails
      // 3. Update UI to show order confirmation
    } catch (error) {
      console.error("Payment initiation failed:", error);
      setPaymentStatus('error');
      toast.error("Payment processing failed. Please try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-[#0F172A] border-[#1E293B] text-white">
        <DialogHeader>
          <DialogTitle className="text-xl text-white mb-2">Complete Your Purchase</DialogTitle>
          <DialogDescription className="text-mine-silver">
            Secure cryptocurrency payment via Coinbase Commerce
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-4 border border-[#1E293B] rounded-md bg-black/40 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-mine-silver">Product:</span>
            <span className="font-medium text-white">{productName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-mine-silver">Total:</span>
            <span className="font-bold text-[#F97316]">{price}</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border border-[#1E293B] rounded-md bg-black/30 flex flex-col items-center justify-center hover:border-[#F97316]/30 cursor-pointer transition-colors">
              <img src="/lovable-uploads/dec93b9a-f787-4d4b-b9e9-0c04150797af.png" alt="Ravencoin" className="h-8 w-8 mb-2" />
              <span className="text-sm text-center">Pay with RVN</span>
            </div>
            <div className="p-3 border border-[#1E293B] rounded-md bg-black/30 flex flex-col items-center justify-center hover:border-[#F97316]/30 cursor-pointer transition-colors">
              <div className="h-8 w-8 mb-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#F7931A"/>
                  <path d="M23.189 14.02C23.503 11.924 21.906 10.797 19.724 10.045L20.403 7.493L18.766 7.112L18.106 9.593C17.702 9.496 17.288 9.407 16.878 9.317L17.545 6.817L15.909 6.436L15.229 8.987C14.898 8.915 14.574 8.844 14.259 8.768L14.261 8.76L12.013 8.246L11.6 9.987C11.6 9.987 12.818 10.287 12.792 10.303C13.39 10.452 13.505 10.857 13.486 11.176L12.71 14.047C12.752 14.057 12.807 14.073 12.866 14.097L12.707 14.056L11.61 18.131C11.531 18.311 11.334 18.587 10.91 18.48C10.927 18.502 9.722 18.161 9.722 18.161L9 20.039L11.106 20.523C11.479 20.613 11.843 20.707 12.201 20.796L11.514 23.387L13.148 23.768L13.828 21.212C14.247 21.321 14.65 21.42 15.045 21.514L14.368 24.055L16.005 24.436L16.691 21.853C19.592 22.428 21.765 22.168 22.656 19.525C23.376 17.391 22.624 16.142 21.074 15.334C22.195 15.09 23.045 14.347 23.189 14.02ZM19.658 18.457C19.148 20.59 15.568 19.43 14.415 19.143L15.339 15.74C16.492 16.028 20.191 16.24 19.658 18.457ZM20.168 13.989C19.702 15.942 16.707 14.96 15.749 14.721L16.588 11.617C17.546 11.857 20.656 11.962 20.168 13.989Z" fill="white"/>
                </svg>
              </div>
              <span className="text-sm text-center">Pay with BTC</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border border-[#1E293B] rounded-md bg-black/30 flex flex-col items-center justify-center hover:border-[#F97316]/30 cursor-pointer transition-colors">
              <div className="h-8 w-8 mb-2 flex items-center justify-center text-[#26A17B]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 2000 2000" fill="currentColor">
                  <path d="M1000,0c552.26,0,1000,447.74,1000,1000S1552.24,2000,1000,2000,0,1552.38,0,1000,447.68,0,1000,0" />
                  <path d="M1123.42,866.76V718H1463.6V491.34H537.28V718H877.5V866.64C601,879.34,393.1,934.1,393.1,999.7s208,120.36,484.4,133.14v476.5h246V1132.8c276-12.74,483.48-67.46,483.48-133s-207.48-120.26-483.48-133m0,225.64v-0.12c-6.94.44-42.6,2.58-122,2.58-63.48,0-108.14-1.8-123.88-2.62v0.2C633.34,1081.66,451,1039.12,451,988.22S633.36,894.84,877.62,884V1050.1c16,1.1,61.76,3.8,124.92,3.8,75.86,0,114-3.16,121-3.8V884c243.8,10.86,425.72,53.44,425.72,104.16s-182,93.32-425.72,104.18" fill="#fff"/>
                </svg>
              </div>
              <span className="text-sm text-center">Pay with USDT</span>
            </div>
            <div className="p-3 border border-[#1E293B] rounded-md bg-black/30 flex flex-col items-center justify-center hover:border-[#F97316]/30 cursor-pointer transition-colors">
              <div className="h-8 w-8 mb-2 flex items-center justify-center text-[#F97316]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <span className="text-sm text-center">Pay with $MINE</span>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <Button 
              onClick={initiateCoinbaseCheckout}
              disabled={paymentStatus === 'processing'}
              className="bg-[#0052FF] hover:bg-[#0052FF]/90"
            >
              {paymentStatus === 'processing' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Proceed to Coinbase Checkout"
              )}
            </Button>
            
            {paymentStatus === 'success' && (
              <div className="flex items-center justify-center space-x-2 text-green-500 bg-green-500/10 p-2 rounded">
                <CheckCircle className="h-5 w-5" />
                <span>Payment successful! Processing your order...</span>
              </div>
            )}
            
            {paymentStatus === 'error' && (
              <div className="flex items-center justify-center space-x-2 text-red-500 bg-red-500/10 p-2 rounded">
                <AlertCircle className="h-5 w-5" />
                <span>Payment failed. Please try again.</span>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
