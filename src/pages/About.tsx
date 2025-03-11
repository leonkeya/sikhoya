
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Briefcase, Landmark, TrendingUp, Users } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const expertise = [
    {
      icon: <Briefcase size={24} />,
      title: "Industry Experience",
      description: "Deep experience in private equity and venture capital markets",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Transactional Expertise",
      description: "Specialized knowledge in complex secondary transactions",
    },
    {
      icon: <Landmark size={24} />,
      title: "Financial Acumen",
      description: "Sophisticated valuation and financial analysis capabilities",
    },
    {
      icon: <Users size={24} />,
      title: "Extensive Network",
      description: "Connections with key players in the secondary market",
    },
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-16 bg-secondary">
        <div className="container-base">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-accent text-accent-foreground py-1 px-4 rounded-full text-sm font-medium tracking-wide mb-4 animate-fade-in">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 animate-fade-up">
              Specialist Advisory in Secondary Markets
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up animation-delay-100">
              Equity Vista provides focused advisory services for private equity, venture capital, 
              and real assets secondary transactions, leveraging deep market expertise and analytical 
              rigor to deliver optimal outcomes for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg animate-fade-right">
              <div className="absolute inset-0 bg-muted/30">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Founder" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-6 animate-fade-left">
              <span className="inline-block bg-accent text-accent-foreground py-1 px-4 rounded-full text-sm font-medium tracking-wide mb-2">
                Founder
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                Leadership with Deep Industry Insight
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                With over 15 years of experience in private capital markets, our founder 
                brings a wealth of knowledge and expertise to every client engagement. 
                Prior to establishing Equity Vista, they held senior positions at leading 
                investment banks and private equity firms, advising on transactions totaling 
                over $2 billion in value.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Their specialized focus on secondary transactions has resulted in a deep understanding 
                of market dynamics, valuation methodologies, and transaction structuring that 
                benefits clients seeking optimal outcomes in the secondary market.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex flex-col items-center justify-center rounded-lg bg-card p-4 min-w-[120px]">
                  <span className="text-3xl font-semibold text-primary">15+</span>
                  <span className="text-sm text-muted-foreground">Years Experience</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-card p-4 min-w-[120px]">
                  <span className="text-3xl font-semibold text-primary">$2B+</span>
                  <span className="text-sm text-muted-foreground">Transactions</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-card p-4 min-w-[120px]">
                  <span className="text-3xl font-semibold text-primary">50+</span>
                  <span className="text-sm text-muted-foreground">Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Values */}
      <section className="py-20 bg-secondary">
        <div className="container-base">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block bg-accent text-accent-foreground py-1 px-4 rounded-full text-sm font-medium tracking-wide mb-4 animate-fade-in">
              Our Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6 animate-fade-up">
              Why Choose Equity Vista
            </h2>
            <p className="text-muted-foreground animate-fade-up animation-delay-100">
              We combine deep industry knowledge, analytical rigor, and a client-focused approach 
              to deliver exceptional results in secondary transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg p-8 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-5 text-primary bg-accent/30 w-12 h-12 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8 md:p-10 animate-fade-up">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="text-primary bg-accent/30 w-16 h-16 rounded-lg flex items-center justify-center">
                  <Award size={32} />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-display text-2xl font-medium mb-4">Our Approach</h3>
                <p className="text-muted-foreground mb-4">
                  At Equity Vista, we take a methodical, analytical approach to every transaction. 
                  We conduct thorough due diligence, leverage our deep market knowledge, and employ 
                  sophisticated financial analysis to identify optimal solutions for our clients.
                </p>
                <p className="text-muted-foreground">
                  Our singular focus on secondary transactions allows us to offer specialized expertise 
                  and insights that generalist advisors cannot match. We prioritize client interests, 
                  confidentiality, and transparent communication throughout the advisory process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-base">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6 animate-fade-up">
              Let's Discuss Your Secondary Transaction Needs
            </h2>
            <p className="text-primary-foreground/80 mb-8 animate-fade-up animation-delay-100">
              Contact us today for a confidential consultation about your secondary market objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-200">
              <Link 
                to="/services" 
                className="button-outline border-white text-white hover:bg-white/10"
              >
                <span className="flex items-center justify-center">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
