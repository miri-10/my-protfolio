import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/miri-10" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mians__20/" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/pokharel_m90973" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/misanpokharel/" }
];

export const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-20 px-4 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
         <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
            LET'S BUILD THE FUTURE
          </h2>
          
          <p className="font-space text-lg sm:text-xl text-foreground/80">
            Together.
          </p>
        </div>
        
        <div className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl text-center">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            {socials.map((social, index) => (
              <Button
                key={index}
                size="lg"
                variant="outline"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 sm:hover:scale-110 transition-all duration-300 group"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                   <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-glow-primary" />
                </a>
              </Button>
            ))}
          </div>
          
          <p className="font-space text-sm sm:text-base text-foreground/60 max-w-2xl mx-auto px-2">
            Whether you're interested in collaboration, have a project in mind, 
            or just want to discuss the future of technology, I'd love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
};
