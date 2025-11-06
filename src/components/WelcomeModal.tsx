import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import welcomeBanner from "@/assets/welcome-banner.jpg";


export const WelcomeModal = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedPortfolio");
    if (!hasVisited) {
      setOpen(true);
    }
  }, []);

  const handleContinue = () => {
    localStorage.setItem("hasVisitedPortfolio", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl w-[95vw] sm:w-full p-0 overflow-hidden border-2 border-primary/30 bg-background/95 backdrop-blur-lg">
        <div className="relative">
          <img
            src={welcomeBanner}
            alt="AI Technology Banner"
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        </div>
        <div className="p-6 sm:p-8 space-y-6">
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl font-orbitron text-center gradient-text">
              Welcome to an AI Enthusiast Portfolio
            </DialogTitle>
            <DialogDescription className="text-center text-sm sm:text-base mt-4">
              Explore my journey in artificial intelligence, machine learning, and data systems.
              Discover projects, skills, and the vision driving the future of AI development.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Button
              onClick={handleContinue}
              size="lg"
              className="w-full sm:w-auto sm:min-w-[200px] font-semibold bg-primary/10 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-orbitron"
            >
              CONTINUE
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};