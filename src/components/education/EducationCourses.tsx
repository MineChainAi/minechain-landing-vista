
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Star, Cpu, Brain, Server, Database, Bot, Code } from "lucide-react";
import { useState } from "react";

export const EducationCourses = () => {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);
  
  const courses = [
    {
      title: "Introduction to AI Models",
      description: "Learn the fundamentals of AI, machine learning algorithms, and neural networks.",
      level: "Beginner",
      duration: "4 weeks",
      students: "2,450+",
      rating: 4.8,
      icon: <Brain className="h-12 w-12 text-[#F97316]" />,
      tags: ["AI", "ML Basics", "Neural Networks"]
    },
    {
      title: "Mining Optimization Techniques",
      description: "Optimize your mining operations with advanced techniques and energy efficiency strategies.",
      level: "Intermediate",
      duration: "6 weeks",
      students: "1,820+",
      rating: 4.7,
      icon: <Cpu className="h-12 w-12 text-[#0EA5E9]" />,
      tags: ["Mining", "Optimization", "Energy Efficiency"]
    },
    {
      title: "Building Custom AI Agents",
      description: "Design and develop specialized AI agents for specific industry applications.",
      level: "Advanced",
      duration: "8 weeks",
      students: "980+",
      rating: 4.9,
      icon: <Bot className="h-12 w-12 text-[#F97316]" />,
      tags: ["AI Agents", "Development", "Industry Applications"]
    },
    {
      title: "Decentralized Compute Infrastructure",
      description: "Learn to build and maintain decentralized compute networks for blockchain and AI workloads.",
      level: "Advanced",
      duration: "10 weeks",
      students: "760+",
      rating: 4.8,
      icon: <Server className="h-12 w-12 text-[#0EA5E9]" />,
      tags: ["Decentralized", "Infrastructure", "Blockchain"]
    },
    {
      title: "Blockchain Development Fundamentals",
      description: "Master the core concepts of blockchain technology and smart contract development.",
      level: "Intermediate",
      duration: "6 weeks",
      students: "3,120+",
      rating: 4.6,
      icon: <Database className="h-12 w-12 text-[#F97316]" />,
      tags: ["Blockchain", "Smart Contracts", "Development"]
    },
    {
      title: "AI-Powered Web3 Applications",
      description: "Build next-generation applications combining AI capabilities with Web3 infrastructure.",
      level: "Advanced",
      duration: "8 weeks",
      students: "640+",
      rating: 4.9,
      icon: <Code className="h-12 w-12 text-[#0EA5E9]" />,
      tags: ["Web3", "AI Integration", "DApps"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-500/20 text-green-500 border-green-500/30";
      case "Intermediate": return "bg-orange-500/20 text-orange-500 border-orange-500/30";
      case "Advanced": return "bg-red-500/20 text-red-500 border-red-500/30";
      default: return "bg-blue-500/20 text-blue-500 border-blue-500/30";
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-gradient-orange">Courses</span>
          </h2>
          <p className="text-mine-silver text-lg">
            Expand your knowledge with our comprehensive curriculum designed by industry experts.
            From AI fundamentals to advanced blockchain infrastructure, we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className={`bg-black/30 border-white/10 transition-all duration-500 hover:shadow-lg hover:shadow-[#F97316]/5 animate-fade-in overflow-hidden group`}
              style={{ animationDelay: `${0.1 * index}s` }}
              onMouseEnter={() => setHoveredCourse(index)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <div className={`h-1 w-full bg-gradient-to-r from-[#F97316] to-[#0EA5E9] transform origin-left transition-transform duration-700 ${
                hoveredCourse === index ? 'scale-x-100' : 'scale-x-0'
              }`}></div>
              <CardContent className="p-6">
                <div className={`mb-6 transition-transform duration-300 ${
                  hoveredCourse === index ? 'scale-110' : ''
                }`}>{course.icon}</div>
                
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`${getLevelColor(course.level)} px-2 py-0.5`}>
                    {course.level}
                  </Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                    <span className="text-sm text-mine-silver">{course.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#F97316] transition-colors duration-300">{course.title}</h3>
                <p className="text-mine-silver mb-6 text-sm">{course.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-full text-mine-silver">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-mine-silver">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                </div>
                
                <button className="mt-6 text-[#0EA5E9] text-sm flex items-center w-full justify-end hover:text-[#F97316] transition-colors duration-300">
                  Explore Course <ArrowRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    hoveredCourse === index ? 'translate-x-1' : ''
                  }`} />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
