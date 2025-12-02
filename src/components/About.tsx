import { Badge } from "@/components/ui/badge";
import { Award, Clock, DollarSign, RefreshCw } from "lucide-react";
import accreditationBadge from "@/assets/accreditation-badge.png";

const features = [
  {
    icon: Award,
    title: "RCMP Accredited",
    description: "Officially accredited to submit digital fingerprints to RTID servers electronically",
  },
  {
    icon: RefreshCw,
    title: "One Year Free Repeat",
    description: "Free repeat fingerprinting services within one year of your first paid service",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Open late evenings and weekends so you don't have to take time off work",
  },
  {
    icon: DollarSign,
    title: "Best Prices",
    description: "One of the lowest prices in the country with full refund guarantee on selected services",
  },
];

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
              About Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Welcome to Fingerprints Plus
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
              <p className="leading-relaxed">
                We are officially accredited by the RCMP to submit fingerprints for civilian 
                purposes such as Immigration, Citizenship, Visa/Border Crossings, Employment, 
                Government Security Clearance and similar needs.
              </p>
              <p className="leading-relaxed">
                We submit digital fingerprints to RTID servers electronically. RCMP verifies 
                the submitted fingerprints and biometric information with its National Repository 
                of Criminal Records and issues the certification.
              </p>
              <p className="leading-relaxed">
                We also offer special packages that include affordable courier services for 
                sending your fingerprints to FBI for Summary Checks. Apart from fingerprinting, 
                we provide Police Record Checks with same-day results.
              </p>
            </div>
          </div>
          
          <div className="relative fade-in-up stagger-2">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative bg-card border border-border/50 rounded-2xl p-8 shadow-elegant">
              <img 
                src={accreditationBadge} 
                alt="RCMP Accreditation" 
                className="w-32 h-32 mx-auto mb-6"
              />
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 p-4 rounded-lg bg-secondary/30 hover-lift"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
