
import { useState } from "react";
import { Resource } from "./types/resource.types";
import { ResourceCard } from "./ResourceCard";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

type ResourcesListProps = {
  resources: Resource[];
};

export const ResourcesList = ({ resources }: ResourcesListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<"all" | "beginner" | "advanced">("all");
  
  // Apply filters to resources
  const filteredResources = resources.filter(resource => {
    // Search filter
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Difficulty filter
    const matchesDifficulty = 
      difficultyFilter === "all" ||
      (difficultyFilter === "beginner" && resource.difficulty === "beginner") ||
      (difficultyFilter === "advanced" && (!resource.difficulty || resource.difficulty === "advanced"));
    
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-mine-silver" />
          <Input
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-black/20 border-white/10 text-white placeholder:text-mine-silver/70"
          />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 rounded-md bg-black/30 border border-white/10 hover:bg-black/40 transition-all duration-200">
            <Filter className="h-4 w-4 text-mine-silver" />
            <span className="text-sm text-white">
              {difficultyFilter === "all" ? "All Levels" : 
               difficultyFilter === "beginner" ? "Beginner" : "Advanced"}
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/90 border border-white/10">
            <DropdownMenuItem 
              onClick={() => setDifficultyFilter("all")}
              className={`text-sm ${difficultyFilter === "all" ? "text-[#F97316]" : "text-white"}`}
            >
              All Levels
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setDifficultyFilter("beginner")}
              className={`text-sm ${difficultyFilter === "beginner" ? "text-[#F97316]" : "text-white"}`}
            >
              Beginner
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setDifficultyFilter("advanced")}
              className={`text-sm ${difficultyFilter === "advanced" ? "text-[#F97316]" : "text-white"}`}
            >
              Advanced
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {filteredResources.length === 0 ? (
        <div className="text-center py-10 text-mine-silver">
          <p>No resources found matching your criteria.</p>
          <p className="text-sm mt-2">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredResources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>
      )}
    </div>
  );
};
