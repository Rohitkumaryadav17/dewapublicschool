import { Award, Users, Target, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to academic and personal excellence in all endeavors",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive and inclusive learning environment",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing modern teaching methods and technology",
    },
    {
      icon: Heart,
      title: "Character",
      description: "Developing strong moral values and ethical leadership",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            About Our School
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dewa Public School, located in Khajurgaon, Barabanki, is dedicated to providing
            exceptional education that nurtures young minds and prepares students for a
            successful future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-card border-primary/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide a nurturing and stimulating environment where students can develop
                their full potential academically, socially, and emotionally. We strive to
                instill values of integrity, respect, and responsibility while fostering a
                love for lifelong learning.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading educational institution that empowers students to become
                confident, creative, and compassionate individuals who contribute positively
                to society and excel in an ever-changing global landscape.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
