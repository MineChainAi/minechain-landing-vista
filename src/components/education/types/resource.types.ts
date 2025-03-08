
import { ReactNode } from "react";

export type BaseResource = {
  title: string;
  type: string;
  category: string;
  icon: ReactNode;
  link: string;
};

export type RegularResource = BaseResource & {
  difficulty?: "advanced";
};

export type BeginnerResource = BaseResource & {
  difficulty: "beginner";
};

export type Resource = RegularResource | BeginnerResource;

export type DownloadableResource = BaseResource & {
  fileType: "pdf" | "infographic" | "cheatsheet";
  fileSize?: string;
};

// Type guard for beginner resources
export const isBeginnerResource = (resource: Resource): resource is BeginnerResource => {
  return 'difficulty' in resource && resource.difficulty === 'beginner';
};

// Type guard for advanced resources
export const isAdvancedResource = (resource: Resource): resource is RegularResource => {
  return !('difficulty' in resource) || resource.difficulty === "advanced";
};

// Type guard for downloadable resources
export const isDownloadableResource = (resource: any): resource is DownloadableResource => {
  return 'fileType' in resource;
};
