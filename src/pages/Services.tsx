
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Briefcase, Building, DollarSign, Handshake, Users, Layers, LineChart } from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Main service offerings
  const mainServices = [
    {
      icon: <Briefcase size={28} />,
      title: "Private Equity Secondaries",
      description: "Comprehensive advisory for LP interests and direct secondary transactions in the private equity space. We help sellers optimize value and buyers identify attractive opportunities in this complex market.",
      features: [
        "Fund interest transactions",
        "Direct portfolio sales",
        "GP-led restructurings",
        "Preferred equity solutions"
      ]
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Venture Capital Secondaries",
      description: "Specialized guidance for venture fund interests and direct startup portfolio transactions. We understand the unique challenges and opportunities in early-stage company valuations and transactions.",
      features: [
        "Venture fund interest transactions",
        "Direct startup portfolio sales",
        "Employee liquidity programs",
        "Continuation vehicles"
      ]
    },
    {
      icon: <Building size={28} />,
      title: "Real Assets Secondaries",
      description: "Expert advisory for infrastructure, real estate, and natural resources fund interests in the secondary market. Our specialized knowledge enables optimal transaction structures for these unique asset classes.",
      features: [
        "Infrastructure fund secondaries",
        "Real estate fund interests",
        "Natural resources portfolios",
        "Hybrid fund structures"
      ]
    }
  ];

  // Additional service offerings
  const additionalServices = [
    {
      icon: <DollarSign size={24} />,
      title: "Portfolio Valuation",
      description: "Sophisticated financial analysis and valuation of private market portfolios for secondary transactions."
    },
    {
      icon: <Handshake size={24} />,
      title: "Transaction Structuring",
      description: "Creative solutions for complex secondaries, including deferred consideration and earn-out structures."
    },
    {
      icon: <Layers size={24} />,
      title: "GP-led Solutions",
      description: "Advisory on continuation vehicles, tender offers, and other GP-initiated liquidity solutions."
    },
    {
      icon: <LineChart size={24} />,
      title: "Market Analysis",
      description: "Detailed insights on secondary market pricing, trends, and buyer preferences across asset classes."
    },
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-16 bg-secondary">
        <div className="container-base">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-accent text-accent-foreground py-1 px-4 rounded-full text-sm font-medium tracking-wide mb-4 animate-fade-in">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 animate-fade-up">
              Specialized Secondary Advisory Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up animation-delay-100">
              Equity Vista offers bespoke advisory services for complex secondary transactions
              across private equity, venture capital, and real assets, delivering optimal outcomes
              through market expertise and analytical rigor.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container-base">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={`space-y-6 animate-fade-${index % 2 === 0 ? "right" : "left"}`}>
                  <div className="mb-5 text-primary bg-accent/30 w-14 h-14 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h2 className="font-display text-3xl font-semibold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 pt-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 text-primary">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`relative h-[350px] overflow-hidden rounded-lg animate-fade-${index % 2 === 0 ? "left" : "right"}`}>
                  <div className="absolute inset-0 bg-muted/30">
                    <img 
                      src={`https://images.unsplash.com/photo-160925895917-afdab82752f${index + 1}?auto=format&fit=crop&q=80&w=1000`} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary">
        <div className="container-base">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block bg-accent text-accent-foreground py-1 px-4 rounded-full text-sm font-medium tracking-wide mb-4 animate-fade-in">
              Additional Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6 animate-fade-up">
              Complementary Advisory Solutions
            </h2>
            <p className="text-muted-foreground animate-fade-up animation-delay-100">
              Beyond our core secondary transaction advisory, we offer specialized services 
              to address the full spectrum of client needs in the private capital markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg p-8 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-5 text-primary bg-accent/30 w-12 h-12 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container-base">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block bg-accent text-accent-foreground py-1 px-4 rounded-full text-sm font-medium tracking-wide mb-4 animate-fade-in">
              Our Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6 animate-fade-up">
              How We Approach Secondary Transactions
            </h2>
            <p className="text-muted-foreground animate-fade-up animation-delay-100">
              Our systematic methodology ensures thorough analysis, strategic planning, and
              optimal execution for every secondary transaction.
            </p>
          </div>

          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px"></div>
            
            <div className="space-y-12 relative">
              {[
                {
                  number: "01",
                  title: "Initial Consultation & Assessment",
                  description: "We begin with a comprehensive consultation to understand your objectives, constraints, and timeline for the secondary transaction."
                },
                {
                  number: "02",
                  title: "Portfolio Analysis & Valuation",
                  description: "Our team conducts rigorous financial analysis and valuation of the assets, employing sophisticated methodologies tailored to each asset class."
                },
                {
                  number: "03",
                  title: "Strategy Development",
                  description: "Based on our analysis and market knowledge, we develop a customized transaction strategy designed to optimize outcomes for your specific situation."
                },
                {
                  number: "04",
                  title: "Marketing & Execution",
                  description: "We manage the entire transaction process, from preparation of marketing materials to negotiations with potential counterparties and final execution."
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className={`flex items-center ${index % 2 === 0 ? "md:justify-end" : ""} md:w-1/2 relative`}>
                      <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-medium text-sm z-10 md:absolute md:right-0 md:translate-x-1/2">
                        {step.number}
                      </div>
                      <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:hidden"} animate-fade-right`}>
                        <h3 className="font-display text-xl font-medium mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    <div className={`pl-12 md:pl-0 ${index % 2 !== 0 ? "md:pl-12" : "hidden md:block"} md:w-1/2 animate-fade-left`}>
                      <h3 className="font-display text-xl font-medium mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-base">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6 animate-fade-up">
              Ready to Explore Your Secondary Transaction Options?
            </h2>
            <p className="text-primary-foreground/80 mb-8 animate-fade-up animation-delay-100">
              Contact us today for a confidential consultation to discuss your specific needs
              and how our specialized advisory services can help you achieve optimal outcomes.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 font-medium animate-fade-up animation-delay-200"
            >
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
