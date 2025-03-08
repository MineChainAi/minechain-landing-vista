
import { motion } from "framer-motion";
import { Bitcoin, CreditCard, DollarSign } from "lucide-react";

export const CryptoPayments = () => {
  const paymentMethods = [
    {
      icon: <Bitcoin className="h-12 w-12 text-[#F7931A]" />,
      name: "Bitcoin",
      description: "Pay with the world's leading cryptocurrency"
    },
    {
      icon: <img src="/lovable-uploads/dec93b9a-f787-4d4b-b9e9-0c04150797af.png" alt="Ravencoin" className="h-12 w-12" />,
      name: "Ravencoin",
      description: "The official project partner for hardware transactions"
    },
    {
      icon: <DollarSign className="h-12 w-12 text-[#26A17B]" />,
      name: "Stablecoins",
      description: "USDT, USDC, and other dollar-pegged tokens"
    },
    {
      icon: <CreditCard className="h-12 w-12 text-[#F97316]" />,
      name: "$MINE Token",
      description: "Get exclusive discounts when paying with $MINE"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080F1D]" />
      <div className="absolute inset-0 bg-[url('/lovable-uploads/dec93b9a-f787-4d4b-b9e9-0c04150797af.png')] bg-cover opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Secure <span className="text-[#F97316]">Crypto Payments</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-mine-silver"
          >
            Transact with confidence using these supported cryptocurrencies and tokens
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-black/40 border border-[#1E293B] rounded-lg p-8 text-center hover:border-[#F97316]/30 transition-all duration-300 h-full">
                <div className="mb-6 flex justify-center">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{method.name}</h3>
                <p className="text-mine-silver">{method.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-[#F97316]/20 to-[#0EA5E9]/20 border border-[#F97316]/30 rounded-lg p-8 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-4">On-Chain Escrow Protection</h3>
          <p className="text-mine-silver max-w-3xl mx-auto">
            All marketplace transactions are protected by our smart contract escrow system.
            Funds are only released when both parties confirm successful delivery of hardware.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
