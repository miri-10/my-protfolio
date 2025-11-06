export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl">
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 gradient-text">
            ABOUT
          </h2>
          
          <div className="space-y-4 sm:space-y-6 font-space text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
            <p className="animate-fade-in-up">
              Hi, I'm <span className="text-primary font-semibold">Misan Pokharel</span>, an 18-year-old AI enthusiast driven by curiosity and creativity.
              I've decided to dedicate my path to becoming an <span className="text-primary font-semibold">AI developer</span>, and I'm currently following a structured roadmap to master everything from machine learning and neural networks to data systems and AI engineering.
            </p>
            
            <p className="animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              For me, AI isn't just technology — it's a <span className="text-secondary font-semibold">tool to redefine what's possible</span>.
              I love exploring how intelligence can be built, how data can be trusted, and how automation can empower people.
            </p>
            
            <p className="animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
              Every day, I'm <span className="text-accent font-semibold">learning, experimenting, and building</span> toward a future where humans and machines collaborate seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
