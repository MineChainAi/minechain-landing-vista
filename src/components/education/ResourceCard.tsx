
import { Download, ExternalLink } from "lucide-react";
import { Resource, isBeginnerResource } from "./types/resource.types";

type ResourceCardProps = {
  resource: Resource;
};

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <a 
      href={resource.link}
      className="bg-black/30 border border-white/10 p-4 rounded-lg flex items-center hover:border-[#F97316]/30 transition-all duration-300 hover:bg-black/40 group"
    >
      <div className="bg-white/5 p-3 rounded-lg mr-4 group-hover:bg-[#F97316]/10 transition-colors duration-300">
        {resource.icon}
      </div>
      <div className="flex-grow">
        <h3 className="text-white font-medium group-hover:text-[#F97316] transition-colors duration-300">
          {resource.title}
          {isBeginnerResource(resource) && (
            <span className="ml-2 text-xs bg-[#F97316]/20 text-[#F97316] px-2 py-0.5 rounded-full">
              Beginner
            </span>
          )}
        </h3>
        <p className="text-mine-silver text-sm capitalize">{resource.type}</p>
      </div>
      {resource.type === "document" && (
        <Download className="h-5 w-5 text-mine-silver opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      {resource.type !== "document" && (
        <ExternalLink className="h-5 w-5 text-mine-silver opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </a>
  );
};
