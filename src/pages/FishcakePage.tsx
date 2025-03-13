
import React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const FishcakePage = () => {
  return (
    <>
      <Helmet>
        <title>Fishcake - MineChain</title>
        <meta name="description" content="Explore MineChain's Fishcake offerings and services." />
      </Helmet>
      <div className="min-h-screen bg-mine-dark">
        <Navbar />
        
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#080F1D]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#080F1D] opacity-70" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Welcome to <span className="text-[#F97316]">Fishcake</span>
              </h1>
              <p className="text-lg text-mine-silver mb-8">
                Discover the innovative Fishcake platform powered by MineChain technology.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="bg-black/40 border border-white/10 rounded-lg p-8 hover:border-[#F97316]/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Fishcake Feature {item}</h3>
                  <p className="text-mine-silver">
                    This is a placeholder for Fishcake content. Replace with actual features and content
                    related to your Fishcake page.
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <p className="text-mine-silver">
                For more information about Fishcake, please contact our team or explore the other sections
                of the MineChain platform.
              </p>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default FishcakePage;
