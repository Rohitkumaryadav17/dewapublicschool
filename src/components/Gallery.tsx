import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import gallery images
import events1 from "@/assets/gallery/events-1.jpg";
import events2 from "@/assets/gallery/events-2.jpg";
import campus1 from "@/assets/gallery/campus-1.jpg";
import campus2 from "@/assets/gallery/campus-2.jpg";
import sports1 from "@/assets/gallery/sports-1.jpg";
import sports2 from "@/assets/gallery/sports-2.jpg";
import achievements1 from "@/assets/gallery/achievements-1.jpg";
import achievements2 from "@/assets/gallery/achievements-2.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { src: events1, alt: "Annual Day Cultural Performance", category: "events" },
  { src: events2, alt: "Science Fair Exhibition", category: "events" },
  { src: campus1, alt: "School Campus Building", category: "campus" },
  { src: campus2, alt: "School Library", category: "campus" },
  { src: sports1, alt: "Cricket Match", category: "sports" },
  { src: sports2, alt: "Basketball Game", category: "sports" },
  { src: achievements1, alt: "Award Ceremony", category: "achievements" },
  { src: achievements2, alt: "Art Exhibition", category: "achievements" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Photo Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore moments captured from our vibrant school life, events, and achievements
          </p>
        </div>

        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={(value) => setSelectedCategory(value)}
        >
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-12">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="campus">Campus</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover-scale">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-primary-foreground font-semibold p-4 w-full">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto"
                    />
                    <div className="p-6 bg-background">
                      <h3 className="text-xl font-semibold text-foreground">
                        {image.alt}
                      </h3>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
