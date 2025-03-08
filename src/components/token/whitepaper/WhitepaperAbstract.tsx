
import { Badge } from "@/components/ui/badge";

export const WhitepaperAbstract = () => {
  return (
    <div className="mt-8 p-6 bg-black/20 rounded-lg border border-white/10">
      <Badge variant="outline" className="mb-3 text-[#F97316] border-[#F97316]/30">Abstract</Badge>
      <p className="text-mine-silver">
        The $MINE token is a decentralized, <strong>Proof-of-Work (PoW)</strong> mining-based asset designed to power <strong>AI workloads, decentralized compute, and blockchain mining infrastructure</strong>. Built on the <strong>KawPow algorithm</strong>, $MINE ensures fair and distributed mining while integrating real-world <strong>GPU compute, AI inference, and tokenized mining rewards</strong> into its economic model. With a <strong>23 million total supply</strong> and a <strong>halving schedule every two years</strong>, $MINE is built for long-term sustainability, scarcity, and value appreciation.
      </p>
    </div>
  );
};
