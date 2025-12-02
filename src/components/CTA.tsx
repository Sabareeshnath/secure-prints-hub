import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <div className="bg-gradient-to-br from-primary to-navy-light rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Book your appointment today and experience our professional, 
                efficient fingerprinting services. Same-day results available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-6 shadow-gold"
                >
                  Book Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 text-lg">Call Us</h3>
                    <p className="text-white/70">Available during business hours</p>
                    <p className="text-accent font-semibold mt-1">1-800-XXX-XXXX</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 text-lg">Visit Us</h3>
                    <p className="text-white/70">Multiple locations with free parking</p>
                    <p className="text-accent font-semibold mt-1">View Locations</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 text-lg">Hours</h3>
                    <p className="text-white/70">Extended hours including evenings & weekends</p>
                    <p className="text-accent font-semibold mt-1">Mon-Sat: 9 AM - 8 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
