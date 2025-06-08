import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  Users, 
  BarChart3, 
  Target,
  CheckCircle,
  Clock,
  Sparkles,
  Star,
  Quote
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies - Real Results from Real Clients | MonkMantra",
  description: "See how we've helped 200+ companies achieve 3x growth with AI-powered marketing. Detailed case studies with metrics, strategies, and results.",
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "techflow-saas",
      company: "TechFlow",
      industry: "SaaS",
      logo: "🔥",
      challenge: "Low conversion rates and high customer acquisition costs",
      solution: "AI-powered PPC campaigns with advanced funnel optimization",
      timeline: "3 months",
      investment: "$45K",
      results: {
        primary: "340% increase in conversion rate",
        metrics: [
          { label: "Conversion Rate", before: "2.1%", after: "9.2%", increase: "+340%" },
          { label: "Cost per Lead", before: "$180", after: "$48", decrease: "-73%" },
          { label: "Monthly Revenue", before: "$85K", after: "$380K", increase: "+347%" },
          { label: "ROAS", before: "2.1x", after: "8.7x", increase: "+314%" }
        ]
      },
      testimonial: {
        text: "MonkMantra transformed our entire marketing operation. The AI strategies they implemented delivered results beyond our wildest expectations.",
        author: "Sarah Chen",
        position: "CMO, TechFlow",
        avatar: "SC"
      },
      tags: ["PPC", "Conversion Optimization", "SaaS"]
    },
    {
      id: "healthtech-startup",
      company: "HealthTech Innovations",
      industry: "Healthcare",
      logo: "⚕️",
      challenge: "Struggling to reach healthcare professionals with limited budget",
      solution: "LinkedIn-focused strategy with content marketing and lead nurturing",
      timeline: "4 months",
      investment: "$32K",
      results: {
        primary: "500% increase in qualified leads",
        metrics: [
          { label: "Qualified Leads", before: "12/month", after: "72/month", increase: "+500%" },
          { label: "Pipeline Value", before: "$180K", after: "$1.2M", increase: "+567%" },
          { label: "Sales Cycle", before: "9 months", after: "4.5 months", decrease: "-50%" },
          { label: "Close Rate", before: "8%", after: "23%", increase: "+188%" }
        ]
      },
      testimonial: {
        text: "Their understanding of our complex B2B sales cycle and targeted approach to healthcare decision-makers was exceptional.",
        author: "Dr. Marcus Thompson",
        position: "CEO, HealthTech Innovations",
        avatar: "MT"
      },
      tags: ["LinkedIn", "B2B", "Healthcare"]
    },
    {
      id: "ecommerce-fashion",
      company: "StyleForward",
      industry: "E-commerce",
      logo: "👗",
      challenge: "Seasonal revenue fluctuations and low customer lifetime value",
      solution: "Omnichannel approach with email automation and social commerce",
      timeline: "6 months",
      investment: "$28K",
      results: {
        primary: "280% increase in customer LTV",
        metrics: [
          { label: "Customer LTV", before: "$95", after: "$361", increase: "+280%" },
          { label: "Email Revenue", before: "12%", after: "34%", increase: "+183%" },
          { label: "Repeat Purchase Rate", before: "18%", after: "47%", increase: "+161%" },
          { label: "Average Order Value", before: "$58", after: "$89", increase: "+53%" }
        ]
      },
      testimonial: {
        text: "The automation sequences they built transformed our customer relationships. We now have predictable revenue year-round.",
        author: "Jennifer Rodriguez",
        position: "Founder, StyleForward",
        avatar: "JR"
      },
      tags: ["E-commerce", "Email Marketing", "Automation"]
    },
    {
      id: "fintech-platform",
      company: "InvestSmart",
      industry: "FinTech",
      logo: "💰",
      challenge: "Complex product requiring extensive education and trust-building",
      solution: "Content-driven strategy with webinars and thought leadership",
      timeline: "5 months",
      investment: "$55K",
      results: {
        primary: "420% increase in demo requests",
        metrics: [
          { label: "Demo Requests", before: "8/month", after: "42/month", increase: "+425%" },
          { label: "Organic Traffic", before: "2.3K", after: "18.7K", increase: "+713%" },
          { label: "Webinar Attendance", before: "35", after: "280", increase: "+700%" },
          { label: "Sales Qualified Leads", before: "3/month", after: "28/month", increase: "+833%" }
        ]
      },
      testimonial: {
        text: "They understood our need to build trust in the financial space. Their content strategy positioned us as thought leaders.",
        author: "David Kim",
        position: "VP Marketing, InvestSmart",
        avatar: "DK"
      },
      tags: ["Content Marketing", "FinTech", "Thought Leadership"]
    },
    {
      id: "manufacturing-b2b",
      company: "IndustrialMax",
      industry: "Manufacturing",
      logo: "🏭",
      challenge: "Outdated marketing approach with long sales cycles",
      solution: "Account-based marketing with CRM integration and lead scoring",
      timeline: "8 months",
      investment: "$75K",
      results: {
        primary: "190% increase in enterprise deals",
        metrics: [
          { label: "Enterprise Deals", before: "2/quarter", after: "6/quarter", increase: "+200%" },
          { label: "Average Deal Size", before: "$180K", after: "$340K", increase: "+89%" },
          { label: "Sales Cycle", before: "14 months", after: "8 months", decrease: "-43%" },
          { label: "Pipeline Quality", before: "22%", after: "61%", increase: "+177%" }
        ]
      },
      testimonial: {
        text: "MonkMantra modernized our entire approach to B2B marketing. The ROI has been phenomenal.",
        author: "Tom Anderson",
        position: "Marketing Director, IndustrialMax",
        avatar: "TA"
      },
      tags: ["B2B", "Manufacturing", "Account-Based Marketing"]
    },
    {
      id: "real-estate-luxury",
      company: "PremiumProperties",
      industry: "Real Estate",
      logo: "🏠",
      challenge: "Targeting high-net-worth individuals with premium property sales",
      solution: "Social media marketing with influencer partnerships and luxury positioning",
      timeline: "4 months",
      investment: "$38K",
      results: {
        primary: "300% increase in luxury property inquiries",
        metrics: [
          { label: "Luxury Inquiries", before: "4/month", after: "16/month", increase: "+300%" },
          { label: "Average Property Value", before: "$2.1M", after: "$3.8M", increase: "+81%" },
          { label: "Social Engagement", before: "850", after: "12.4K", increase: "+1,359%" },
          { label: "Qualified Prospects", before: "2/month", after: "11/month", increase: "+450%" }
        ]
      },
      testimonial: {
        text: "Their understanding of luxury marketing and high-net-worth psychology dramatically improved our results.",
        author: "Lisa Wang",
        position: "Principal, PremiumProperties",
        avatar: "LW"
      },
      tags: ["Real Estate", "Luxury", "Social Media"]
    }
  ];

  const stats = [
    { number: "200+", label: "Success Stories", icon: TrendingUp },
    { number: "$50M+", label: "Revenue Generated", icon: DollarSign },
    { number: "340%", label: "Average Growth", icon: BarChart3 },
    { number: "90%", label: "Client Retention", icon: Users }
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
              Real Results from Real Clients
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              Success Stories That <span className="gradient-text">Speak for Themselves</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              From startups to enterprise companies, see how our AI-powered marketing strategies have delivered 
              <span className="text-primary font-semibold"> measurable, game-changing results</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Detailed <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Dive deep into how we've transformed businesses across industries with data-driven strategies.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="card hover-lift border-2 border-transparent hover:border-primary/20 transition-all duration-500">
                <div className="card-content">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Company Info & Challenge */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-4xl">{study.logo}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{study.company}</h3>
                          <p className="text-muted-foreground">{study.industry}</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                          <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                          <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                        </div>

                        <div className="flex gap-6 text-sm">
                          <div>
                            <span className="text-muted-foreground">Timeline:</span>
                            <span className="ml-2 font-medium text-foreground">{study.timeline}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Investment:</span>
                            <span className="ml-2 font-medium text-foreground">{study.investment}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {study.tags.map((tag, idx) => (
                            <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Results & Testimonial */}
                    <div>
                      <div className="bg-gradient-to-br from-primary/5 to-purple-50/50 dark:to-purple-950/20 rounded-2xl p-6 mb-6">
                        <div className="text-center mb-6">
                          <div className="text-3xl font-bold text-primary mb-2">{study.results.primary}</div>
                          <div className="text-sm text-muted-foreground">Primary Result</div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {study.results.metrics.map((metric, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-lg font-bold text-foreground">{metric.after}</div>
                              <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                              <div className={`text-xs font-medium ${
                                metric.increase ? 'text-green-600' : 'text-red-600'
                              }`}>
                                {metric.increase || metric.decrease}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-2xl p-6">
                        <div className="flex items-start gap-4">
                          <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-muted-foreground italic mb-4 leading-relaxed">
                              "{study.testimonial.text}"
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                                {study.testimonial.avatar}
                              </div>
                              <div>
                                <div className="font-medium text-foreground">{study.testimonial.author}</div>
                                <div className="text-sm text-muted-foreground">{study.testimonial.position}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  Ready to <span className="gradient-text">Join</span> Our Success Stories?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get a free strategy session and discover how we can deliver similar results for your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                    <Sparkles className="h-5 w-5" />
                    Get Your Free Strategy Session
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/services" className="btn btn-outline btn-lg">
                    View Our Services
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free business audit included
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Results guaranteed in 90 days
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    No long-term contracts
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