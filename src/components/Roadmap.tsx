
import { Card } from "@/components/ui/card";

export const Roadmap = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F97316]/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
            Roadmap
          </h2>
        </div>

        <div className="glass-card p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/5 via-transparent to-[#0EA5E9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <p className="text-center text-lg text-mine-silver">
              More details coming soon. Stay tuned for our upcoming roadmap announcements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
