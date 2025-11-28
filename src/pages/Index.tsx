import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Academics from "@/components/Academics";
import Facilities from "@/components/Facilities";
import Admissions from "@/components/Admissions";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Facilities />
      <Admissions />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
