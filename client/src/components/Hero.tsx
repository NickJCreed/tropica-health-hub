import { ArrowRight, Shield, Heart, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-pharmacy.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-ocean/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                Your Trusted
                <span className="block text-golden wave-motion">Health Partner</span>
                in Paradise
              </h2>
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl">
                Tropica Pharmacy in Sri Thanu, Koh Phangan delivers premium healthcare services, 
                dispensing prescription, over-the-counter, and natural medicines in tropical paradise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-golden to-golden-light hover:from-golden-dark hover:to-golden text-primary shadow-golden text-lg px-8"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 hover:border-primary"
              >
                Find Us
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-tropical float-gentle">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Licensed Pharmacy</h3>
                  <p className="text-muted-foreground">
                    Fully licensed and regulated pharmacy ensuring safe, quality healthcare for Koh Phangan community.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-ocean float-gentle" style={{animationDelay: '1s'}}>
              <div className="flex items-start space-x-4">
                <div className="bg-ocean/10 p-3 rounded-lg">
                  <Heart className="h-8 w-8 text-ocean" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Wellness Focus</h3>
                  <p className="text-muted-foreground">
                    Comprehensive health and wellness solutions including vitamins, supplements, and natural remedies.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-golden float-gentle" style={{animationDelay: '2s'}}>
              <div className="flex items-start space-x-4">
                <div className="bg-golden/10 p-3 rounded-lg">
                  <Leaf className="h-8 w-8 text-golden-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Natural Medicine</h3>
                  <p className="text-muted-foreground">
                    Curated selection of natural and organic health products for holistic wellness.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 fill-background wave-motion" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;