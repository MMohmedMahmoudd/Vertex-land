
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Index = () => {
  console.log("Index component rendering");
  
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-roboto overflow-x-hidden">
        <AnimatedBackground />
        <Header />
        <main>
          <Hero />
          <Stats />
          <Services />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingActionButton />
      </div>
    </ThemeProvider>
  );
};

export default Index;
