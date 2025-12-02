import { Calendar, FileCheck, Send, Award } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Book Appointment",
    description: "Schedule your visit at your convenience during our extended hours including evenings and weekends.",
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Digital Scanning",
    description: "Our trained professionals capture your fingerprints using advanced digital scanning technology.",
  },
  {
    icon: Send,
    number: "03",
    title: "Electronic Submission",
    description: "We submit your fingerprints electronically to RTID servers for RCMP verification.",
  },
  {
    icon: Award,
    number: "04",
    title: "Receive Certification",
    description: "RCMP verifies your information and issues official certification for your purposes.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-navy-light text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-white/80">
            Our streamlined process makes getting your fingerprints certified quick and hassle-free
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover-lift h-full">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-6xl font-bold text-accent/30 leading-none">
                    {step.number}
                  </span>
                  <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-0.5 bg-accent/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
