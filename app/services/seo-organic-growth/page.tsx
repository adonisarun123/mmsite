import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  Clock,
  Sparkles,
  Quote,
  Target,
  FileText,
  Link2,
  MapPin
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO & Organic Growth | MonkMantra - Drive Qualified Organic Traffic",
  description: "Dominate search rankings with data-driven SEO strategies. Technical SEO, content optimization, and link building that drives +300% organic traffic growth.",
};

export default function SEOOrganicGrowthPage() {
  const features = [
    {
      icon: Search,
      title: "Technical SEO Optimization",
      description: "Comprehensive technical audits and optimizations to ensure your website meets all search engine requirements."
    },
    {
      icon: FileText,
      title: "Content Optimization",
      description: "Data-driven content strategies that target high-value keywords and satisfy search intent."
    },
    {
      icon: Link2,
      title: "Authority Link Building",
      description: "Ethical link building campaigns that increase your domain authority and search rankings."
    },
    {
      icon: MapPin,
      title: "Local SEO Mastery",
      description: "Dominate local search results and Google My Business to capture nearby customers."
    }
  ];

  const services = [
    {
      category: "Technical SEO",
      items: [
        "Site Architecture Optimization",
        "Page Speed Enhancement",
        "Mobile Optimization",
        "Schema Markup Implementation",
        "Core Web Vitals Improvement"
      ]
    },
    {
      category: "Content SEO",
      items: [
        "Keyword Research & Strategy",
        "Content Gap Analysis",
        "On-Page Optimization",
        "Content Creation & Optimization",
        "Featured Snippet Optimization"
      ]
    },
    {
      category: "Off-Page SEO",
      items: [
        "Link Building Campaigns",
        "Digital PR & Outreach",
        "Brand Mention Building",
        "Competitor Backlink Analysis",
        "Link Profile Cleanup"
      ]
    },
    {
      category: "Local SEO",
      items: [
        "Google My Business Optimization",
        "Local Citation Building",
        "Review Management",
        "Local Content Strategy",
        "Geographic Targeting"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Comprehensive SEO Audit",
      description: "Full technical and content audit to identify opportunities and issues affecting your rankings.",
      duration: "Week 1"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create a custom SEO strategy based on your goals, competition, and market opportunities.",
      duration: "Week 2"
    },
    {
      step: "03",
      title: "Implementation & Optimization",
      description: "Execute technical fixes, content optimization, and link building according to your strategy.",
      duration: "Ongoing"
    },
    {
      step: "04",
      title: "Monitor & Scale",
      description: "Continuous monitoring, reporting, and scaling of successful SEO tactics for maximum growth.",
      duration: "Monthly"
    }
  ];

  const results = [
    { metric: "Organic Traffic Growth", value: "+300%", description: "Average increase in qualified organic traffic" },
    { metric: "Keyword Rankings", value: "85%", description: "Keywords ranking on page 1 of Google" },
    { metric: "Conversion Rate", value: "+120%", description: "Higher converting organic visitors" },
    { metric: "Domain Authority", value: "+45", description: "Average domain authority improvement" }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Long-term organic growth that compounds over time, unlike paid advertising."
    },
    {
      icon: Target,
      title: "High-Intent Traffic",
      description: "Attract visitors who are actively searching for your products or services."
    },
    {
      icon: BarChart3,
      title: "Better ROI",
      description: "Higher ROI compared to paid channels with long-lasting results."
    },
    {
      icon: Globe,
      title: "Brand Authority",
      description: "Establish your brand as an authority in your industry through search visibility."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-green-50/30 to-emerald-50/30 dark:via-green-950/20 dark:to-emerald-950/20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 text-sm font-medium text-green-700 mb-8 dark:bg-green-950/30 dark:border-green-800 dark:text-green-300">
              <Search className="h-4 w-4" />
              SEO & Organic Growth
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              Dominate Search Rankings with <span className="gradient-text">Data-Driven SEO</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Drive qualified organic traffic with comprehensive SEO strategies that improve rankings, increase visibility, and generate sustainable growth. 
              <span className="text-green-600 font-semibold dark:text-green-400"> Average +300% organic traffic growth</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                <Sparkles className="h-5 w-5" />
                Get Free SEO Audit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#features" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Comprehensive <span className="gradient-text">SEO Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From technical optimization to content strategy, we cover every aspect of search engine optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600 mb-6 dark:bg-green-950/30 dark:text-green-400">
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

      {/* Benefits Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Why <span className="gradient-text">SEO Matters</span> for Your Business
            </h2>
            <p className="text-lg text-muted-foreground">
              Organic search drives the highest quality traffic and delivers the best long-term ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card hover-lift text-center">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Complete <span className="gradient-text">SEO Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide end-to-end SEO services to maximize your search visibility and organic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.category}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Our <span className="gradient-text">SEO Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to SEO that delivers consistent, measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500 text-white shadow-lg mb-4">
                    <span className="text-lg font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium dark:bg-green-950/30 dark:text-green-300">
                  <Clock className="h-3 w-3" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Testimonial Section */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Proven <span className="gradient-text">SEO Results</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our SEO strategies consistently deliver significant improvements in organic visibility and traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="text-center card hover-lift">
                <div className="card-content">
                  <div className="text-3xl font-bold text-green-600 mb-2 dark:text-green-400">{result.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{result.metric}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Client Testimonial */}
          <div className="card border-2 border-green-200 dark:border-green-800">
            <div className="card-content p-8">
              <div className="text-center">
                <Quote className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed max-w-3xl mx-auto">
                  "We went from page 3 to ranking #1 for our main keywords in just 6 months. Our organic traffic increased by 400% and we're now getting 10x more qualified leads from search."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium dark:bg-green-950/30 dark:text-green-400">
                    JT
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">James Thompson</div>
                    <div className="text-sm text-muted-foreground">CEO, TechSolutions Inc.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-background dark:from-green-950/20 dark:via-emerald-950/10 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-green-200 bg-background/90 backdrop-blur-xl shadow-2xl dark:border-green-800">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Ready to <span className="gradient-text">Dominate</span> Search Rankings?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get a free comprehensive SEO audit and discover how to triple your organic traffic.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                    <Sparkles className="h-5 w-5" />
                    Get Free SEO Audit
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/case-studies" className="btn btn-outline btn-lg">
                    View Case Studies
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free comprehensive audit
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Keyword strategy included
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