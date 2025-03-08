
export const LearningPathways = () => {
  return (
    <div className="mt-16 max-w-3xl mx-auto">
      <div className="bg-black/30 border border-white/10 p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-4 text-center">Learning Pathways</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-[#F97316]/20 rounded-lg p-4 hover:border-[#F97316]/50 transition-all duration-300 hover:bg-[#F97316]/5">
            <h4 className="font-bold mb-2 text-[#F97316]">Blockchain Basics to Advanced</h4>
            <ul className="text-mine-silver space-y-2">
              <li className="flex items-center">
                <span className="bg-[#F97316]/10 text-[#F97316] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">1</span>
                <span>Blockchain Fundamentals</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#F97316]/10 text-[#F97316] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">2</span>
                <span>Mining Algorithms</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#F97316]/10 text-[#F97316] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">3</span>
                <span>Smart Contracts</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#F97316]/10 text-[#F97316] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">4</span>
                <span>Decentralized Applications</span>
              </li>
            </ul>
          </div>
          <div className="border border-[#0EA5E9]/20 rounded-lg p-4 hover:border-[#0EA5E9]/50 transition-all duration-300 hover:bg-[#0EA5E9]/5">
            <h4 className="font-bold mb-2 text-[#0EA5E9]">AI & Machine Learning Path</h4>
            <ul className="text-mine-silver space-y-2">
              <li className="flex items-center">
                <span className="bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">1</span>
                <span>AI Fundamentals</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">2</span>
                <span>Machine Learning Basics</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">3</span>
                <span>Neural Networks</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">4</span>
                <span>Advanced AI Applications</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
