
import { 
  FileText, 
  FileCode, 
  BookOpen, 
  Video, 
  Lightbulb, 
  GraduationCap, 
  Brain, 
  MessageSquareText 
} from "lucide-react";
import { RegularResource, BeginnerResource, Resource } from "../types/resource.types";

export const getRegularResources = (): RegularResource[] => [
  {
    title: "Introduction to $MINE Token Ecosystem",
    type: "document",
    category: "blockchain",
    icon: <FileText className="h-5 w-5 text-[#F97316]" />,
    link: "#"
  },
  {
    title: "AI Agent Architecture Design Principles",
    type: "document",
    category: "ai",
    icon: <FileText className="h-5 w-5 text-[#0EA5E9]" />,
    link: "#"
  },
  {
    title: "Mining Pool Setup Guide",
    type: "guide",
    category: "mining",
    icon: <BookOpen className="h-5 w-5 text-[#F97316]" />,
    link: "#"
  },
  {
    title: "GPU Hosting Optimization Techniques",
    type: "guide",
    category: "hosting",
    icon: <BookOpen className="h-5 w-5 text-[#0EA5E9]" />,
    link: "#"
  },
  {
    title: "KawPow Mining Algorithm Overview",
    type: "document",
    category: "mining",
    icon: <FileText className="h-5 w-5 text-[#F97316]" />,
    link: "#"
  },
  {
    title: "Custom AI Agent API Documentation",
    type: "code",
    category: "ai",
    icon: <FileCode className="h-5 w-5 text-[#0EA5E9]" />,
    link: "#"
  },
  {
    title: "Energy-Efficient Mining Webinar",
    type: "video",
    category: "mining",
    icon: <Video className="h-5 w-5 text-[#F97316]" />,
    link: "#"
  },
  {
    title: "AI Model Training Best Practices",
    type: "guide",
    category: "ai",
    icon: <BookOpen className="h-5 w-5 text-[#0EA5E9]" />,
    link: "#"
  }
];

export const getBeginnerResources = (): BeginnerResource[] => [
  {
    title: "Blockchain 101: Understanding the Basics",
    type: "guide",
    category: "blockchain",
    icon: <Lightbulb className="h-5 w-5 text-[#F97316]" />,
    link: "#",
    difficulty: "beginner"
  },
  {
    title: "What is Proof of Work? Simple Explanation",
    type: "guide",
    category: "blockchain",
    icon: <Lightbulb className="h-5 w-5 text-[#F97316]" />,
    link: "#",
    difficulty: "beginner"
  },
  {
    title: "AI Fundamentals: Machine Learning vs Deep Learning",
    type: "guide",
    category: "ai",
    icon: <Brain className="h-5 w-5 text-[#0EA5E9]" />,
    link: "#",
    difficulty: "beginner"
  },
  {
    title: "Crypto Mining for Complete Beginners",
    type: "video",
    category: "mining",
    icon: <GraduationCap className="h-5 w-5 text-[#F97316]" />,
    link: "#",
    difficulty: "beginner"
  },
  {
    title: "How AI and Blockchain Work Together",
    type: "document",
    category: "ai",
    icon: <MessageSquareText className="h-5 w-5 text-[#0EA5E9]" />,
    link: "#",
    difficulty: "beginner"
  },
  {
    title: "GPU Mining vs CPU Mining Explained",
    type: "guide",
    category: "mining",
    icon: <Lightbulb className="h-5 w-5 text-[#F97316]" />,
    link: "#",
    difficulty: "beginner"
  }
];

export const getAllResources = (): Resource[] => {
  return [...getRegularResources(), ...getBeginnerResources()];
};
