const experiences = [
  {
    year: "2025",
    title: "Starting Hackathon ",
    organization: "Superteamnp",
    description: "Built decentralized data marketplace using blockchain and AI"
  },
  {
    year: "2020-2024",
    title: "Explored",
    organization: "School, College, institutes",
    description: "learned from various institutes and online platforms"
  },
  
];

export const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center gradient-text">
          JOURNEY
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
         <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
          
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-6 top-2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-primary border-2 sm:border-4 border-background shadow-[0_0_20px_rgba(0,240,255,0.6)] animate-glow-pulse" />
                
                <div className="glass-card p-4 sm:p-6 rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-orbitron text-base sm:text-lg font-bold text-primary">{exp.year}</span>
                  </div>
                  
                  <h3 className="font-orbitron text-lg sm:text-xl font-semibold mb-1 text-foreground">
                    {exp.title}
                  </h3>
                  
                  <p className="font-space text-sm sm:text-base text-secondary font-medium mb-2 sm:mb-3">
                    {exp.organization}
                  </p>
                  
                  <p className="font-space text-sm sm:text-base text-foreground/70">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
