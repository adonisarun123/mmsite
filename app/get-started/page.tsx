import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock,
  TrendingUp,
  Shield,
  Sparkles,
  Zap,
  Target,
  BarChart3
} from "lucide-react";

export const metadata: Metadata = {
  title: "Get Started with MonkMantra - Free Strategy Session Worth $2,000",
  description: "Start your growth journey today. Get a free marketing strategy session, custom audit, and roadmap to 10x your results. No commitment required.",
};

export default function GetStartedPage() {
  const benefits = [
    {
      icon: Target,
      title: "Custom Strategy Session",
      description: "60-minute deep-dive into your business with actionable recommendations",
      value: "$2,000"
    },
    {
      icon: BarChart3,
      title: "Complete Marketing Audit",
      description: "Comprehensive analysis of your current marketing performance",
      value: "$1,500"
    },
    {
      icon: TrendingUp,
      title: "Growth Roadmap",
      description: "Step-by-step plan to achieve your revenue goals",
      value: "$1,000"
    },
    {
      icon: Zap,
      title: "AI Tools Access",
      description: "Free trial of our proprietary marketing automation platform",
      value: "$500"
    }
  ];

  const testimonials = [
    {
      text: "The free strategy session alone was worth thousands. They identified gaps in our funnel that we never saw.",
      author: "Sarah Chen",
      company: "TechFlow",
      result: "+340% conversion rate",
      avatar: "SC"
    },
    {
      text: "MonkMantra's approach is refreshingly different. They deliver on their promises and then some.",
      author: "Marcus Thompson",
      company: "HealthTech",
      result: "+500% qualified leads",
      avatar: "MT"
    },
    {
      text: "ROI improved by 280% in just 3 months. Best marketing investment we've ever made.",
      author: "Jennifer Rodriguez",
      company: "StyleForward",
      result: "+280% customer LTV",
      avatar: "JR"
    }
  ];

  const guarantees = [
    {
      icon: Clock,
      title: "72-Hour Response",
      description: "We'll contact you within 72 hours to schedule your session"
    },
    {
      icon: Shield,
      title: "No Commitment",
      description: "Free consultation with zero obligation to continue"
    },
    {
      icon: CheckCircle,
      title: "Actionable Insights",
      description: "Walk away with strategies you can implement immediately"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-50/50 dark:to-purple-950/20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-8">
                  <Sparkles className="h-4 w-4" />
                  Limited Time: Free $5,000 Strategy Package
                </div>
                
                <h1 className="mb-6 text-shadow-lg">
                  Get Your <span className="gradient-text">Free Strategy Session</span> Today
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Discover exactly how to 10x your marketing results with AI-powered strategies. 
                  No fluff, no sales pitch - just actionable insights you can implement immediately.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Custom growth strategy worth $2,000 - completely free",
                    "Identify hidden opportunities in your current marketing",
                    "Get a step-by-step roadmap to achieve your revenue goals",
                    "Access to our proprietary AI marketing tools",
                    "No commitment or contracts required"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>60-minute session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>No commitment required</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <div className="card border-2 border-primary/20 bg-background/90 backdrop-blur-xl shadow-2xl">
                  <div className="card-content p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Claim Your Free Strategy Session
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Join 200+ companies who've achieved breakthrough results
                      </p>
                    </div>

                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Monthly Revenue *
                        </label>
                        <select 
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select revenue range</option>
                          <option value="under-100k">Under $100K</option>
                          <option value="100k-500k">$100K - $500K</option>
                          <option value="500k-1m">$500K - $1M</option>
                          <option value="1m-5m">$1M - $5M</option>
                          <option value="5m-plus">$5M+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Biggest Marketing Challenge
                        </label>
                        <textarea
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="What's your biggest marketing challenge right now?"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary btn-lg w-full group glow-primary">
                        <Sparkles className="h-5 w-5" />
                        Claim My Free Session ($2,000 Value)
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </button>

                      <p className="text-xs text-muted-foreground text-center">
                        🔒 Your information is secure and will never be shared. 
                        By submitting, you agree to our{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              What You Get in Your <span className="gradient-text">Free Session</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A complete $5,000 strategy package - absolutely free, with no strings attached.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center card hover-lift">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{benefit.value}</div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-full px-6 py-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-700 dark:text-green-300 font-medium">
                Total Value: $5,000 - Yours Free Today
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real businesses who started with a free strategy session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-green-600">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Our <span className="gradient-text">Risk-Free</span> Promise
            </h2>
            <p className="text-lg text-muted-foreground">
              We're confident you'll love the insights from your free session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center card hover-lift">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                    <guarantee.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {guarantee.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-gradient-to-br from-primary/5 via-purple-50/50 to-background dark:from-primary/5 dark:via-purple-950/20 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-primary/20 bg-background/90 backdrop-blur-xl shadow-2xl">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Don't Miss This <span className="gradient-text">Limited Opportunity</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  We can only offer a limited number of free strategy sessions each month. 
                  Claim yours now before spots fill up.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <button className="btn btn-primary btn-lg group glow-primary text-lg px-8 py-4">
                    <Sparkles className="h-6 w-6" />
                    Claim My Free $5,000 Strategy Package
                    <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    No commitment required
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Results guaranteed
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Available spots limited
                  </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    ⚡ Limited Time: Only 5 free strategy sessions available this week
                  </p>
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