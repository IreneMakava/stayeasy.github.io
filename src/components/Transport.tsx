import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Car, Users, Shield, Clock } from "lucide-react";
import safariVehicle from "@/assets/safari-vehicle.jpg";
import toyotaAlphard from "@/assets/toyota-alphard.jpg";
import toyotaRumion from "@/assets/toyota-rumion.jpg";
import toyotaRav4 from "@/assets/toyota-rav4.jpg";

const Transport = () => {
  const vehicles = [
    {
      type: "Toyota Alphard",
      capacity: "7 passengers",
      features: ["Luxury interior", "Executive comfort", "Airport transfer", "Business travel"],
      priceUSD: "$50",
      priceTSH: "Tsh 100,000",
      image: toyotaAlphard,
    },
    {
      type: "Toyota Rumion",
      capacity: "5 passengers",
      features: ["Family friendly", "City tours", "Spacious cabin", "Fuel efficient"],
      priceUSD: "$30",
      priceTSH: "Tsh 60,000",
      image: toyotaRumion,
    },
    {
      type: "Toyota RAV4",
      capacity: "5 passengers",
      features: ["Adventure ready", "Off-road capable", "Safari tours", "All-terrain"],
      priceUSD: "$70",
      priceTSH: "Tsh 140,000",
      image: toyotaRav4,
    },
  ];

  const services = [
    {
      icon: Car,
      title: "Car Hire",
      description: "Self-drive or chauffeur-driven vehicles",
    },
    {
      icon: Users,
      title: "Airport Transfer",
      description: "Reliable pick-up and drop-off services",
    },
    {
      icon: Shield,
      title: "Insured Vehicles",
      description: "All vehicles fully insured and maintained",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
    },
  ];

  return (
    <section id="transport" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Transportation</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Safe, reliable, and comfortable transport across Tanzania and East Africa
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16 shadow-elevated">
          <img 
            src={safariVehicle}
            alt="Safari Vehicle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-4xl font-bold mb-4">Experience Africa in Comfort</h3>
              <Button size="lg" className="shadow-elevated">
                View Fleet
              </Button>
            </div>
          </div>
        </div>

        {/* Service Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Vehicle Options */}
        <div className="grid md:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-elevated transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.type}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <h3 className="text-2xl font-bold">{vehicle.type}</h3>
                <p className="text-muted-foreground flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {vehicle.capacity}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <div className="text-3xl font-bold text-primary">{vehicle.priceUSD}/day</div>
                  <div className="text-lg text-muted-foreground">{vehicle.priceTSH}/day</div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full shadow-soft">
                  Request Quote
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transport;
