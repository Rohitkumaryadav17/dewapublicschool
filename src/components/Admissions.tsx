import { Calendar, FileText, CheckCircle, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Admissions = () => {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Fill out the admission form with required documents",
    },
    {
      icon: Calendar,
      title: "Entrance Test",
      description: "Appear for the entrance examination (for applicable classes)",
    },
    {
      icon: CheckCircle,
      title: "Interview",
      description: "Parent-student interaction with school authorities",
    },
    {
      icon: Phone,
      title: "Confirmation",
      description: "Receive admission confirmation and complete formalities",
    },
  ];

  const requirements = [
    "Birth certificate",
    "Previous school transfer certificate",
    "Academic records of previous classes",
    "Passport size photographs",
    "Address proof",
    "Caste certificate (if applicable)",
  ];

  return (
    <section id="admissions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Admissions Open
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our vibrant learning community. Admissions are now open for all classes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">Required Documents</h3>
            <ul className="space-y-3">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Important Information</h3>
            <div className="space-y-4 mb-6">
              <div>
                <p className="font-semibold mb-1">Admission Period</p>
                <p className="opacity-90">January - March (for new academic year)</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Age Criteria</p>
                <p className="opacity-90">As per CBSE guidelines</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Session Starts</p>
                <p className="opacity-90">April</p>
              </div>
            </div>
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            >
              Contact for Admissions
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
