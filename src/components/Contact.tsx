
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    { icon: Mail, title: "Email Us", info: "info@vertex.com.eg" },
    { icon: Phone, title: "Call Us", info: "+20 xxx xxx xxxx" },
    { icon: MapPin, title: "Visit Us", info: "Cairo, Egypt" }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Ready to Start?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today and let's discuss how we can bring your vision to life with cutting-edge technology solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-0 shadow-xl p-8 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground mb-6">Let's Start a Conversation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-4 animate-fade-in group"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <contact.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{contact.title}</p>
                        <p className="text-muted-foreground">{contact.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <Card className="border-0 shadow-xl p-8 rounded-3xl bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground mb-6">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <input className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background text-foreground" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <input className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background text-foreground" placeholder="Your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background text-foreground" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none bg-background text-foreground" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
