
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      {/* Decorative background element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -right-96 -top-96 w-[800px] h-[800px] rounded-full opacity-10 bg-accent"
          style={{ filter: "blur(100px)" }}
        />
        <div 
          className="absolute -left-96 top-1/2 w-[600px] h-[600px] rounded-full opacity-10 bg-accent"
          style={{ filter: "blur(80px)" }}
        />
      </div>

      <div className="container-base relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          <div className="inline-block animate-fade-down animation-delay-100">
            <span className="inline-block bg-accent text-accent-foreground py-1 px-4 rounded-full text-sm font-medium tracking-wide mb-6">
              Private Equity Advisory
            </span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 animate-fade-up">
            <span className="block">Specialized Advisory for</span>
            <span className="block">Secondary Transactions</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0 animate-fade-up animation-delay-200">
            Expert guidance and bespoke solutions for private equity, venture capital, 
            and real assets secondary market transactions.
          </p>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4 animate-fade-in animation-delay-400">
              Trusted by funds and investors across the world
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-8 animate-fade-in animation-delay-500">
              {[
                "General Partners", 
                "Family Offices", 
                "Institutional Investors", 
                "Asset Managers", 
                "HNWI"
              ].map((partner, i) => (
                <div key={i} className="h-10 w-32 bg-muted/40 rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground/40 text-xs">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
