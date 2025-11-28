import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Dewa Public School", "Khajurgaon, Barabanki", "Uttar Pradesh, India"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 XXXXX XXXXX", "+91 XXXXX XXXXX"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@dewapublicschool.edu.in", "admissions@dewapublicschool.edu.in"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Saturday", "8:00 AM - 4:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us and we'll respond as soon as
            possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center">
                  <info.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 md:p-12 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Schedule a School Visit
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Experience our campus firsthand. Schedule a visit to see our facilities, meet our
              faculty, and learn more about our programs.
            </p>
            <p className="text-lg font-semibold">
              Call us to book your appointment today!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
