import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "Data Vault",
    description: "Decentralized data marketplace leveraging AI for insights",
    tags: ["AI", "Data", "Python", "React"],
    demo: "https://datavault-psi.vercel.app/",
    source: "https://github.com/miri-10/data_vault"
  },
  {
    name: "Coming soon...",
    description: "",
    tags: [""],
    demo: "#",
    source: "#"
  },

];

export const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
       <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center gradient-text">
          PROJECTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card p-4 sm:p-6 group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] sm:hover:scale-105"
            >
              <h3 className="font-orbitron text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-primary group-hover:text-glow-primary transition-all">
                {project.name}
              </h3>
              
              <p className="font-space text-foreground/80 mb-3 sm:mb-4 text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex}
                    variant="outline"
                    className="border-primary/30 text-primary bg-primary/5 font-space text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  size="sm" 
                  className="flex-1 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-orbitron text-xs"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    DEMO
                  </a>
                </Button>
                
                <Button 
                  size="sm"
                  variant="outline"
                  className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-orbitron text-xs"
                  asChild
                >
                  <a href={project.source} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3 h-3 mr-1" />
                    CODE
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
