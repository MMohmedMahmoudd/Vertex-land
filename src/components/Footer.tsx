
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";

export const Footer = () => {
  const footerSections = [
    { title: "Services", items: ["Custom Development", "Mobile Apps", "Web Development", "Cloud Solutions"] },
    { title: "Company", items: ["About Us", "Careers", "Blog", "Contact"] },
    { title: "Support", items: ["Documentation", "Help Center", "Community", "Status"] }
  ];

  return (
    <footer className="bg-muted/30 text-foreground py-16 relative border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Vertex Softwares</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transforming ideas into powerful software solutions across Egypt and beyond.
            </p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h4 className="font-bold text-foreground mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 text-center animate-fade-in">
          <p className="text-muted-foreground">
            © 2024 Vertex Softwares. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
