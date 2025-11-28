import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-school.jpg";

const Hero = () => {
  const scrollToAdmissions = () => {
    const element = document.getElementById("admissions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Welcome to Dewa Public School
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-4">
            Khajurgaon, Barabanki
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl">
            Nurturing minds, building futures. We are committed to providing quality education
            and holistic development for every student.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToAdmissions}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold group"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
