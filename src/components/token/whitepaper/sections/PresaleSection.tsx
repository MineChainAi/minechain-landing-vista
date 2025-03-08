
import { Badge } from "@/components/ui/badge";

export const PresaleSection = () => {
  return (
    <>
      <p className="text-mine-silver mb-4">
        MineChain is conducting a <strong>presale</strong> to raise capital for <strong>high-performance AI hardware, mining rigs, and compute infrastructure</strong>.
      </p>
      
      <p className="text-mine-silver font-bold mb-3">
        <Badge variant="outline" className="mr-2 text-[#F97316] border-[#F97316]/30">📌</Badge>
        Presale Details
      </p>
      
      <ul className="text-mine-silver space-y-2 list-disc pl-5 mb-4">
        <li><strong>Total Presale Supply:</strong> 2,300,000 $MINE (10% of total supply)</li>
        <li><strong>Token Distribution:</strong> <strong>RVN Asset on Ravencoin</strong> for full on-chain transparency.</li>
        <li><strong>No VC or Private Investors</strong> – This sale is <strong>community-focused</strong> to maintain decentralization.</li>
      </ul>
      
      <p className="text-mine-silver font-bold mb-3">
        <Badge variant="outline" className="mr-2 text-[#F97316] border-[#F97316]/30">💎</Badge>
        Early Buyers Get the Best Deal
      </p>
      
      <ul className="text-mine-silver space-y-2 list-disc pl-5 mb-4">
        <li><strong>Phase 1 – OG Miners & Community</strong> – <strong>$0.10 per $MINE</strong> (800,000 tokens)</li>
        <li><strong>Phase 2 – Public Round</strong> – <strong>$0.15 per $MINE</strong> (800,000 tokens)</li>
        <li><strong>Phase 3 – Final Sale</strong> – <strong>$0.20 per $MINE</strong> (700,000 tokens)</li>
      </ul>
      
      <p className="text-mine-silver mb-4">
        <strong>Total Raise Goal: $230K – $460K USD</strong>
      </p>
      
      <p className="text-mine-silver font-bold mb-3">
        Use of Funds
      </p>
      
      <ul className="text-mine-silver space-y-2 list-disc pl-5 mb-4">
        <li><strong>70%</strong> – Hardware Purchases (AI GPUs, Mining Rigs, AI Servers)</li>
        <li><strong>20%</strong> – Data Center & Operations (Cooling, Power Infra, Maintenance)</li>
        <li><strong>10%</strong> – Dev Team for Deployment, Marketing & Expansion</li>
      </ul>
      
      <p className="text-mine-silver font-bold">
        <Badge variant="outline" className="mr-2 text-[#F97316] border-[#F97316]/30">💡</Badge>
        AI compute power will begin generating revenue immediately after deployment.
      </p>
    </>
  );
};
