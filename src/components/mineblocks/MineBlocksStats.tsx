
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const MineBlocksStats = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🔗 Pool <span className="text-gradient-orange">Stats</span> & Connection Info
          </h2>
          <p className="text-mine-silver text-lg">
            Get real-time information about our mining pool and everything you need to connect and start earning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Pool Stats Card */}
          <Card className="bg-gradient-to-r from-[#F97316]/10 to-[#0EA5E9]/10 border border-white/10 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Pool Statistics</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Pool Hashrate</span>
                    <span className="font-bold">32.45 TH/s</span>
                  </div>
                  <Progress value={64} className="h-2 bg-white/10" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Miners Online</span>
                    <span className="font-bold">2,345</span>
                  </div>
                  <Progress value={78} className="h-2 bg-white/10" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Blocks Found (24h)</span>
                    <span className="font-bold">142</span>
                  </div>
                  <Progress value={86} className="h-2 bg-white/10" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Average Block Time</span>
                    <span className="font-bold">1m 12s</span>
                  </div>
                  <Progress value={92} className="h-2 bg-white/10" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Connection Info Card */}
          <Card className="bg-gradient-to-r from-[#F97316]/10 to-[#0EA5E9]/10 border border-white/10 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Connection Information</h3>
              
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <p className="text-sm text-mine-silver mb-1">Stratum</p>
                  <p className="font-mono bg-black/30 p-2 rounded text-[#F97316]">stratum+tcp://minechainpool.com:3333</p>
                </div>
                
                <div className="border-b border-white/10 pb-4">
                  <p className="text-sm text-mine-silver mb-1">Mining Algorithm</p>
                  <p className="font-bold">KawPow PoW</p>
                </div>
                
                <div className="border-b border-white/10 pb-4">
                  <p className="text-sm text-mine-silver mb-1">Minimum Payout</p>
                  <p className="font-bold">1 $MINE</p>
                </div>
                
                <div className="border-b border-white/10 pb-4">
                  <p className="text-sm text-mine-silver mb-1">Pool Fee</p>
                  <p className="font-bold text-green-400">0.9% (Lowest in the industry)</p>
                </div>
                
                <div>
                  <p className="text-sm text-mine-silver mb-1">Payment Schedule</p>
                  <p className="font-bold">Every 2 hours (confirmed blocks)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Getting Started Guide */}
        <div className="bg-black/30 border border-white/10 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Quick Start Guide</h3>
          
          <ol className="list-decimal pl-5 space-y-4 text-mine-silver">
            <li>
              <strong>Download a KawPow compatible miner</strong> - We recommend T-Rex, NBMiner, or TeamRedMiner depending on your GPU.
            </li>
            <li>
              <strong>Create a wallet</strong> - Set up a wallet that supports $MINE tokens (Tangem, Core, etc.).
            </li>
            <li>
              <strong>Configure your miner</strong> - Use our stratum address and your wallet address as username.
            </li>
            <li>
              <strong>Start mining</strong> - Launch your miner and monitor your hashrate and earnings in our dashboard.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};
