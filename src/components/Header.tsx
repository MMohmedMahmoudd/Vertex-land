
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Code, ArrowRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("Header component rendering");

  return (
    <header className="bg-background/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vertex Softwares
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground/70 hover:text-primary transition-colors font-medium">Home</a>
            <a href="#services" className="text-foreground/70 hover:text-primary transition-colors font-medium">Services</a>
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors font-medium">About</a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors font-medium">Contact</a>
            <ThemeToggle />
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground/70 hover:text-primary transition-colors font-medium">Home</a>
              <a href="#services" className="text-foreground/70 hover:text-primary transition-colors font-medium">Services</a>
              <a href="#about" className="text-foreground/70 hover:text-primary transition-colors font-medium">About</a>
              <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors font-medium">Contact</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
