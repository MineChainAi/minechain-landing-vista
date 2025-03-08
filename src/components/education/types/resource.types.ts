
import { ReactNode } from "react";

export type BaseResource = {
  title: string;
  type: string;
  category: string;
  icon: ReactNode;
  link: string;
};

export type RegularResource = BaseResource;

export type BeginnerResource = BaseResource & {
  difficulty: "beginner";
};

export type Resource = RegularResource | BeginnerResource;

// Type guard for beginner resources
export const isBeginnerResource = (resource: Resource): resource is BeginnerResource => {
  return 'difficulty' in resource && resource.difficulty === 'beginner';
};
