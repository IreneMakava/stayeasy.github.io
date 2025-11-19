import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+255 779 125 938",
      link: "tel:+255779125938",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "stayeasytz@gmail.com",
      link: "mailto:stayeasytz@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Kinondoni, Dar es Salaam",
      link: "#",
    },
    {
      icon: Clock,
      title: "Hours",
      detail: "Mon-Sat: 8AM - 6PM",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="bg-gradient-hero bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your East African adventure? Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elevated">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input type="tel" placeholder="+255 123 456 789" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Service Interest</label>
                  <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
                    <option>Accommodation</option>
                    <option>Transportation</option>
                    <option>Tourism & Tours</option>
                    <option>Group Activities</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your travel plans..." 
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full shadow-soft">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                  <p className="text-muted-foreground">{info.detail}</p>
                </div>
              </a>
            ))}

            <div className="bg-gradient-hero p-8 rounded-xl text-white shadow-elevated">
              <h3 className="text-2xl font-bold mb-4">Why Choose Stay Easy?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2" />
                  <span>15+ years of experience in East African tourism</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2" />
                  <span>Licensed and insured transportation fleet</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2" />
                  <span>24/7 customer support and emergency assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2" />
                  <span>Competitive rates with no hidden fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
