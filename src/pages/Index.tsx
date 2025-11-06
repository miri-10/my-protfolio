import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { WelcomeModal } from "@/components/WelcomeModal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WelcomeModal />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
