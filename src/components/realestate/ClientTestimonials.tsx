
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const ClientTestimonials = () => {
  const testimonials = [
    {
      quote: "MineChain's expertise in power infrastructure saved us months of research and millions in potential missteps. Their team identified the perfect site for our AI compute facility.",
      author: "Sarah Johnson",
      title: "CTO, TechFusion AI",
      avatar: "/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png"
    },
    {
      quote: "Working with MineChain on our data center acquisition strategy was transformative. Their understanding of both real estate and technology infrastructure is unmatched.",
      author: "Michael Chen",
      title: "Director of Operations, Quantum Computing Inc.",
      avatar: "/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png"
    },
    {
      quote: "The team at MineChain helped us navigate complex utility agreements and secure a site with exceptional power advantages. True experts in industrial real estate.",
      author: "David Rodriguez",
      title: "Founder, BlockScale Mining",
      avatar: "/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png"
    }
  ];
  
  return (
    <section className="mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">What Our Clients Say</h2>
        <p className="text-mine-silver max-w-2xl mx-auto">Trusted by institutional investors, developers, and technology companies</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-[#0F172A] border-[#1E293B] p-6 relative">
            <Quote className="h-10 w-10 text-[#F97316]/20 absolute top-4 right-4" />
            <p className="text-mine-silver mb-6 relative z-10">{testimonial.quote}</p>
            <div className="flex items-center">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.author} 
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="text-white font-medium">{testimonial.author}</p>
                <p className="text-xs text-mine-silver">{testimonial.title}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
