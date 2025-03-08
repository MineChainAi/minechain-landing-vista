
import { Lightbulb } from "lucide-react";

export const BeginnerNotice = () => {
  return (
    <div className="bg-[#F97316]/10 border border-[#F97316]/30 rounded-lg p-4 max-w-2xl">
      <h3 className="text-xl font-semibold mb-2 flex items-center">
        <Lightbulb className="h-5 w-5 text-[#F97316] mr-2" /> 
        New to Blockchain & AI?
      </h3>
      <p className="text-mine-silver text-md">
        We've curated beginner-friendly resources to help you understand the fundamentals. 
        Look for the <span className="text-[#F97316] font-semibold">Beginner</span> tag on resources designed for newcomers.
      </p>
    </div>
  );
};
