import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Users, Plane, Building, Shield, FileText } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Immigration & Citizenship",
    description: "Digital fingerprinting services for Canadian immigration and citizenship applications with electronic submission to RTID servers.",
  },
  {
    icon: Plane,
    title: "Visa & Border Crossings",
    description: "Fast and reliable fingerprinting for visa applications and border crossing clearances, including FBI summary checks.",
  },
  {
    icon: Building,
    title: "Employment Screening",
    description: "Comprehensive background checks and fingerprinting services for employment purposes with same-day results available.",
  },
  {
    icon: Shield,
    title: "Security Clearance",
    description: "Government security clearance fingerprinting services meeting all RCMP standards and requirements.",
  },
  {
    icon: Users,
    title: "Record Suspension",
    description: "Full service record suspension packages with complete documentation assistance and full refund guarantee.",
  },
  {
    icon: FileText,
    title: "Police Record Check",
    description: "Quick and efficient police record checks with same-day results and competitive pricing.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive fingerprinting and background check services for all your civilian needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift bg-card border-border/50 fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
