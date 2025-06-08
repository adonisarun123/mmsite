import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  PieChart, 
  Sparkles, 
  Quote,
  BarChart3,
  TrendingUp,
  Target,
  Clock,
  Eye
} from "lucide-react";

export const metadata: Metadata = {
  title: "Analytics & Reporting | MonkMantra - Data-Driven Insights & ROI Tracking",
  description: "Get comprehensive analytics setup and reporting with actionable insights. Custom dashboards and 100% data accuracy for growth optimization.",
};

export default function AnalyticsReportingPage() {
  const features = [
    {
      icon: PieChart,
      title: "Custom Dashboard Creation",
      description: "Build custom analytics dashboards that display the metrics that matter most to your business goals."
    },
    {
      icon: BarChart3,
      title: "Advanced Data Analysis",
      description: "Deep-dive analytics that uncover hidden insights and opportunities for growth and optimization."
    },
    {
      icon: TrendingUp,
      title: "ROI Tracking & Attribution",
      description: "Comprehensive tracking of marketing ROI and multi-channel attribution to optimize budget allocation."
    },
    {
      icon: Target,
      title: "Goal Setting & Monitoring",
      description: "Set up and monitor key performance indicators with automated alerts and progress tracking."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Analytics Audit & Setup",
      description: "Comprehensive audit of current analytics and implementation of proper tracking across all channels.",
      duration: "Week 1"
    },
    {
      step: "02", 
      title: "Dashboard Configuration",
      description: "Build custom dashboards and reports tailored to your specific business needs and KPIs.",
      duration: "Week 2"
    },
    {
      step: "03",
      title: "Data Integration",
      description: "Integrate all data sources and ensure accurate tracking and attribution across all channels.",
      duration: "Week 3"
    },
    {
      step: "04",
      title: "Insights & Optimization",
      description: "Ongoing analysis, insights generation, and optimization recommendations based on data trends.",
      duration: "Ongoing"
    }
  ];

  const results = [
    { metric: "Data Accuracy", value: "100%", description: "Complete accuracy in tracking and reporting" },
    { metric: "Insight Generation", value: "+300%", description: "More actionable insights from data" },
    { metric: "Decision Speed", value: "-75%", description: "Faster data-driven decision making" },
    { metric: "ROI Visibility", value: "Complete", description: "Full visibility into marketing ROI" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-cyan-50/30 to-sky-50/30 dark:via-cyan-950/20 dark:to-sky-950/20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-100 border border-cyan-200 rounded-full px-4 py-2 text-sm font-medium text-cyan-700 mb-8 dark:bg-cyan-950/30 dark:border-cyan-800 dark:text-cyan-300">
              <PieChart className="h-4 w-4" />
              Analytics & Reporting
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              Data-Driven <span className="gradient-text">Analytics & Insights</span> That Drive Growth
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Get comprehensive analytics setup and reporting that provides actionable insights for informed decision-making and growth optimization. 
              <span className="text-cyan-600 font-semibold dark:text-cyan-400"> 100% data accuracy guaranteed</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                <Sparkles className="h-5 w-5" />
                Get Free Analytics Audit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#features" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Analytics Services */}
      <section id="features" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Strategic <span className="gradient-text">Analytics</span> Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From setup to insights, we provide comprehensive analytics solutions that transform data into actionable business intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 mb-6 dark:bg-cyan-950/30 dark:text-cyan-400">
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

      {/* Complete Analytics Solutions */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Complete <span className="gradient-text">Analytics</span> Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From setup to insights, we provide comprehensive analytics that drive business decisions and optimize performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">What We Track:</h3>
              <div className="space-y-3">
                {[
                  "Website Analytics Setup",
                  "Custom Dashboard Creation", 
                  "Conversion Tracking",
                  "ROI Analysis & Reporting",
                  "Performance Monitoring",
                  "Growth Insights & Recommendations",
                  "Multi-Channel Attribution",
                  "Automated Reporting"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <Quote className="h-12 w-12 text-cyan-500 mb-4" />
                <p className="text-lg text-muted-foreground italic mb-6">
                  "Finally, we have clear visibility into what's working and what's not. Their analytics setup gives us the insights we need to make smart decisions."
                </p>
                <div className="font-medium text-foreground">Robert Chen</div>
                <div className="text-sm text-muted-foreground">VP Analytics, DataCorp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Analytics Process */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Our <span className="gradient-text">Analytics</span> Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to analytics implementation that ensures accurate data collection and meaningful insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500 text-white shadow-lg mb-4">
                    <span className="text-lg font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium dark:bg-cyan-950/30 dark:text-cyan-300">
                  <Clock className="h-3 w-3" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Analytics Results */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Proven <span className="gradient-text">Analytics</span> Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Our analytics implementations consistently deliver better data quality, faster insights, and improved decision-making capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="text-center card hover-lift">
                <div className="card-content">
                  <div className="text-3xl font-bold text-cyan-600 mb-2 dark:text-cyan-400">{result.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{result.metric}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card border-2 border-cyan-200 dark:border-cyan-800">
            <div className="card-content p-8">
              <div className="text-center">
                <Quote className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed max-w-3xl mx-auto">
                  "Finally, we have clear visibility into what's working and what's not. Their analytics setup gives us the insights we need to make smart decisions."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-medium dark:bg-cyan-950/30 dark:text-cyan-400">
                    RC
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Robert Chen</div>
                    <div className="text-sm text-muted-foreground">VP Analytics, DataCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-cyan-50/50 via-sky-50/30 to-background dark:from-cyan-950/20 dark:via-sky-950/10 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-cyan-200 bg-background/90 backdrop-blur-xl shadow-2xl dark:border-cyan-800">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Ready to <span className="gradient-text">Optimize</span> with Data?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get a free analytics audit and discover the insights hiding in your data to drive better business decisions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                    <Sparkles className="h-5 w-5" />
                    Get Free Analytics Audit
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/case-studies" className="btn btn-outline btn-lg">
                    View Case Studies
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free analytics audit
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Custom dashboards
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