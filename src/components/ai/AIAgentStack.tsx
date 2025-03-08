
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Server, Cpu, Code, Brain } from "lucide-react";

export const AIAgentStack = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black/10 to-black/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Compute-Optimized <span className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] bg-clip-text text-transparent">AI Stack</span>
            </h2>
            
            <p className="text-lg text-mine-silver mb-8">
              Our AI models run on a powerful tech stack designed for maximum 
              performance, reliability, and scalability. We leverage cutting-edge 
              hardware and software to deliver AI solutions that outperform expectations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Layers className="h-6 w-6 text-[#F97316] mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Multi-Layered Architecture</h3>
                  <p className="text-mine-silver">
                    From hardware to application layer, every component is optimized
                    for AI workloads, ensuring maximum efficiency and performance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Code className="h-6 w-6 text-[#0EA5E9] mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Custom Development</h3>
                  <p className="text-mine-silver">
                    Tailored codebase and model architecture designed specifically
                    for your use case, with no one-size-fits-all approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-[#F97316]/20 to-black/80 border border-[#F97316]/30">
                <CardContent className="p-6">
                  <Cpu className="h-12 w-12 text-[#F97316] mb-6" />
                  <h3 className="text-xl font-bold mb-3">High-Performance GPUs</h3>
                  <ul className="text-mine-silver space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]"></span>
                      NVIDIA A100s & H100s
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]"></span>
                      NVIDIA RTX 4090s
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]"></span>
                      AMD Radeon VII
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]"></span>
                      Custom GPU clusters
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#0EA5E9]/20 to-black/80 border border-[#0EA5E9]/30">
                <CardContent className="p-6">
                  <Code className="h-12 w-12 text-[#0EA5E9] mb-6" />
                  <h3 className="text-xl font-bold mb-3">Optimized ML Frameworks</h3>
                  <ul className="text-mine-silver space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></span>
                      PyTorch
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></span>
                      TensorFlow
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></span>
                      JAX
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></span>
                      Custom frameworks
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#0EA5E9]/20 to-black/80 border border-[#0EA5E9]/30">
                <CardContent className="p-6">
                  <Brain className="h-12 w-12 text-[#0EA5E9] mb-6" />
                  <h3 className="text-xl font-bold mb-3">Fine-tuned LLM Architectures</h3>
                  <ul className="text-mine-silver space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></span>
                      Llama models
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></span>
                      GPT variants
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></span>
                      Mistral
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></span>
                      Custom models
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#F97316]/20 to-black/80 border border-[#F97316]/30">
                <CardContent className="p-6">
                  <Server className="h-12 w-12 text-[#F97316] mb-6" />
                  <h3 className="text-xl font-bold mb-3">Edge & Cloud Deployment</h3>
                  <ul className="text-mine-silver space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]"></span>
                      On-prem GPU clusters
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]"></span>
                      Hybrid cloud solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]"></span>
                      Edge computing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]"></span>
                      Custom deployment
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
