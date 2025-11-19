import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Users, MapPin } from "lucide-react";
import accommodationImage from "@/assets/accommodation-lodge.jpg";
import beachImage from "@/assets/zanzibar-beach.jpg";

const Accommodation = () => {
  const accommodations = [
    {
      image: beachImage,
      title: "Beach Experience",
      location: "Zanzibar",
      capacity: "2 Adults | 1 Child below 7",
      price: "$120",
      features: ["Ocean view", "Private beach", "Restaurant"],
    },
    {
      image: accommodationImage,
      title: "Safari Lodge",
      location: "Serengeti",
      capacity: "2 Adults | 2 Children below 7",
      price: "$150",
      features: ["Wildlife view", "Guided tours", "All meals"],
    },
    {
      image: beachImage,
      title: "City Experience",
      location: "Dar es Salaam",
      capacity: "4 Adults | 2 Children below 7",
      price: "$50",
      features: ["City center", "Modern amenities", "Breakfast"],
    },
  ];

  return (
    <section id="accommodation" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Accommodations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Luxury stays across Tanzania, Zanzibar, Kenya, Uganda & South Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-elevated transition-all duration-300">
              <CardHeader className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={accommodation.image}
                    alt={accommodation.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                    from {accommodation.price}/night
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{accommodation.title}</h3>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{accommodation.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm">{accommodation.capacity}</span>
                </div>
                <ul className="space-y-2">
                  {accommodation.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full shadow-soft">
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
