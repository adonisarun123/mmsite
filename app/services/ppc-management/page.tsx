import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Target,
  TrendingUp,
  BarChart3,
  DollarSign,
  Clock,
  Sparkles,
  Quote,
  Search,
  MousePointer,
  Eye
} from "lucide-react";

export const metadata: Metadata = {
  title: "PPC Management | MonkMantra - Precision-Targeted Ad Campaigns",
  description: "Maximize your ad spend with AI-optimized PPC campaigns. Google Ads, Facebook Ads, LinkedIn Ads management with 4.2x average ROAS.",
};

export default function PPCManagementPage() {
  const features = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-powered audience targeting across Google, Facebook, LinkedIn, and other platforms for maximum relevance and conversion."
    },
    {
      icon: TrendingUp,
      title: "Real-Time Optimization",
      description: "Continuous bid management and campaign optimization using machine learning algorithms to maximize your ROAS."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics that show exactly where your ad spend is generating the best returns."
    },
    {
      icon: DollarSign,
      title: "Budget Optimization",
      description: "Smart budget allocation across campaigns and platforms to ensure every dollar is working at maximum efficiency."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Account Audit & Strategy",
      description: "Comprehensive audit of existing campaigns and development of data-driven PPC strategy.",
      duration: "Week 1"
    },
    {
      step: "02", 
      title: "Campaign Setup & Launch",
      description: "Create optimized campaigns with AI-selected keywords, audiences, and ad creatives.",
      duration: "Week 2"
    },
    {
      step: "03",
      title: "Monitor & Optimize",
      description: "Daily monitoring and optimization of bids, budgets, and targeting for peak performance.",
      duration: "Ongoing"
    },
    {
      step: "04",
      title: "Scale & Expand",
      description: "Scale successful campaigns and expand to new platforms and audiences for maximum growth.",
      duration: "Month 2+"
    }
  ];

  const platforms = [
    {
      name: "Google Ads",
      icon: Search,
      description: "Search, Display, Shopping, YouTube campaigns optimized for maximum visibility and conversions."
    },
    {
      name: "Facebook & Instagram",
      icon: Eye,
      description: "Highly targeted social media campaigns that engage your ideal customers where they spend time."
    },
    {
      name: "LinkedIn Ads",
      icon: MousePointer,
      description: "B2B focused campaigns targeting decision-makers and professionals in your industry."
    }
  ];

  const results = [
    { metric: "Average ROAS", value: "4.2x", description: "Return on ad spend across all campaigns" },
    { metric: "Cost Per Click Reduction", value: "-35%", description: "Lower CPCs through optimization" },
    { metric: "Conversion Rate", value: "+190%", description: "Higher converting ad campaigns" },
    { metric: "Lead Quality Score", value: "9.1/10", description: "Higher quality leads and customers" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-red-50/30 to-orange-50/30 dark:via-red-950/20 dark:to-orange-950/20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 rounded-full px-4 py-2 text-sm font-medium text-red-700 mb-8 dark:bg-red-950/30 dark:border-red-800 dark:text-red-300">
              <Target className="h-4 w-4" />
              PPC Management
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              Precision-Targeted <span className="gradient-text">PPC Campaigns</span> That Convert
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Maximize your ad spend with AI-optimized campaigns across Google, Facebook, LinkedIn, and more. 
              <span className="text-red-600 font-semibold dark:text-red-400"> Average 4.2x ROAS guaranteed</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                <Sparkles className="h-5 w-5" />
                Get Free PPC Audit
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
              Why Choose Our <span className="gradient-text">PPC Management</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Advanced AI algorithms and expert management deliver superior results for your ad campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 text-red-600 mb-6 dark:bg-red-950/30 dark:text-red-400">
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

      {/* Platforms Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              <span className="gradient-text">Multi-Platform</span> Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              We manage campaigns across all major advertising platforms for maximum reach and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="card hover-lift text-center">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                    <platform.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {platform.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {platform.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Our <span className="gradient-text">Proven Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From audit to optimization, we follow a systematic approach that delivers consistent results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500 text-white shadow-lg mb-4">
                    <span className="text-lg font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium dark:bg-red-950/30 dark:text-red-300">
                  <Clock className="h-3 w-3" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Testimonial Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Proven <span className="gradient-text">Results</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our PPC campaigns consistently deliver superior performance across all metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="text-center card hover-lift">
                <div className="card-content">
                  <div className="text-3xl font-bold text-red-600 mb-2 dark:text-red-400">{result.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{result.metric}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Client Testimonial */}
          <div className="card border-2 border-red-200 dark:border-red-800">
            <div className="card-content p-8">
              <div className="text-center">
                <Quote className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed max-w-3xl mx-auto">
                  "Our PPC campaigns were bleeding money before MonkMantra. They completely turned things around with their AI optimization. We now get 5x more leads at half the cost."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-medium dark:bg-red-950/30 dark:text-red-400">
                    MR
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Marcus Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Marketing Director, GrowthCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-red-50/50 via-orange-50/30 to-background dark:from-red-950/20 dark:via-orange-950/10 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-red-200 bg-background/90 backdrop-blur-xl shadow-2xl dark:border-red-800">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Ready to <span className="gradient-text">Maximize</span> Your Ad Performance?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get a free PPC audit and discover how to increase your ROAS by 300% or more.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                    <Sparkles className="h-5 w-5" />
                    Get Free PPC Audit
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
                    No setup fees
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