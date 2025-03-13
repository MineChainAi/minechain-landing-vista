
import React from "react";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { getHint } from "./utils";

interface HintSectionProps {
  secretWord: string;
  showHint: boolean;
  toggleHint: () => void;
}

export const HintSection: React.FC<HintSectionProps> = ({ 
  secretWord, 
  showHint, 
  toggleHint 
}) => {
  // Get the hint text using the utility function
  const hintText = getHint(secretWord);
  
  return (
    <div className="my-4">
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: showHint ? 1 : 0,
          height: showHint ? "auto" : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="bg-[#1A2138] p-3 rounded-lg border border-orange-500/30 mb-3">
          <p className="text-mine-silver text-sm">
            <span className="text-orange-400 font-medium">Hint:</span> {hintText}
          </p>
        </div>
      </motion.div>
      
      <div className="flex justify-center">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleHint}
          className="bg-transparent border-orange-500/30 text-orange-400 hover:bg-orange-500/10 text-xs flex items-center gap-1"
        >
          <Lightbulb className="h-3 w-3" />
          {showHint ? "Hide Hint" : "Show Hint"}
        </Button>
      </div>
    </div>
  );
};
