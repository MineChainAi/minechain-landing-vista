
import { Badge } from "@/components/ui/badge";

export const RoadmapSection = () => {
  return (
    <ul className="text-mine-silver space-y-2">
      <li className="flex items-center">
        <Badge variant="outline" className="mr-2 bg-green-500/20 text-green-400 border-green-500/30">✓</Badge>
        <span><strong>Phase 1</strong> – $MINE Token Launch & GPU Mining Integration</span>
      </li>
      <li className="flex items-center">
        <Badge variant="outline" className="mr-2 bg-green-500/20 text-green-400 border-green-500/30">✓</Badge>
        <span><strong>Phase 2</strong> – AI Compute Leasing & Tokenized GPU Rewards</span>
      </li>
      <li className="flex items-center">
        <Badge variant="outline" className="mr-2 bg-green-500/20 text-green-400 border-green-500/30">✓</Badge>
        <span><strong>Phase 3</strong> – <strong>Integration with Ravencoin's Asset Tokenization</strong> & Decentralized Compute Marketplace</span>
      </li>
      <li className="flex items-center">
        <Badge variant="outline" className="mr-2 bg-green-500/20 text-green-400 border-green-500/30">✓</Badge>
        <span><strong>Phase 4</strong> – Smart Contract Deployment for Compute Power & NFT-Based Access</span>
      </li>
    </ul>
  );
};
