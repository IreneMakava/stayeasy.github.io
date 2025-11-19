import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              STAY EASY
            </h3>
            <p className="text-muted-foreground mb-4">
              Your trusted partner for tourism, accommodation, and transport across Tanzania and East Africa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#accommodation" className="text-muted-foreground hover:text-primary transition-colors">Accommodation</a></li>
              <li><a href="#transport" className="text-muted-foreground hover:text-primary transition-colors">Transport</a></li>
              <li><a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Safari Tours</li>
              <li className="text-muted-foreground">Beach Holidays</li>
              <li className="text-muted-foreground">Car Rental</li>
              <li className="text-muted-foreground">Airport Transfer</li>
              <li className="text-muted-foreground">Group Events</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Kinondoni, Dar es Salaam</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} />
                <a href="tel:+255779125938" className="hover:text-primary transition-colors">+255 779 125 938</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} />
                <a href="mailto:stayeasytz@gmail.com" className="hover:text-primary transition-colors">stayeasytz@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Stay Easy Tanzania. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
