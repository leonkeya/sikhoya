
import { useEffect } from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { ArrowRight, BarChart3, Briefcase, Building, DollarSign, HandshakeIcon, Users } from "lucide-react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Briefcase size={24} />,
      title: "LP-led Secondaries",
      description: "Advisory on secondary transactions for private equity, venture capital and real assets fund interests.",
      delay: 100
    },
    {
      icon: <BarChart3 size={24} />,
      title: "GP-led Secondaries",
      description: "Specialized guidance for continuation vehicles, preferred equity, tender offers, fund restructurings and other GP-initiated liquidity solutions.",
      delay: 200
    },
    {
      icon: <Building size={24} />,
      title: "Single and Multi-Asset Transactions",
      description: "Expert advisory on single and multi-asset transactions across various structures.",
      delay: 300
    },
    {
      icon: <Users size={24} />,
      title: "Sponsor-less Secondaries",
      description: "Advisory on minority secondary stakes in founder-owned, family-owned companies or companies backed by independent investors.",
      delay: 400
    }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-secondary">
        <div className="container-base">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block bg-accent text-accent-foreground py-1 px-4 rounded-full text-sm font-medium tracking-wide mb-4 animate-fade-in">
              Our Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6 animate-fade-up">
              Specialized Secondary Advisory Services
            </h2>
            <p className="text-muted-foreground animate-fade-up animation-delay-100">
              We provide tailored solutions for, sometimes complex, secondary transactions across private market assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section id="about" className="py-20">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1 animate-fade-right">
              <span className="inline-block bg-accent text-accent-foreground py-1 px-4 rounded-full text-sm font-medium tracking-wide mb-2">
                About Sikhoya & Co
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                Morten Kirkegaard Pedersen
              </h2>
              <h3 className="font-display text-xl text-muted-foreground">
                Managing Director
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Sikhoya & Co's Managing Director, Morten K. Pedersen, brings 25 years of experience in private market investments and advisory with a focus on secondary transactions for the last 15 years. Morten has worked on transactions across Europe, US, Asia, Middle East, and Africa, from locations including Copenhagen, Luxembourg, Abu Dhabi, Dubai, and Zug.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Prior to establishing Sikhoya & Co, Morten worked for large institutional investors including Montana Capital Partners, Abu Dhabi Investment Company and the European Investment Fund.
              </p>
            </div>

            <div className="relative h-[320px] md:h-[370px] overflow-hidden rounded-lg order-1 lg:order-2 animate-fade-left">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/dfd3cb1b-5f1d-4cb2-8800-f583598870bb.png" 
                  alt="Morten Kirkegaard Pedersen, Managing Director" 
                  className="w-auto h-[60%] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-primary text-primary-foreground">
        <div className="container-base">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6 animate-fade-up">
              Ready to Navigate the Secondary Market?
            </h2>
            <p className="text-primary-foreground/80 mb-8 animate-fade-up animation-delay-100">
              Contact us today for a confidential consultation about your secondary transaction needs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
