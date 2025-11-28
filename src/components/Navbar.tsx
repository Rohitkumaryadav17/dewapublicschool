import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dewa Public School
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("academics")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Academics
            </button>
            <button
              onClick={() => scrollToSection("facilities")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Facilities
            </button>
            <button
              onClick={() => scrollToSection("admissions")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Admissions
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("events-news")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Events & News
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("academics")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Academics
            </button>
            <button
              onClick={() => scrollToSection("facilities")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Facilities
            </button>
            <button
              onClick={() => scrollToSection("admissions")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Admissions
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("events-news")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Events & News
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
