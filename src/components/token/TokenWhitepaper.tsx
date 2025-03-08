
import { WhitepaperHeader } from "./whitepaper/WhitepaperHeader";
import { WhitepaperAbstract } from "./whitepaper/WhitepaperAbstract";
import { WhitepaperSections } from "./whitepaper/WhitepaperSections";

export const TokenWhitepaper = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#F97316]/10 to-[#0EA5E9]/10 border border-white/10 rounded-xl p-8 md:p-12">
          <WhitepaperHeader />
          <WhitepaperAbstract />
          <WhitepaperSections />
        </div>
      </div>
    </section>
  );
};
