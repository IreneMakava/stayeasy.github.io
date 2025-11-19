import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mountain, Users, Camera, Sunrise } from "lucide-react";
import hikingKilimanjaro from "@/assets/hiking-kilimanjaro.jpg";
import hikingNgorongoro from "@/assets/hiking-ngorongoro.jpg";

const Hiking = () => {
  const hikingExperiences = [
    {
      title: "Mount Kilimanjaro Trek",
      description: "Conquer Africa's highest peak with our expert guides. Multiple routes available for all experience levels.",
      image: hikingKilimanjaro,
      duration: "5-9 days",
      difficulty: "Moderate to Challenging",
    },
    {
      title: "Ngorongoro Crater Walks",
      description: "Guided nature walks through stunning landscapes with opportunities to see wildlife up close.",
      image: hikingNgorongoro,
      duration: "Half day to Full day",
      difficulty: "Easy to Moderate",
    },
  ];

  const features = [
    {
      icon: Mountain,
      title: "Expert Guides",
      description: "Certified mountain guides with years of experience",
    },
    {
      icon: Users,
      title: "Group & Private",
      description: "Join a group or book a private hiking adventure",
    },
    {
      icon: Camera,
      title: "Photo Opportunities",
      description: "Capture stunning landscapes and memorable moments",
    },
    {
      icon: Sunrise,
      title: "Sunrise Treks",
      description: "Experience breathtaking sunrises from mountain peaks",
    },
  ];

  return (
    <section id="hiking" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hiking & <span className="bg-gradient-hero bg-clip-text text-transparent">Trekking</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience Tanzania's majestic mountains and stunning landscapes with our professional hiking expeditions
          </p>
        </div>

        {/* Hiking Experiences */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {hikingExperiences.map((experience, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-elevated transition-all duration-300">
              <div className="h-80 overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                  <span className="font-medium">Duration: {experience.duration}</span>
                  <span className="font-medium">Level: {experience.difficulty}</span>
                </div>
                <p className="text-muted-foreground">{experience.description}</p>
              </CardHeader>
              <CardContent>
                <Button className="w-full shadow-soft">
                  Book Trek
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hiking;