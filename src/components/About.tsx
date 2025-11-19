import { Globe, Award, Users, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "East Africa Coverage",
      description: "Tourism services across Tanzania, Zanzibar, Kenya, Uganda, and South Africa",
    },
    {
      icon: Award,
      title: "Premium Experience",
      description: "High-quality accommodations and personalized tour packages",
    },
    {
      icon: Users,
      title: "Group Activities",
      description: "Team building events and customized group adventures",
    },
    {
      icon: Shield,
      title: "Trusted Service",
      description: "Reliable transportation and secure booking process",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">Stay Easy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the wonderful adventure of East Africa with ease. Stay Easy Tanzania is your solution 
            to get the value of your time and finances when experiencing the excitement you are looking for.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card p-8 rounded-xl shadow-soft">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <a href="tel:+255779125938" className="font-semibold hover:text-primary transition-colors">+255 779 125 938</a>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <a href="mailto:stayeasytz@gmail.com" className="font-semibold hover:text-primary transition-colors">stayeasytz@gmail.com</a>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">Website</p>
              <p className="font-semibold">www.stayeasy.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
