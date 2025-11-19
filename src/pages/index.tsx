import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Accommodation from "@/components/Accomodation";
import Transport from "@/components/Transport";
import Hiking from "@/components/Hiking";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Accommodation />
      <Transport />
      <Hiking />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
