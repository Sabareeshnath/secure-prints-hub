import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 fade-in-up">
            <Shield className="h-8 w-8 text-accent" />
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">
              RCMP Accredited Service
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight fade-in-up stagger-1">
            Professional Fingerprinting Services
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed fade-in-up stagger-2">
            RCMP accredited digital fingerprinting for Immigration, Citizenship, 
            Employment, Visa Applications, and Government Security Clearance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 fade-in-up stagger-3">
            <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-6 shadow-gold">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6">
              View Services
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 fade-in-up stagger-4">
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="font-medium">Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="font-medium">Free Parking</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="font-medium">Evening & Weekend Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
