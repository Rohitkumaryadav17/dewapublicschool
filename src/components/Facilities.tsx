import { Microscope, Trophy, Library, Laptop, Bus, HeartPulse } from "lucide-react";
import { Card } from "@/components/ui/card";
import iconAcademics from "@/assets/icon-academics.jpg";
import iconSports from "@/assets/icon-sports.jpg";
import iconLab from "@/assets/icon-lab.jpg";

const Facilities = () => {
  const facilities = [
    {
      icon: Microscope,
      image: iconLab,
      title: "Science Laboratories",
      description:
        "Well-equipped physics, chemistry, and biology labs for hands-on learning experiences",
    },
    {
      icon: Library,
      image: iconAcademics,
      title: "Library",
      description:
        "Extensive collection of books, journals, and digital resources for comprehensive learning",
    },
    {
      icon: Laptop,
      title: "Computer Lab",
      description:
        "Modern computer facilities with high-speed internet and latest software",
    },
    {
      icon: Trophy,
      image: iconSports,
      title: "Sports Complex",
      description:
        "Basketball, cricket, football grounds, and indoor games facilities for physical development",
    },
    {
      icon: Bus,
      title: "Transportation",
      description: "Safe and reliable bus service covering various routes in and around Barabanki",
    },
    {
      icon: HeartPulse,
      title: "Medical Room",
      description: "On-campus medical facilities with trained staff for student health and safety",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            World-Class Facilities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our state-of-the-art infrastructure provides students with the best environment
            for learning, growth, and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in overflow-hidden group border-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {facility.image ? (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center">
                    <facility.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
              )}
              <h3 className="text-xl font-semibold text-foreground mb-2">{facility.title}</h3>
              <p className="text-muted-foreground">{facility.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
