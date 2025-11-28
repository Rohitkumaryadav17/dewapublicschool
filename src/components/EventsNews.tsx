import { Calendar, Trophy, Megaphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface EventItem {
  title: string;
  description: string;
  date: Date;
  type: "event" | "achievement" | "announcement";
  status?: "upcoming" | "completed";
}

const eventsData: EventItem[] = [
  {
    title: "Annual Sports Day 2025",
    description: "Join us for a day filled with athletic competitions, team spirit, and exciting games. All students and parents are welcome to participate and cheer.",
    date: new Date(2025, 2, 15), // March 15, 2025
    type: "event",
    status: "upcoming"
  },
  {
    title: "Science Exhibition",
    description: "Students will showcase their innovative science projects and experiments. Parents and guardians are invited to witness young minds at work.",
    date: new Date(2025, 1, 28), // Feb 28, 2025
    type: "event",
    status: "upcoming"
  },
  {
    title: "Parent-Teacher Meeting",
    description: "Discuss your child's academic progress and development with teachers. Individual consultation slots will be provided.",
    date: new Date(2025, 1, 20), // Feb 20, 2025
    type: "event",
    status: "upcoming"
  },
  {
    title: "National Mathematics Olympiad Winners",
    description: "Congratulations to our students who won Gold and Silver medals at the National Mathematics Olympiad. Their dedication and hard work have made the school proud.",
    date: new Date(2024, 11, 10), // Dec 10, 2024
    type: "achievement"
  },
  {
    title: "Inter-School Debate Competition",
    description: "Our debate team secured first position in the District Level Inter-School Debate Competition, showcasing excellent oratory skills and critical thinking.",
    date: new Date(2024, 11, 5), // Dec 5, 2024
    type: "achievement"
  },
  {
    title: "100% Board Results Achievement",
    description: "Proud moment for Dewa Public School as we achieved 100% pass rate in Class 10 and 12 board examinations with 15 students scoring above 90%.",
    date: new Date(2024, 10, 20), // Nov 20, 2024
    type: "achievement"
  },
  {
    title: "Winter Break Schedule",
    description: "School will remain closed from December 24, 2024 to January 5, 2025 for winter holidays. Classes will resume on January 6, 2025.",
    date: new Date(2024, 11, 15), // Dec 15, 2024
    type: "announcement"
  },
  {
    title: "New Computer Lab Inauguration",
    description: "We are excited to announce the inauguration of our state-of-the-art computer lab with 50 new workstations and advanced learning software.",
    date: new Date(2025, 0, 10), // Jan 10, 2025
    type: "announcement"
  },
  {
    title: "Admission Open for Academic Year 2025-26",
    description: "Admissions are now open for classes Nursery to Class 11. Visit the school office or apply online through our website. Limited seats available.",
    date: new Date(2025, 0, 5), // Jan 5, 2025
    type: "announcement"
  }
];

const EventsNews = () => {
  const upcomingEvents = eventsData.filter(item => item.type === "event");
  const achievements = eventsData.filter(item => item.type === "achievement");
  const announcements = eventsData.filter(item => item.type === "announcement");

  const renderEventCard = (item: EventItem) => (
    <Card key={item.title} className="hover:shadow-lg transition-shadow duration-300 border-border">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl text-foreground mb-2">{item.title}</CardTitle>
            <CardDescription className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {format(item.date, "MMMM dd, yyyy")}
            </CardDescription>
          </div>
          {item.status === "upcoming" && (
            <Badge className="bg-primary text-primary-foreground">Upcoming</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
      </CardContent>
    </Card>
  );

  return (
    <section id="events-news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Events & News</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest happenings, upcoming events, and achievements at Dewa Public School
          </p>
        </div>

        <Tabs defaultValue="events" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Events
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="announcements" className="flex items-center gap-2">
              <Megaphone className="h-4 w-4" />
              Announcements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map(renderEventCard)}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map(renderEventCard)}
            </div>
          </TabsContent>

          <TabsContent value="announcements" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {announcements.map(renderEventCard)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EventsNews;
