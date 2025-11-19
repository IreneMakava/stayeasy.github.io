import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroImage from "@/assets/hero-tanzania.jpg";
import safariVehicle from "@/assets/safari-vehicle.jpg";
import zanzibarBeach from "@/assets/zanzibar-beach.jpg";
import accommodationLodge from "@/assets/accommodation-lodge.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, title: "Mount Kilimanjaro", type: "Landscape" },
    { src: safariVehicle, title: "Safari Experience", type: "Safari" },
    { src: zanzibarBeach, title: "Zanzibar Beach", type: "Beach" },
    { src: accommodationLodge, title: "Luxury Lodge", type: "Accommodation" },
  ];

  const handleDownload = (imageSrc: string, title: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `stay-easy-${title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of stunning images and videos - all available for download
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <img 
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="text-white text-2xl font-bold mb-2">{image.title}</h3>
                <p className="text-white/80 mb-4">{image.type}</p>
                <Button 
                  variant="secondary" 
                  className="shadow-elevated"
                  onClick={() => handleDownload(image.src, image.title)}
                >
                  <Download className="mr-2" />
                  Download Image
                </Button>
              </div>
              <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                {image.type}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need high-resolution images or videos for marketing? Contact us for full media packages.
          </p>
          <Button size="lg" className="shadow-soft">
            Request Media Package
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
