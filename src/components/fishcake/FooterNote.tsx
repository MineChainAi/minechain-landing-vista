
import { motion } from "framer-motion";
import React from "react";

export const FooterNote = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-16 text-center"
    >
      <p className="text-mine-silver">
        PoWrdle is part of Fishcake.ai, a platform for blockchain-related games and educational content.
        Check back regularly for new words and features!
      </p>
    </motion.div>
  );
};
