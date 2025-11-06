import { Badge } from "@/components/ui/badge";

const technologies = [
  { name: "Python", category: "Language" },
  { name: "C", category: "Language" },
  { name: "OpenAI", category: "AI" },
  { name: "MYSQL", category: "Database" },
  { name: "HTML", category: "Language" },
  { name: "Learning more..", category: "Language" },
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-12 sm:py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center gradient-text">
          TECH STACK
        </h2>
        
        <div className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-space bg-primary/10 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 sm:hover:scale-110 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] cursor-default"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="font-space text-foreground/60 text-sm">
              And many more tools in the ever-evolving tech ecosystem...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
