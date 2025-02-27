
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What is MineChain?",
      answer: "MineChain is an enterprise-grade blockchain platform that combines AI computing, decentralized infrastructure, and GPU mining into a cohesive ecosystem. It provides a marketplace for compute power while supporting a network of validators and miners through a Layer 1 blockchain architecture."
    },
    {
      question: "How do I become a validator on the network?",
      answer: "To become a validator, you need to stake the required amount of MINE tokens and run validator software on a machine that meets the minimum hardware requirements. Our detailed validator setup guide in the Knowledge Hub provides step-by-step instructions for the entire process."
    },
    {
      question: "What are the hardware requirements for mining?",
      answer: "MineChain supports various GPU models for mining, with optimal performance from NVIDIA RTX 3000 series and above. The minimum requirements include a compatible GPU with at least 8GB of VRAM, 16GB of system RAM, a modern CPU with 4+ cores, and 100GB of SSD storage. Our GPU Mining Technical Guide contains detailed specifications and optimization recommendations."
    },
    {
      question: "How does the AI compute marketplace work?",
      answer: "The AI compute marketplace matches GPU providers with users needing computational resources. Providers list their available GPU time, specifications, and pricing, while users can browse, compare, and rent these resources for AI training, inference, rendering, or other compute-intensive tasks. All transactions are secured through smart contracts on the MineChain blockchain."
    },
    {
      question: "What are MINE tokens and how are they used?",
      answer: "MINE tokens are the native cryptocurrency of the MineChain ecosystem. They serve multiple functions: payment for GPU resources on the marketplace, staking for validators, governance voting rights, network fee payments, and rewards for contributing to the ecosystem. The tokenomics are designed to create a sustainable economic model that incentivizes network growth and security."
    },
    {
      question: "How can I contribute to the MineChain project?",
      answer: "There are numerous ways to contribute to MineChain: become a validator or miner, develop applications using our APIs, create educational content for the Knowledge Hub, participate in governance, contribute to the codebase if you're a developer, or simply spread awareness about the project. Join our Discord community to connect with like-minded contributors."
    }
  ];

  return (
    <section className="mb-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
        <p className="text-mine-silver max-w-2xl mx-auto">
          Find answers to common questions about MineChain technology, infrastructure, and ecosystem
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-[#1E293B] py-2"
            >
              <AccordionTrigger className="text-white hover:text-[#F97316] text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-mine-silver">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-8 text-center">
          <p className="text-mine-silver mb-3">
            Still have questions? We're here to help!
          </p>
          <a 
            href="mailto:support@minechain.ai"
            className="text-[#F97316] hover:text-[#F97316]/80 font-medium"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};
