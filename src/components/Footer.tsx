
import { ChevronRight, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container-base">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-white flex items-center justify-center text-primary mr-2 self-center translate-y-1">
                {/* Dot resting at the same level as text */}
              </div>
              <div className="text-white">
                <span className="text-2xl tracking-tight" style={{fontFamily: 'Verdana, sans-serif'}}>SIKHOYA </span>
                <span className="text-xl text-primary-foreground/80" style={{fontFamily: 'Verdana, sans-serif'}}>&Co</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-medium tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 flex items-center group"
                >
                  <ChevronRight size={16} className="mr-1 transition-transform duration-200 group-hover:translate-x-1" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 flex items-center group"
                >
                  <ChevronRight size={16} className="mr-1 transition-transform duration-200 group-hover:translate-x-1" />
                  <span>About</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 flex items-center group"
                >
                  <ChevronRight size={16} className="mr-1 transition-transform duration-200 group-hover:translate-x-1" />
                  <span>Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 flex items-center group"
                >
                  <ChevronRight size={16} className="mr-1 transition-transform duration-200 group-hover:translate-x-1" />
                  <span>Contact</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-medium tracking-tight">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail 
                  size={18} 
                  className="mr-3 mt-1 text-primary-foreground/80" 
                />
                <a 
                  href="mailto:contact@sikhoya.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 hover:underline"
                >
                  contact@sikhoya.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-sm text-primary-foreground/60 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Sikhoya & Co. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <button onClick={() => scrollToSection("home")} className="hover:text-primary-foreground transition-colors duration-200 mr-6">
              Privacy Policy
            </button>
            <button onClick={() => scrollToSection("home")} className="hover:text-primary-foreground transition-colors duration-200">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
