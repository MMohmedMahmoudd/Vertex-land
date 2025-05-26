
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Globe, Database, Shield, Cloud } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions built with cutting-edge technologies to meet your specific business requirements."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development", 
    description: "Native and cross-platform mobile applications for iOS and Android with stunning user experiences."
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with the latest frameworks and technologies."
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Efficient database design, optimization, and management for scalable data-driven applications."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and maintain data integrity."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud migration, deployment, and management services for improved scalability and performance."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background/50 to-primary/5 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What We Offer</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive software development services to help businesses leverage technology for growth and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-scale-in border-0 bg-card/80 backdrop-blur-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
