import { Award, Users, Clock, Heart, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const About = () => {
  const team = [
    {
      name: 'Dr. Siriporn Thanakit',
      role: 'Chief Pharmacist',
      credentials: 'PharmD, RPh',
      experience: '15+ years',
      specialties: ['Clinical Pharmacy', 'Drug Interactions', 'Patient Counseling']
    },
    {
      name: 'Narong Suksai',
      role: 'Senior Pharmacist',
      credentials: 'BPharm, RPh',
      experience: '10+ years',
      specialties: ['Natural Medicine', 'Wellness Consulting', 'Supplement Guidance']
    },
    {
      name: 'Ploy Rattanakit',
      role: 'Pharmacy Assistant',
      credentials: 'Pharmacy Tech Certified',
      experience: '5+ years',
      specialties: ['Customer Service', 'Inventory Management', 'Health Screenings']
    }
  ];

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '5000+' },
    { icon: Clock, label: 'Years Serving', value: '8+' },
    { icon: Award, label: 'Certified Products', value: '1500+' },
    { icon: Heart, label: 'Lives Improved', value: '10000+' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            About Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Your Health, Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Established as Koh Phangan's trusted healthcare partner, serving the Sri Thanu community 
            with dedication, expertise, and genuine care for over 8 years.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Tropica Pharmacy was born from a vision to bring world-class healthcare services to the 
                beautiful island of Koh Phangan. Founded in 2016, we recognized the need for a reliable, 
                professional pharmacy that could serve both the local Thai community and international visitors.
              </p>
              <p className="text-lg leading-relaxed">
                Located in the heart of Sri Thanu, we've grown from a small local pharmacy to a comprehensive 
                healthcare hub, offering everything from prescription medications to natural wellness products, 
                fitness supplements, and expert health consultations.
              </p>
              <p className="text-lg leading-relaxed">
                Our commitment goes beyond just dispensing medications. We believe in building relationships, 
                understanding our customers' unique needs, and providing personalized healthcare solutions 
                that improve lives and support the vibrant community we serve.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label} 
                    className="text-center p-4 rounded-lg bg-primary/5 float-gentle"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="shadow-tropical bg-gradient-to-br from-primary to-ocean text-white p-8">
              <CardContent className="space-y-6 p-0">
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-golden">Our Mission</h4>
                  <p className="text-white/90 text-lg">
                    To provide accessible, reliable, and personalized healthcare services while promoting 
                    wellness and improving the quality of life for everyone in our community.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-golden">Our Values</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-golden rounded-full"></div>
                      Professional Excellence & Expertise
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-golden rounded-full"></div>
                      Personalized Customer Care
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-golden rounded-full"></div>
                      Community Health & Wellness
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-golden rounded-full"></div>
                      Quality & Safety First
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Meet Our Expert Team
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced pharmacists and healthcare professionals are dedicated to your health and wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="shadow-tropical hover:shadow-ocean transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-ocean/20 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-primary">{member.name}</h4>
                    <p className="text-primary/80 font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.credentials}</p>
                  </div>

                  <Badge variant="outline" className="text-golden border-golden/30 bg-golden/10">
                    {member.experience} Experience
                  </Badge>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">Specialties:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty) => (
                        <Badge 
                          key={specialty} 
                          variant="secondary" 
                          className="text-xs bg-primary/10 text-primary"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-golden/10 to-ocean/10 border-golden/20 shadow-golden">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Ready to Experience Quality Healthcare?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Visit Tropica Pharmacy today and discover why we're Koh Phangan's most trusted healthcare partner. 
              Our team is ready to help you with all your health and wellness needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="h-5 w-5" />
                <span>Sri Thanu Beach Road, Koh Phangan</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Phone className="h-5 w-5" />
                <span>+66 (0)77 xxx-xxx</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-ocean hover:from-primary-light hover:to-ocean-light text-white shadow-tropical"
              >
                Visit Us Today
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Call Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;