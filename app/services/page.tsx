import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Brain, 
  Target, 
  BarChart3, 
  Palette, 
  Users, 
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Sparkles,
  Search,
  Mail,
  Globe,
  Smartphone,
  PieChart,
  Video
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI-Powered Marketing Services | MonkMantra - Guaranteed Results",
  description: "Transform your marketing with AI-powered services. From strategy to execution, we deliver measurable results in 72 hours. Get your free audit today.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "strategy",
      slug: "ai-marketing-strategy",
      icon: Brain,
      title: "AI Marketing Strategy",
      description: "Data-driven strategies powered by AI that analyze your market, competitors, and audience to create winning campaigns.",
      features: ["Market Analysis", "Competitor Research", "Customer Journey Mapping", "ROI Forecasting", "Strategy Documentation"],
      results: "+250% average ROI improvement",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200 dark:border-purple-800"
    },
    {
      id: "ppc",
      slug: "ppc-management",
      icon: Target,
      title: "PPC Management",
      description: "Precision-targeted ad campaigns across Google, Facebook, LinkedIn, and other platforms with AI optimization.",
      features: ["Campaign Setup", "Keyword Research", "Ad Creation", "Bid Management", "Performance Optimization"],
      results: "Average 4.2x ROAS",
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      borderColor: "border-red-200 dark:border-red-800"
    },
    {
      id: "social",
      slug: "social-media-marketing",
      icon: Users,
      title: "Social Media Marketing",
      description: "Engaging social campaigns that build communities and drive conversions across all major platforms.",
      features: ["Content Strategy", "Community Management", "Influencer Outreach", "Social Advertising", "Analytics"],
      results: "+180% engagement increase",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      id: "content",
      slug: "content-marketing",
      icon: Palette,
      title: "Content Marketing",
      description: "High-converting content that educates, engages, and converts your audience at every stage of the funnel.",
      features: ["Content Strategy", "Blog Writing", "Video Production", "Email Sequences", "Landing Pages"],
      results: "+220% organic traffic",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      id: "email",
      slug: "email-marketing",
      icon: Mail,
      title: "Email Marketing",
      description: "Automated email sequences that nurture leads and turn subscribers into loyal customers.",
      features: ["Email Strategy", "Automation Setup", "Segmentation", "A/B Testing", "Performance Analytics"],
      results: "Average 42% open rate",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-200 dark:border-orange-800"
    },
    {
      id: "automation",
      slug: "marketing-automation",
      icon: Zap,
      title: "Marketing Automation",
      description: "Complete marketing automation that works 24/7 to capture, nurture, and convert leads.",
      features: ["Lead Scoring", "Drip Campaigns", "CRM Integration", "Workflow Automation", "Analytics Dashboard"],
      results: "+190% lead conversion",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
      borderColor: "border-yellow-200 dark:border-yellow-800"
    },
    {
      id: "seo",
      slug: "seo-organic-growth",
      icon: Search,
      title: "SEO & Organic Growth",
      description: "Data-driven SEO strategies that improve rankings and drive qualified organic traffic to your website.",
      features: ["Technical SEO", "Keyword Research", "Content Optimization", "Link Building", "Local SEO"],
      results: "+300% organic traffic",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
      borderColor: "border-indigo-200 dark:border-indigo-800"
    },
    {
      id: "web-design",
      slug: "web-design-development",
      icon: Globe,
      title: "Web Design & Development",
      description: "Conversion-optimized websites that look stunning and drive results across all devices.",
      features: ["Responsive Design", "UX/UI Optimization", "Speed Optimization", "CRO Implementation", "A/B Testing"],
      results: "+150% conversion rates",
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
      borderColor: "border-teal-200 dark:border-teal-800"
    },
    {
      id: "mobile-marketing",
      slug: "mobile-marketing",
      icon: Smartphone,
      title: "Mobile Marketing",
      description: "Mobile-first strategies including app marketing, SMS campaigns, and mobile advertising.",
      features: ["App Store Optimization", "SMS Marketing", "Mobile Ads", "In-App Campaigns", "Mobile Analytics"],
      results: "+200% mobile conversions",
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      borderColor: "border-pink-200 dark:border-pink-800"
    },
    {
      id: "analytics",
      slug: "analytics-reporting",
      icon: PieChart,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics setup and reporting that provides actionable insights for growth.",
      features: ["Analytics Setup", "Custom Dashboards", "Performance Tracking", "ROI Analysis", "Growth Insights"],
      results: "100% data accuracy",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
      borderColor: "border-cyan-200 dark:border-cyan-800"
    },
    {
      id: "video-marketing",
      slug: "video-marketing",
      icon: Video,
      title: "Video Marketing",
      description: "Engaging video content that captures attention and drives conversions across all platforms.",
      features: ["Video Strategy", "Content Creation", "Video SEO", "YouTube Marketing", "Video Advertising"],
      results: "+400% engagement",
      color: "text-violet-500",
      bgColor: "bg-violet-50 dark:bg-violet-950/20",
      borderColor: "border-violet-200 dark:border-violet-800"
    },
    {
      id: "conversion-optimization",
      slug: "conversion-optimization",
      icon: BarChart3,
      title: "Conversion Rate Optimization",
      description: "Systematic testing and optimization to maximize conversions from your existing traffic.",
      features: ["A/B Testing", "User Experience Audits", "Landing Page Optimization", "Funnel Analysis", "CRO Strategy"],
      results: "+85% conversion improvement",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
      borderColor: "border-emerald-200 dark:border-emerald-800"
    }
  ];

  const guarantees = [
    {
      icon: Clock,
      title: "72-Hour Launch",
      description: "First campaign live within 72 hours or your money back."
    },
    {
      icon: TrendingUp,
      title: "ROI Guarantee",
      description: "Measurable results within 90 days or we work for free."
    },
    {
      icon: Shield,
      title: "No Lock-in Contracts",
      description: "Cancel anytime. No long-term commitments required."
    },
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
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-8">
              <Sparkles className="h-4 w-4" />
              Complete Marketing Solutions
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              AI-Powered Marketing Services That <span className="gradient-text">Actually Work</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              From strategy to execution, our comprehensive services turn your marketing challenges into growth opportunities. 
              <span className="text-primary font-semibold"> Guaranteed results in 90 days.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                <Sparkles className="h-5 w-5" />
                Get Free Strategy Session
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#services" className="btn btn-outline btn-lg">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Complete Marketing Solutions for <span className="gradient-text">Every Need</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from our comprehensive suite of services designed to accelerate your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.id} className={`group relative bg-background border ${service.borderColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary/30`}>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex p-3 rounded-xl ${service.bgColor} shadow-sm`}>
                      <service.icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-muted-foreground">4.9</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-sm font-medium text-primary">{service.results}</div>
                    <Link href={`/services/${service.slug}`} className="btn btn-outline btn-sm group">
                      Learn More
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Our <span className="gradient-text">Performance Guarantees</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We're so confident in our results, we guarantee them.
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

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary/5 via-purple-50/50 to-background dark:from-primary/5 dark:via-purple-950/20 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-primary/20 bg-background/90 backdrop-blur-xl shadow-2xl">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Ready to <span className="gradient-text">Transform</span> Your Marketing?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get a free strategy session worth $2,000 and discover how we can 10x your marketing results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                    <Sparkles className="h-5 w-5" />
                    Get Free Strategy Session
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