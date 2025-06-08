import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Sparkles, 
  Quote,
  Settings,
  BarChart3,
  Users,
  Clock,
  Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Automation | MonkMantra - Complete Automation That Works 24/7",
  description: "Automate your entire marketing funnel with AI-powered workflows. Lead scoring, drip campaigns, and CRM integration with +190% lead conversion.",
};

export default function MarketingAutomationPage() {
  const features = [
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Complete marketing automation workflows that capture, nurture, and convert leads without manual intervention."
    },
    {
      icon: Target,
      title: "Lead Scoring & Qualification",
      description: "AI-powered lead scoring that identifies your best prospects and prioritizes them for sales outreach."
    },
    {
      icon: Settings,
      title: "CRM Integration",
      description: "Seamless integration with your CRM and sales tools to create a unified marketing and sales process."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive analytics and reporting that shows exactly how your automation is performing and where to optimize."
    }
  ];

  const automationSolutions = [
    {
      icon: Users,
      name: "Lead Nurturing",
      description: "Automated sequences that nurture leads through the sales funnel with personalized content.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20"
    },
    {
      icon: Target,
      name: "Behavioral Triggers", 
      description: "Smart automation based on user behavior, website activity, and engagement patterns.",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: Settings,
      name: "Sales Automation",
      description: "Automated handoff to sales team with qualified leads and complete interaction history.",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: BarChart3,
      name: "Performance Tracking",
      description: "Real-time tracking and optimization of automation performance across all touchpoints.",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Automation Audit",
      description: "Analyze your current processes and identify automation opportunities for maximum impact.",
      duration: "Week 1"
    },
    {
      step: "02", 
      title: "Workflow Design",
      description: "Design custom automation workflows tailored to your sales funnel and customer journey.",
      duration: "Week 2"
    },
    {
      step: "03",
      title: "Implementation & Testing",
      description: "Implement automation systems with comprehensive testing to ensure flawless operation.",
      duration: "Week 3-4"
    },
    {
      step: "04",
      title: "Monitor & Scale",
      description: "Continuous monitoring and optimization to scale automation and improve performance.",
      duration: "Ongoing"
    }
  ];

  const results = [
    { metric: "Lead Conversion", value: "+190%", description: "Increase in qualified lead conversions" },
    { metric: "Time Savings", value: "25 hrs/week", description: "Average time saved per week" },
    { metric: "Revenue Growth", value: "+280%", description: "Revenue increase from automation" },
    { metric: "Cost Reduction", value: "-60%", description: "Reduction in manual marketing costs" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-yellow-50/30 to-amber-50/30 dark:via-yellow-950/20 dark:to-amber-950/20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-200 rounded-full px-4 py-2 text-sm font-medium text-yellow-700 mb-8 dark:bg-yellow-950/30 dark:border-yellow-800 dark:text-yellow-300">
              <Zap className="h-4 w-4" />
              Marketing Automation
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              Complete Marketing <span className="gradient-text">Automation</span> That Works 24/7
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Automate your entire marketing funnel with AI-powered workflows that capture, nurture, and convert leads while you sleep. 
              <span className="text-yellow-600 font-semibold dark:text-yellow-400"> Average +190% lead conversion</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                <Sparkles className="h-5 w-5" />
                Get Free Automation Audit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#features" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Marketing Automation Services */}
      <section id="features" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Strategic <span className="gradient-text">Marketing Automation</span> Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From lead capture to customer retention, we create intelligent automation that works around the clock to grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 mb-6 dark:bg-yellow-950/30 dark:text-yellow-400">
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

      {/* Complete Marketing Automation Solutions */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Complete <span className="gradient-text">Marketing Automation</span> Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From lead capture to customer retention, we automate every step of your marketing funnel for maximum efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">What We Automate:</h3>
              <div className="space-y-3">
                {[
                  "Lead Scoring & Qualification",
                  "Email Drip Campaigns", 
                  "Social Media Scheduling",
                  "CRM Integration & Management",
                  "Sales Funnel Optimization",
                  "Customer Segmentation",
                  "Abandoned Cart Recovery",
                  "Follow-up Sequences"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {automationSolutions.map((solution, index) => (
                <div key={index} className="card hover-lift text-center">
                  <div className="card-content p-4">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${solution.bgColor} mb-3`}>
                      <solution.icon className={`h-5 w-5 ${solution.color}`} />
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-2">
                      {solution.name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Marketing Automation Process */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Our <span className="gradient-text">Marketing Automation</span> Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to automation that ensures maximum efficiency and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-500 text-white shadow-lg mb-4">
                    <span className="text-lg font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium dark:bg-yellow-950/30 dark:text-yellow-300">
                  <Clock className="h-3 w-3" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Marketing Automation Results */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Proven <span className="gradient-text">Marketing Automation</span> Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Our automation strategies deliver significant improvements in efficiency, conversions, and revenue growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="text-center card hover-lift">
                <div className="card-content">
                  <div className="text-3xl font-bold text-yellow-600 mb-2 dark:text-yellow-400">{result.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{result.metric}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card border-2 border-yellow-200 dark:border-yellow-800">
            <div className="card-content p-8">
              <div className="text-center">
                <Quote className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed max-w-3xl mx-auto">
                  "Their automation system increased our lead conversion by 250% and saves us 20 hours per week. It's like having a marketing team working around the clock."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-medium dark:bg-yellow-950/30 dark:text-yellow-400">
                    LT
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Lisa Thompson</div>
                    <div className="text-sm text-muted-foreground">CEO, GrowthTech</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-background dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-yellow-200 bg-background/90 backdrop-blur-xl shadow-2xl dark:border-yellow-800">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Ready to <span className="gradient-text">Automate</span> Your Marketing?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get a free automation audit and discover how to work smarter, not harder.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                    <Sparkles className="h-5 w-5" />
                    Get Free Automation Audit
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/case-studies" className="btn btn-outline btn-lg">
                    View Case Studies
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free automation audit
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Custom workflows
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