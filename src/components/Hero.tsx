import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/zanzibar-ocean-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Welcome to <span className="bg-gradient-hero bg-clip-text text-transparent">STAY EASY</span>
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          Accommodation, Transport, Tourism
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          Group Activities & Events in Tanzania and East Africa
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Button size="lg" className="text-lg px-8 shadow-elevated">
            Explore Services
            <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="secondary" className="text-lg px-8 shadow-elevated">
            Contact Us
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
