import { BookOpen, GraduationCap, Brain, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const Academics = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Primary Education",
      description: "Classes 1-5: Building strong foundations in core subjects",
      highlights: ["English", "Mathematics", "Science", "Social Studies", "Hindi"],
    },
    {
      icon: Brain,
      title: "Middle School",
      description: "Classes 6-8: Developing critical thinking and analytical skills",
      highlights: ["Advanced Sciences", "Languages", "Computer Science", "Arts"],
    },
    {
      icon: GraduationCap,
      title: "Secondary Education",
      description: "Classes 9-10: Preparing for board examinations",
      highlights: ["CBSE Curriculum", "Career Guidance", "Practical Learning"],
    },
    {
      icon: Globe,
      title: "Senior Secondary",
      description: "Classes 11-12: Specialization and college preparation",
      highlights: ["Science", "Commerce", "Arts Streams", "Competitive Exam Prep"],
    },
  ];

  return (
    <section id="academics" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Academic Programs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive curriculum designed to foster academic excellence and personal growth
            at every stage of learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <program.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <div className="space-y-2">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;
