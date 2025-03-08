
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cpu, Brain, Database, Server, ArrowRight } from "lucide-react";

export const EducationGuides = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Step-by-Step <span className="text-gradient-orange">Guides</span>
          </h2>
          <p className="text-mine-silver text-lg">
            Follow our detailed guides to master essential skills and techniques in AI, blockchain, and mining.
          </p>
        </div>
        
        <Tabs defaultValue="mining" className="animate-fade-in">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-black/30 p-1 border border-white/10 rounded-lg">
            <TabsTrigger value="mining" className="data-[state=active]:bg-[#F97316] data-[state=active]:text-white">
              <Cpu className="h-4 w-4 mr-2" /> Mining
            </TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-[#0EA5E9] data-[state=active]:text-white">
              <Brain className="h-4 w-4 mr-2" /> AI Development
            </TabsTrigger>
            <TabsTrigger value="blockchain" className="data-[state=active]:bg-[#F97316] data-[state=active]:text-white">
              <Database className="h-4 w-4 mr-2" /> Blockchain
            </TabsTrigger>
            <TabsTrigger value="hosting" className="data-[state=active]:bg-[#0EA5E9] data-[state=active]:text-white">
              <Server className="h-4 w-4 mr-2" /> Hosting
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="mining" className="mt-6 animate-slide-up">
            <Card className="bg-black/30 border-white/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-white">Mining Guides</h3>
                
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#F97316]/20 text-[#F97316] w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">1</span>
                      <h4 className="text-xl font-medium text-white group-hover:text-[#F97316] transition-colors duration-300">Setting Up Your Mining Rig</h4>
                    </div>
                    <p className="text-mine-silver pl-11 mb-3">Learn how to assemble, configure, and optimize your mining hardware for maximum performance.</p>
                    <div className="pl-11">
                      <a href="#" className="text-[#F97316] text-sm flex items-center hover:underline">
                        Read Guide <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#F97316]/20 text-[#F97316] w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">2</span>
                      <h4 className="text-xl font-medium text-white group-hover:text-[#F97316] transition-colors duration-300">Mining Pool Configuration</h4>
                    </div>
                    <p className="text-mine-silver pl-11 mb-3">Step-by-step instructions for joining mining pools and configuring your setup for optimal rewards.</p>
                    <div className="pl-11">
                      <a href="#" className="text-[#F97316] text-sm flex items-center hover:underline">
                        Read Guide <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#F97316]/20 text-[#F97316] w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">3</span>
                      <h4 className="text-xl font-medium text-white group-hover:text-[#F97316] transition-colors duration-300">Energy Efficiency Optimization</h4>
                    </div>
                    <p className="text-mine-silver pl-11 mb-3">Strategies for reducing power consumption while maintaining high mining performance.</p>
                    <div className="pl-11">
                      <a href="#" className="text-[#F97316] text-sm flex items-center hover:underline">
                        Read Guide <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ai" className="mt-6 animate-slide-up">
            <Card className="bg-black/30 border-white/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-white">AI Development Guides</h3>
                
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#0EA5E9]/20 text-[#0EA5E9] w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">1</span>
                      <h4 className="text-xl font-medium text-white group-hover:text-[#0EA5E9] transition-colors duration-300">Building Your First AI Model</h4>
                    </div>
                    <p className="text-mine-silver pl-11 mb-3">A beginner's guide to creating and training a simple neural network for practical applications.</p>
                    <div className="pl-11">
                      <a href="#" className="text-[#0EA5E9] text-sm flex items-center hover:underline">
                        Read Guide <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#0EA5E9]/20 text-[#0EA5E9] w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">2</span>
                      <h4 className="text-xl font-medium text-white group-hover:text-[#0EA5E9] transition-colors duration-300">Fine-tuning Language Models</h4>
                    </div>
                    <p className="text-mine-silver pl-11 mb-3">Learn how to customize existing language models for specific domains and use cases.</p>
                    <div className="pl-11">
                      <a href="#" className="text-[#0EA5E9] text-sm flex items-center hover:underline">
                        Read Guide <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#0EA5E9]/20 text-[#0EA5E9] w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">3</span>
                      <h4 className="text-xl font-medium text-white group-hover:text-[#0EA5E9] transition-colors duration-300">AI Agent Deployment</h4>
                    </div>
                    <p className="text-mine-silver pl-11 mb-3">A comprehensive guide to deploying your AI agents to production environments.</p>
                    <div className="pl-11">
                      <a href="#" className="text-[#0EA5E9] text-sm flex items-center hover:underline">
                        Read Guide <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="blockchain" className="mt-6 animate-slide-up">
            <Card className="bg-black/30 border-white/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-white">Blockchain Guides</h3>
                
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#F97316]/20 text-[#F97316] w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">1</span>
                      <h4 className="text-xl font-medium text-white group-hover:text-[#F97316] transition-colors duration-300">Understanding Consensus Mechanisms</h4>
                    </div>
                    <p className="text-mine-silver pl-11 mb-3">A deep dive into different blockchain consensus algorithms including PoW, PoS, and hybrid models.</p>
                    <div className="pl-11">
                      <a href="#" className="text-[#F97316] text-sm flex items-center hover:underline">
                        Read Guide <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#F97316]/20 text-[#F97316] w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">2</span>
                      <h4 className="text-xl font-medium text-white group-hover:text-[#F97316] transition-colors duration-300">Smart Contract Development</h4>
                    </div>
                    <p className="text-mine-silver pl-11 mb-3">Learn to write, test, and deploy secure smart contracts for decentralized applications.</p>
                    <div className="pl-11">
                      <a href="#" className="text-[#F97316] text-sm flex items-center hover:underline">
                        Read Guide <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#F97316]/20 text-[#F97316] w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">3</span>
                      <h4 className="text-xl font-medium text-white group-hover:text-[#F97316] transition-colors duration-300">Tokenomics Design</h4>
                    </div>
                    <p className="text-mine-silver pl-11 mb-3">Principles for designing effective token economics for blockchain projects.</p>
                    <div className="pl-11">
                      <a href="#" className="text-[#F97316] text-sm flex items-center hover:underline">
                        Read Guide <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="hosting" className="mt-6 animate-slide-up">
            <Card className="bg-black/30 border-white/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-white">Hosting Guides</h3>
                
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#0EA5E9]/20 text-[#0EA5E9] w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">1</span>
                      <h4 className="text-xl font-medium text-white group-hover:text-[#0EA5E9] transition-colors duration-300">Data Center Setup</h4>
                    </div>
                    <p className="text-mine-silver pl-11 mb-3">Best practices for designing and managing efficient data center infrastructure.</p>
                    <div className="pl-11">
                      <a href="#" className="text-[#0EA5E9] text-sm flex items-center hover:underline">
                        Read Guide <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#0EA5E9]/20 text-[#0EA5E9] w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">2</span>
                      <h4 className="text-xl font-medium text-white group-hover:text-[#0EA5E9] transition-colors duration-300">Cooling System Optimization</h4>
                    </div>
                    <p className="text-mine-silver pl-11 mb-3">Advanced techniques for maintaining optimal temperature in high-performance computing environments.</p>
                    <div className="pl-11">
                      <a href="#" className="text-[#0EA5E9] text-sm flex items-center hover:underline">
                        Read Guide <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#0EA5E9]/20 text-[#0EA5E9] w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">3</span>
                      <h4 className="text-xl font-medium text-white group-hover:text-[#0EA5E9] transition-colors duration-300">Power Infrastructure Management</h4>
                    </div>
                    <p className="text-mine-silver pl-11 mb-3">Guidelines for designing reliable power systems for hosting environments.</p>
                    <div className="pl-11">
                      <a href="#" className="text-[#0EA5E9] text-sm flex items-center hover:underline">
                        Read Guide <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
