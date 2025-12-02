import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">Fingerprints Plus</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              RCMP accredited fingerprinting services for all your civilian needs. 
              Professional, reliable, and efficient.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Locations</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Immigration</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Employment</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Visa Applications</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Record Suspension</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} Fingerprints Plus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
