import { Pill, Stethoscope, Leaf, Dumbbell, Heart, Users, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: Pill,
      title: 'Prescription Medicines',
      description: 'Licensed dispensing of prescription medications with professional consultation and guidance.',
      features: ['Doctor Prescriptions', 'Medication Counseling', 'Drug Interactions Check', 'Refill Reminders'],
      color: 'primary'
    },
    {
      icon: Stethoscope,
      title: 'Over-the-Counter',
      description: 'Wide range of OTC medications for common health conditions and everyday wellness needs.',
      features: ['Pain Relief', 'Cold & Flu', 'Digestive Health', 'First Aid Supplies'],
      color: 'ocean'
    },
    {
      icon: Leaf,
      title: 'Natural Medicines',
      description: 'Carefully curated selection of natural and herbal remedies for holistic health approaches.',
      features: ['Herbal Supplements', 'Essential Oils', 'Organic Products', 'Traditional Remedies'],
      color: 'golden'
    },
    {
      icon: Dumbbell,
      title: 'Fitness & Sports',
      description: 'High-quality protein powders, gym supplements, and sports nutrition for active lifestyles.',
      features: ['Protein Powders', 'Pre-Workout', 'Recovery Supplements', 'Amino Acids'],
      color: 'accent'
    },
    {
      icon: Heart,
      title: 'Wellness & Vitamins',
      description: 'Comprehensive vitamin and mineral supplements to support your overall health and wellbeing.',
      features: ['Daily Vitamins', 'Immune Support', 'Energy Boosters', 'Specialty Formulas'],
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Health Consultation',
      description: 'Professional healthcare advice and consultation services from our experienced pharmacists.',
      features: ['Health Screenings', 'Medication Review', 'Wellness Planning', 'Travel Health'],
      color: 'ocean'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'ocean':
        return 'text-ocean bg-ocean/10';
      case 'golden':
        return 'text-golden-dark bg-golden/10';
      case 'accent':
        return 'text-accent bg-accent/10';
      default:
        return 'text-primary bg-primary/10';
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From prescription medications to natural wellness products, we provide everything you need 
            for optimal health in the beautiful setting of Koh Phangan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="shadow-tropical hover:shadow-ocean transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl ${getColorClasses(service.color)} flex items-center justify-center mb-4 palm-sway`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Location & Hours */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-tropical bg-primary text-primary-foreground">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-8 w-8 text-golden" />
                <CardTitle className="text-2xl">Visit Our Store</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-golden mb-2">Location</h4>
                <p>Sri Thanu Beach Road<br />Koh Phangan, Surat Thani 84280<br />Thailand</p>
              </div>
              <div>
                <h4 className="font-semibold text-golden mb-2">Easy to Find</h4>
                <p>Located in the heart of Sri Thanu, just steps from the beach and main accommodation areas.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-golden bg-yellow-400 text-green-800">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Opening Hours</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Monday - Sunday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Public Holidays</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium">Emergency? Call us anytime for urgent medication needs.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;