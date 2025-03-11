
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    }
  };

  const navLinks = [
    { text: "Home", action: () => scrollToSection("home") },
    { text: "About", action: () => scrollToSection("about") },
    { text: "Services", action: () => scrollToSection("services") },
    { text: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container-base flex justify-between items-center">
        <a
          href="/"
          className="transition-transform duration-300 hover:scale-105"
        >
          <div className="flex items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-primary flex items-center justify-center text-primary-foreground mr-2 self-center translate-y-1">
              {/* Dot resting at the same level as text */}
            </div>
            <div className="text-primary">
              <span className="text-2xl tracking-tight" style={{fontFamily: 'Verdana, sans-serif'}}>SIKHOYA </span>
              <span className="text-xl text-muted-foreground" style={{fontFamily: 'Verdana, sans-serif'}}>&Co</span>
            </div>
          </div>
        </a>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={link.action}
              className="relative font-medium transition-colors duration-300 text-muted-foreground hover:text-primary"
            >
              {link.text}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-primary transition-colors duration-200 hover:text-muted-foreground"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-10">
              <a
                href="/"
                className="transition-transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary flex items-center justify-center text-primary-foreground mr-2 self-center translate-y-1">
                    {/* Dot resting at the same level as text */}
                  </div>
                  <div className="text-primary">
                    <span className="text-2xl tracking-tight" style={{fontFamily: 'Verdana, sans-serif'}}>SIKHOYA </span>
                    <span className="text-xl text-muted-foreground" style={{fontFamily: 'Verdana, sans-serif'}}>&Co</span>
                  </div>
                </div>
              </a>
              <button
                onClick={toggleMenu}
                className="text-primary hover:text-muted-foreground transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 text-lg mb-8">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={link.action}
                  className="py-2 transition-colors duration-200 text-muted-foreground hover:text-primary text-left"
                >
                  {link.text}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
