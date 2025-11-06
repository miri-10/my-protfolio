import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(`#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="font-orbitron text-xl font-bold gradient-text hover:text-glow-primary transition-all"
          >
            MP
          </button>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className={`font-space text-sm transition-all duration-300 ${
                  activeSection === item.href
                    ? "text-primary border-b-2 border-primary rounded-none"
                    : "text-foreground/70 hover:!text-primary hover:!bg-primary/10 hover:text-glow-primary"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary"
            onClick={() => {
              const mobileMenu = document.getElementById("mobile-menu");
              mobileMenu?.classList.toggle("hidden");
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => {
                  scrollToSection(item.href);
                  document.getElementById("mobile-menu")?.classList.add("hidden");
                }}
                className={`font-space justify-start ${
                  activeSection === item.href
                    ? "text-primary bg-primary/10"
                    : "text-foreground/70 hover:!text-primary hover:!bg-primary/10"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
