
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

export const About = () => {
  const features = [
    "Expert team of certified developers",
    "Cutting-edge technologies and frameworks", 
    "Agile development methodology",
    "24/7 support and maintenance"
  ];

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6">About Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Vertex Softwares</h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between innovative technology and business success, Vertex Softwares has been at the forefront of Egypt's digital transformation journey.
            </p>
            <div className="space-y-4 mb-8">
              {features.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-0 shadow-2xl p-8 rounded-3xl">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Industry Recognition</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 text-lg">
                  Certified by leading technology partners and recognized for excellence in software development.
                </CardDescription>
                <div className="flex justify-center space-x-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">ISO 9001</Badge>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200 transition-colors">Microsoft Partner</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
