
import { Resource } from "./types/resource.types";
import { ResourceCard } from "./ResourceCard";

type ResourcesListProps = {
  resources: Resource[];
};

export const ResourcesList = ({ resources }: ResourcesListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
      {resources.map((resource, index) => (
        <ResourceCard key={index} resource={resource} />
      ))}
    </div>
  );
};
