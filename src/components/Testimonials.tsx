
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Hassan",
    position: "CTO, TechCorp Egypt",
    content: "Vertex delivered exceptional software solutions that transformed our business operations. Their expertise and professionalism are unmatched.",
    rating: 5
  },
  {
    name: "Sarah Mohamed",
    position: "Founder, StartupHub",
    content: "Working with Vertex was a game-changer for our startup. They understood our vision and delivered beyond our expectations.",
    rating: 5
  },
  {
    name: "Omar Ali",
    position: "IT Director, GlobalTech",
    content: "The team at Vertex combines technical excellence with outstanding customer service. Highly recommended for any software project.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background/50 to-primary/5 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Vertex Softwares.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in border-0 bg-card/80 backdrop-blur-md"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground italic mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </CardDescription>
                <div className="border-t border-border pt-4">
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
