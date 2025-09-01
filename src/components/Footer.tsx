import { MapPin, Phone, Clock, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-primary to-primary-light text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/1afce27f-a41e-44e4-bf3b-e193dda17b46.png" 
                alt="Tropica Pharmacy Logo" 
                className="h-12 w-12 palm-sway"
              />
              <div>
                <h3 className="text-2xl font-bold text-golden">Tropica Pharmacy</h3>
                <p className="text-white/80 text-sm">Your Health, Our Priority</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              Koh Phangan's trusted healthcare partner, delivering premium pharmaceutical services 
              and wellness solutions in tropical paradise.
            </p>
            <div className="flex space-x-3">
              <Button 
                size="sm" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-golden">Our Services</h4>
            <ul className="space-y-2 text-white/90">
              <li className="hover:text-golden transition-colors cursor-pointer">Prescription Medicines</li>
              <li className="hover:text-golden transition-colors cursor-pointer">Over-the-Counter Drugs</li>
              <li className="hover:text-golden transition-colors cursor-pointer">Natural & Herbal Medicine</li>
              <li className="hover:text-golden transition-colors cursor-pointer">Vitamins & Supplements</li>
              <li className="hover:text-golden transition-colors cursor-pointer">Fitness & Sports Nutrition</li>
              <li className="hover:text-golden transition-colors cursor-pointer">Health Consultations</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-golden">Contact Info</h4>
            <div className="space-y-3 text-white/90">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-golden mt-0.5 flex-shrink-0" />
                <div>
                  <p>Sri Thanu Beach Road</p>
                  <p>Koh Phangan, Surat Thani 84280</p>
                  <p>Thailand</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-golden flex-shrink-0" />
                <p>+66 (0)77 xxx-xxx</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-golden flex-shrink-0" />
                <p>info@tropicapharmacy.co.th</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-golden">Opening Hours</h4>
            <div className="space-y-3 text-white/90">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-golden flex-shrink-0" />
                <div>
                  <p className="font-medium">Daily: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-sm font-medium text-golden mb-1">Emergency Service</p>
                <p className="text-sm">Call us anytime for urgent medication needs</p>
              </div>
              <div className="bg-golden/20 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Walk-ins Welcome</p>
                <p className="text-sm">No appointment needed for consultations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © {currentYear} Tropica Pharmacy. All rights reserved. | Licensed Pharmacy - Thailand Ministry of Health
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-white/80">
              <a href="#" className="hover:text-golden transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-golden transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-golden transition-colors">Healthcare Disclaimer</a>
            </div>
          </div>
          
          <div className="mt-4 text-center text-white/60 text-xs">
            <p>Always consult with healthcare professionals before starting any new medication or supplement regimen.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;