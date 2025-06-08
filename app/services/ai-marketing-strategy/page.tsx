import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Brain,
  Target,
  BarChart3,
  Users,
  Clock,
  TrendingUp,
  Sparkles,
  Star,
  Quote
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Marketing Strategy | MonkMantra - Data-Driven Growth Strategies",
  description: "Transform your marketing with AI-powered strategies. Get custom market analysis, competitor research, and ROI forecasting. Average 250% ROI improvement.",
};

export default function AIMarketingStrategyPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Market Analysis",
      description: "Advanced algorithms analyze market trends, customer behavior, and competitive landscape to identify untapped opportunities."
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI identifies your ideal customer profiles and creates highly targeted campaigns that resonate with your audience."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast campaign performance and ROI before launch using machine learning models trained on millions of data points."
    },
    {
      icon: Users,
      title: "Customer Journey Optimization",
      description: "Map and optimize every touchpoint in your customer journey for maximum conversion and retention."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business, market, competitors, and current marketing performance using AI tools.",
      duration: "Week 1"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Our AI systems identify opportunities and create a comprehensive marketing strategy tailored to your goals.",
      duration: "Week 2"
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "We create detailed execution plans with timelines, budgets, and performance benchmarks.",
      duration: "Week 3"
    },
    {
      step: "04",
      title: "Optimization & Scaling",
      description: "Continuous monitoring and optimization using AI to maximize performance and scale successful campaigns.",
      duration: "Ongoing"
    }
  ];

  const results = [
    { metric: "Average ROI Improvement", value: "+250%", description: "Clients see significant returns within 90 days" },
    { metric: "Market Share Growth", value: "+45%", description: "AI strategies capture more market opportunities" },
    { metric: "Customer Acquisition Cost", value: "-40%", description: "More efficient targeting reduces CAC" },
    { metric: "Conversion Rate", value: "+180%", description: "Optimized funnels drive higher conversions" }
  ];

  const testimonial = {
    text: "MonkMantra's AI strategy completely transformed our marketing approach. We went from guessing to precision targeting, and our ROI increased by 340% in just 3 months.",
    author: "Sarah Chen",
    position: "CMO, TechFlow",
    company: "SaaS Platform",
    avatar: "SC",
    results: [
      "340% increase in ROI",
      "60% reduction in CAC", 
      "2.5x lead generation"
    ]
  };

  const packages = [
    {
      name: "Strategy Audit",
      price: "$2,500",
      duration: "2 weeks",
      description: "Comprehensive analysis of your current marketing with AI-powered recommendations",
      features: [
        "AI Market Analysis",
        "Competitor Intelligence", 
        "Customer Journey Mapping",
        "Performance Audit",
        "Strategic Recommendations"
      ],
      popular: false
    },
    {
      name: "Complete Strategy",
      price: "$5,000",
      duration: "4 weeks", 
      description: "Full AI marketing strategy with implementation roadmap and optimization plan",
      features: [
        "Everything in Strategy Audit",
        "Custom AI Models",
        "Implementation Roadmap",
        "90-Day Optimization Plan",
        "Performance Forecasting",
        "Team Training"
      ],
      popular: true
    },
    {
      name: "Strategy + Execution",
      price: "$10,000",
      duration: "8 weeks",
      description: "Complete strategy development with hands-on implementation and management",
      features: [
        "Everything in Complete Strategy",
        "Campaign Implementation",
        "Ongoing Management",
        "Weekly Optimization",
        "Dedicated Account Manager",
        "Quarterly Strategy Reviews"
      ],
      popular: false
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-50/50 dark:to-purple-950/20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-8">
              <Brain className="h-4 w-4" />
              AI Marketing Strategy
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              Data-Driven Marketing Strategies Powered by <span className="gradient-text">Artificial Intelligence</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your marketing with AI-powered strategies that analyze your market, competitors, and audience to create winning campaigns. 
              <span className="text-primary font-semibold"> Average 250% ROI improvement</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                <Sparkles className="h-5 w-5" />
                Get Free Strategy Audit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#features" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic AI Marketing Strategy Services */}
      <section id="features" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Strategic <span className="gradient-text">AI Marketing Strategy</span> Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Our proprietary AI systems analyze millions of data points to create strategies that actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our AI Marketing Strategy Process */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Our <span className="gradient-text">AI Marketing Strategy</span> Process
            </h2>
            <p className="text-lg text-muted-foreground">
              From analysis to optimization, we follow a proven methodology that delivers results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground shadow-lg mb-4">
                    <span className="text-lg font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  <Clock className="h-3 w-3" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven AI Marketing Strategy Results */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Proven <span className="gradient-text">AI Marketing Strategy</span> Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Our AI strategies deliver measurable improvements across all key metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="text-center card hover-lift">
                <div className="card-content">
                  <div className="text-3xl font-bold text-primary mb-2">{result.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{result.metric}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="card border-2 border-primary/20">
            <div className="card-content p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Quote className="h-12 w-12 text-primary mb-4" />
                  <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-sm text-primary">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Key Results:</h4>
                  <div className="space-y-3">
                    {testimonial.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete AI Marketing Strategy Solutions */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Complete <span className="gradient-text">AI Marketing Strategy</span> Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive AI-powered marketing strategies that transform your business performance and competitive positioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`card hover-lift ${pkg.popular ? 'border-2 border-primary ring-4 ring-primary/20' : ''} relative`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="card-content p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-1">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground mb-4">{pkg.duration} delivery</div>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/get-started" 
                    className={`btn w-full group ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary/5 via-purple-50/50 to-background dark:from-primary/5 dark:via-purple-950/20 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-primary/20 bg-background/90 backdrop-blur-xl shadow-2xl">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Ready to <span className="gradient-text">Transform</span> Your Marketing Strategy?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get a free AI-powered audit of your current marketing strategy and discover hidden opportunities.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                    <Sparkles className="h-5 w-5" />
                    Get Free Strategy Audit
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/case-studies" className="btn btn-outline btn-lg">
                    View Case Studies
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free audit included
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    No commitment required
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Results guaranteed
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