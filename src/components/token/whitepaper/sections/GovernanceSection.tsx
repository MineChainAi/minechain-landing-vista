
import { Card, CardContent } from "@/components/ui/card";

export const GovernanceSection = () => {
  return (
    <Card className="bg-[#0F172A] border-[#1E293B] mb-6">
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold text-white mb-4">Token Governance</h3>
        
        <div className="space-y-4 text-mine-silver">
          <p>
            The $MINE token governance model is designed to ensure decentralization and
            community participation in the MineChain ecosystem development.
          </p>
          
          <div className="space-y-2">
            <h4 className="text-white font-medium">Key Governance Features:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Community voting on key protocol decisions</li>
              <li>Transparent allocation of the Ravencoin Reserve Fund resources</li>
              <li>Decentralized management of AI compute infrastructure</li>
              <li>Open participation in mining allocation strategy</li>
            </ul>
          </div>
          
          <p>
            Token holders with a minimum stake can propose and vote on improvements to the
            protocol, ensuring that MineChain evolves according to community needs while
            maintaining its core focus on hardware ownership and real-world infrastructure.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
