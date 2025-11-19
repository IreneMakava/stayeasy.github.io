import { Bed, Car, Map, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Bed,
      title: "Accommodation",
      description: "Luxury lodges, beach resorts, and city hotels",
      details: [
        "Tanzania & Zanzibar",
        "Kenya & Uganda",
        "South Africa",
        "All-inclusive packages",
      ],
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Reliable transport services across East Africa",
      details: [
        "Airport pick & drop",
        "Car hire services",
        "Safari vehicles",
        "Group transportation",
      ],
    },
    {
      icon: Map,
      title: "Tourism & Tours",
      description: "Personalized tour experiences",
      details: [
        "Safari expeditions",
        "Beach getaways",
        "Cultural tours",
        "Adventure packages",
      ],
    },
    {
      icon: Users,
      title: "Group Activities",
      description: "Team building and group events",
      details: [
        "Corporate events",
        "Team building",
        "Group exploration",
        "Custom itineraries",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete tourism solutions for your East African adventure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-2"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
