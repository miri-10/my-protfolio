import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />
      
      {/* Content */}
       <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-orbitron text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-4 sm:mb-6 animate-hero-entrance opacity-0 leading-tight">
          <span className="gradient-text text-glow-primary animate-glow-pulse">
            MISAN POKHAREL
          </span>
        </h1>
        
        <p className="font-space text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 sm:mb-12 animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards] px-2">
          Building the Future with <span className="text-primary font-semibold">AI</span> & <span className="text-secondary font-semibold">Data</span>
        </p>
        
        <Button 
          onClick={scrollToAbout}
          size="lg"
          className="group relative overflow-hidden bg-primary/10 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] font-orbitron"
        >
          <span className="relative z-10">EXPLORE</span>
          <ChevronDown className="ml-2 h-4 sm:h-5 w-4 sm:w-5 animate-bounce" />
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
