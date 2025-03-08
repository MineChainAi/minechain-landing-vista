
import { Badge } from "@/components/ui/badge";

export const AIAgentIntegration = () => {
  const integrations = [
    { category: "Web3", items: ["Smart Contracts", "DeFi Protocols", "NFT Platforms", "DAOs"] },
    { category: "Business", items: ["CRM Systems", "Marketing Tools", "Analytics Platforms", "ERP Software"] },
    { category: "Data", items: ["Data Lakes", "Warehouses", "Real-time Processing", "Predictive Analytics"] },
    { category: "Social", items: ["Twitter/X", "Discord", "Telegram", "LinkedIn"] }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI Agent <span className="text-gradient-orange">Integration</span>
            </h2>
            <p className="text-mine-silver text-lg">
              Deploy your AI across Web3, DeFi, social media, customer service, 
              data analytics, and automation workflows with our seamless integration capabilities.
            </p>
          </div>
          
          <div className="bg-black/30 rounded-xl border border-white/10 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {integrations.map((integration, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-xl font-bold mb-6 text-white">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm mr-3 ${
                      index % 2 === 0 ? 'bg-[#F97316]/20 text-[#F97316]' : 'bg-[#0EA5E9]/20 text-[#0EA5E9]'
                    }`}>
                      {integration.category}
                    </span>
                    Integration
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {integration.items.map((item, itemIndex) => (
                      <Badge 
                        key={itemIndex} 
                        className={`px-3 py-1 ${
                          index % 2 === 0 
                            ? 'bg-[#F97316]/10 text-[#F97316] hover:bg-[#F97316]/20 border-[#F97316]/30' 
                            : 'bg-[#0EA5E9]/10 text-[#0EA5E9] hover:bg-[#0EA5E9]/20 border-[#0EA5E9]/30'
                        }`}
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-lg font-bold mb-3">Use Cases</h4>
                    <ul className="space-y-2 text-mine-silver">
                      {index === 0 && (
                        <>
                          <li className="flex items-start">
                            <span className={`h-1.5 w-1.5 rounded-full bg-[#F97316] mt-2 mr-2`}></span>
                            Automated DeFi trading and liquidity management
                          </li>
                          <li className="flex items-start">
                            <span className={`h-1.5 w-1.5 rounded-full bg-[#F97316] mt-2 mr-2`}></span>
                            Smart contract interaction and monitoring
                          </li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li className="flex items-start">
                            <span className={`h-1.5 w-1.5 rounded-full bg-[#0EA5E9] mt-2 mr-2`}></span>
                            Customer support automation and ticket prioritization
                          </li>
                          <li className="flex items-start">
                            <span className={`h-1.5 w-1.5 rounded-full bg-[#0EA5E9] mt-2 mr-2`}></span>
                            Sales forecasting and pipeline optimization
                          </li>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <li className="flex items-start">
                            <span className={`h-1.5 w-1.5 rounded-full bg-[#F97316] mt-2 mr-2`}></span>
                            Real-time data processing and anomaly detection
                          </li>
                          <li className="flex items-start">
                            <span className={`h-1.5 w-1.5 rounded-full bg-[#F97316] mt-2 mr-2`}></span>
                            Predictive maintenance and resource optimization
                          </li>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <li className="flex items-start">
                            <span className={`h-1.5 w-1.5 rounded-full bg-[#0EA5E9] mt-2 mr-2`}></span>
                            Sentiment analysis and community engagement
                          </li>
                          <li className="flex items-start">
                            <span className={`h-1.5 w-1.5 rounded-full bg-[#0EA5E9] mt-2 mr-2`}></span>
                            Automated content creation and distribution
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
