
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star, Shield } from "lucide-react";

export const Hero = () => {
  console.log("Hero component rendering");
  
  return (
    <section id="home" className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background/50 to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge variant="secondary" className="mb-6 animate-fade-in">
                Leading Software Development in Egypt
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in leading-tight">
                Transform Your Ideas Into
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Powerful Software
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in leading-relaxed">
                At Vertex Softwares, we craft innovative, scalable, and secure software solutions that drive business growth and digital transformation across Egypt and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-4">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-4">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <Card className="relative bg-card/80 backdrop-blur-md shadow-2xl border border-border rounded-3xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">500+ Projects Completed</p>
                        <p className="text-muted-foreground">Successfully delivered worldwide</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">200+ Happy Clients</p>
                        <p className="text-muted-foreground">Across various industries</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">10+ Years Experience</p>
                        <p className="text-muted-foreground">In cutting-edge technologies</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
