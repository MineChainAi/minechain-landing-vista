
import { Badge } from "@/components/ui/badge";

export const WhitepaperAbstract = () => {
  return (
    <div className="mt-8 p-6 bg-black/20 rounded-lg border border-white/10">
      <Badge variant="outline" className="mb-3 text-[#F97316] border-[#F97316]/30">Abstract</Badge>
      <p className="text-mine-silver">
        The <strong>$MINE token</strong> is a <strong>Proof-of-Work (PoW)-based mining and compute asset</strong>, designed to power <strong>AI workloads, decentralized GPU leasing, and blockchain infrastructure</strong>. Built on the <strong>KawPow algorithm</strong>, $MINE ensures <strong>fair mining distribution, real-world compute integration, and tokenized mining rewards</strong>.
      </p>
      <p className="text-mine-silver mt-4">
        With a <strong>23 million total supply</strong>, <strong>halving every 3 years</strong>, and a <strong>5% daily allocation to a strategic Ravencoin reserve</strong>, $MINE is built for <strong>long-term sustainability, scarcity, and growth within the Ravencoin ecosystem.</strong>
      </p>
      <p className="text-mine-silver mt-4">
        MineChain is taking a <strong>hardware-first approach</strong> by directly <strong>owning and operating AI and mining infrastructure</strong>, ensuring <strong>real-world revenue streams, asset-backed growth, and long-term sustainability</strong>.
      </p>
    </div>
  );
};
