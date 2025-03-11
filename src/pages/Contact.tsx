
import { useEffect, useState, FormEvent } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        organization: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: "contact@equityvista.com",
      link: "mailto:contact@equityvista.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: "+1 (234) 567-890",
      link: "tel:+1234567890",
    },
    {
      icon: <MapPin size={24} />,
      title: "Office",
      details: "Financial District, New York, NY",
      link: "https://maps.google.com",
    },
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-16 bg-secondary">
        <div className="container-base">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-accent text-accent-foreground py-1 px-4 rounded-full text-sm font-medium tracking-wide mb-4 animate-fade-in">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 animate-fade-up">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up animation-delay-100">
              Have questions about secondary transactions or interested in discussing a potential
              engagement? We're here to help. Reach out to us for a confidential consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-right">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Reach out through any of these channels for inquiries about our services
                  or to schedule a consultation.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start p-5 rounded-lg border border-border hover:border-primary/30 hover:bg-secondary transition-colors duration-200 group"
                    target={info.title === "Office" ? "_blank" : undefined}
                    rel={info.title === "Office" ? "noopener noreferrer" : undefined}
                  >
                    <div className="mr-4 text-primary bg-accent/30 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-accent/50 transition-colors duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-left">
              <div className="bg-card rounded-lg shadow-sm p-8">
                <h2 className="font-display text-2xl font-semibold tracking-tight mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Organization
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="button-premium w-full flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <span className="flex items-center">
                          Send Message <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container-base">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block bg-accent text-accent-foreground py-1 px-4 rounded-full text-sm font-medium tracking-wide mb-4 animate-fade-in">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6 animate-fade-up">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground animate-fade-up animation-delay-100">
              Here are some common questions about our services and the secondary transaction process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What types of secondary transactions do you advise on?",
                answer: "We advise on a wide range of secondary transactions, including LP interests in private equity, venture capital, and real assets funds; direct portfolios of private companies; GP-led transactions; and structured liquidity solutions."
              },
              {
                question: "How long does a typical secondary transaction take?",
                answer: "The timeline varies based on transaction complexity, but typically ranges from 2-4 months from initial engagement to closing. We work efficiently to minimize disruption while ensuring thorough analysis and optimal execution."
              },
              {
                question: "What information is needed to begin the process?",
                answer: "Initially, we need basic information about the assets being considered for secondary sale, including fund names, vintage years, commitment amounts, and any recent valuations. As the process advances, more detailed information will be required."
              },
              {
                question: "How are your services structured and priced?",
                answer: "Our fee structures are tailored to each client engagement, typically including a combination of retainer and success-based components. We align our interests with yours to ensure we're incentivized to deliver optimal outcomes."
              },
              {
                question: "Do you work with both buyers and sellers?",
                answer: "Yes, we advise both sellers seeking liquidity and buyers looking to acquire secondary interests. However, we never represent both sides in the same transaction to avoid conflicts of interest."
              },
              {
                question: "How do you maintain confidentiality?",
                answer: "We implement strict confidentiality protocols, including NDAs with all parties, anonymized marketing materials when appropriate, and careful control of information flow throughout the transaction process."
              },
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-lg font-medium mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
