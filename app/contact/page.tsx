import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  Sparkles,
  MessageSquare,
  Calendar
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact MonkMantra - Get Your Free Marketing Strategy Session",
  description: "Ready to transform your marketing? Contact our AI marketing experts today. Free strategy session, no commitment required.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-50/50 dark:to-purple-950/20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-8">
              <Sparkles className="h-4 w-4" />
              Let's Start Your Growth Journey
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              Ready to <span className="gradient-text">Transform</span> Your Marketing?
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Get your free strategy session worth $2,000. No commitment required. 
              <span className="text-primary font-semibold"> Our experts are standing by</span> to help you achieve breakthrough results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="mb-6">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tell us about your business and marketing goals. We'll get back to you within 2 hours with a custom strategy.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What's Your Biggest Marketing Challenge? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your current marketing challenges and goals..."
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full group glow-primary">
                  <Sparkles className="h-5 w-5" />
                  Send Message & Get Free Strategy
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-muted-foreground text-sm">hello@monkmantra.com</p>
                    <p className="text-muted-foreground text-sm">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                    <p className="text-muted-foreground text-sm">+1 (555) 012-3456</p>
                    <p className="text-muted-foreground text-sm">Mon-Fri 9AM-6PM PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Office</h4>
                    <p className="text-muted-foreground text-sm">123 Innovation Drive</p>
                    <p className="text-muted-foreground text-sm">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 card">
                <div className="card-content p-6">
                  <h4 className="font-semibold text-foreground mb-4">Why Choose MonkMantra?</h4>
                  <div className="space-y-3">
                    {[
                      "Response within 2 hours guaranteed",
                      "Free strategy session worth $2,000",
                      "No commitment or contracts required",
                      "200+ successful client campaigns",
                      "Average 340% growth improvement"
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 